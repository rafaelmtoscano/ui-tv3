import React, { forwardRef, memo, useCallback, useEffect, useRef, useState } from 'react';
import { ActionButton } from '../ActionButton';
import { colors } from '../../styles/colors';
import { typography } from '../../styles/typography';

export interface HeroBannerSlide {
  id: string;
  mediaType: 'image' | 'video';
  mediaSrc: string;
  logo?: string;
  isLive?: boolean;
  title: string;
  description?: string;
  buttonLabel?: string;
  onButtonClick?: () => void;
}

export interface HeroBannerProps {
  slides: HeroBannerSlide[];
  autoPlayInterval?: number;
  onSlideChange?: (index: number) => void;
  className?: string;
}

export const HeroBanner = memo(
  forwardRef<HTMLDivElement, HeroBannerProps>(
    ({ slides, autoPlayInterval = 15000, onSlideChange, className }, ref) => {
      const [activeIndex, setActiveIndex] = useState(0);
      const [isPaused, setIsPaused] = useState(true);
      const containerRef = useRef<HTMLDivElement>(null);
      const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

      const goToSlide = useCallback(
        (index: number) => {
          setActiveIndex(index);
          onSlideChange?.(index);
        },
        [onSlideChange]
      );

      useEffect(() => {
        if (isPaused || slides.length <= 1) return;
        intervalRef.current = setInterval(() => {
          setActiveIndex((i) => {
            const next = (i + 1) % slides.length;
            onSlideChange?.(next);
            return next;
          });
        }, autoPlayInterval);
        return () => {
          if (intervalRef.current) clearInterval(intervalRef.current);
        };
      }, [isPaused, slides.length, autoPlayInterval, onSlideChange]);

      const handleFocus = () => setIsPaused(true);

      const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
        const related = e.relatedTarget as Node | null;
        if (!containerRef.current?.contains(related)) {
          setIsPaused(false);
        }
      };

      const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowLeft') {
          e.preventDefault();
          if (activeIndex > 0) goToSlide(activeIndex - 1);
        } else if (e.key === 'ArrowRight') {
          e.preventDefault();
          if (activeIndex < slides.length - 1) goToSlide(activeIndex + 1);
        } else if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          slides[activeIndex]?.onButtonClick?.();
        }
      };

      const containerStyle: React.CSSProperties = {
        width: '100%',
        height: '680px',
        position: 'relative',
        overflow: 'hidden',
        background: colors.background.baseInverse,
        outline: 'none',
      };

      const mediaLayerStyle: React.CSSProperties = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
      };

      const scrimBaseStyle: React.CSSProperties = {
        position: 'absolute',
        pointerEvents: 'none',
        zIndex: 1,
      };

      const contentLayerStyle: React.CSSProperties = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '0 64px 48px',
        boxSizing: 'border-box',
      };

      const topRowStyle: React.CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
      };

      const liveTagStyle: React.CSSProperties = {
        background: '#E52207',
        borderRadius: '8px',
        padding: '4px 16px',
        color: '#FFF',
        display: 'inline-flex',
        alignItems: 'center',
        ...typography.body.large,
      };

      const mainContentStyle: React.CSSProperties = {
        position: 'absolute',
        bottom: '120px',
        left: '64px',
        maxWidth: '580px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
      };

      const titleStyle: React.CSSProperties = {
        color: colors.text.primaryInverse,
        fontFamily: 'Plus Jakarta Sans, Inter, system-ui, -apple-system, sans-serif',
        fontSize: '56px',
        fontWeight: 700,
        lineHeight: '110%',
        margin: 0,
        overflow: 'hidden',
        display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
      };

      const descriptionStyle: React.CSSProperties = {
        ...typography.body.large,
        color: colors.text.secondaryInverse,
        margin: 0,
        overflow: 'hidden',
        display: '-webkit-box',
        WebkitLineClamp: 3,
        WebkitBoxOrient: 'vertical',
      };

      const bottomRowStyle: React.CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        gap: '48px',
      };

      const paginationStyle: React.CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
      };

      const slide = slides[activeIndex];

      return (
        <div
          ref={(node) => {
            (containerRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
            if (typeof ref === 'function') ref(node);
            else if (ref) ref.current = node;
          }}
          style={containerStyle}
          className={className}
          tabIndex={0}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          aria-label={`Hero banner: ${slide?.title}`}
          role="region"
        >
          {/* Media layers */}
          {slides.map((s, i) => (
            <div
              key={s.id}
              style={{
                ...mediaLayerStyle,
                opacity: activeIndex === i ? 1 : 0,
                transition: 'opacity 0.6s ease-in-out',
              }}
            >
              {s.mediaType === 'video' ? (
                <video
                  src={s.mediaSrc}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              ) : (
                <img
                  src={s.mediaSrc}
                  alt={s.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              )}
            </div>
          ))}

          {/* Scrim 1 — top radial */}
          <div
            style={{
              ...scrimBaseStyle,
              top: 0,
              left: 0,
              width: '100%',
              height: '50%',
              background:
                'radial-gradient(ellipse at 30% 0%, rgba(255,255,255,0.15) 0%, rgba(17,23,43,0.0) 60%)',
            }}
          />

          {/* Scrim 2 — left-to-right */}
          <div
            style={{
              ...scrimBaseStyle,
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background:
                'linear-gradient(90deg, rgba(17,23,43,0.92) 0%, rgba(17,23,43,0.6) 35%, rgba(17,23,43,0.0) 65%)',
            }}
          />

          {/* Scrim 3 — bottom fade */}
          <div
            style={{
              ...scrimBaseStyle,
              bottom: 0,
              left: 0,
              width: '100%',
              height: '30%',
              background:
                'linear-gradient(0deg, rgba(17,23,43,0.95) 0%, rgba(17,23,43,0.0) 100%)',
            }}
          />

          {/* Content layer */}
          <div style={contentLayerStyle}>
            {slides.map((s, i) => {
              const isActive = activeIndex === i;
              return (
                <div
                  key={s.id}
                  style={{
                    ...mainContentStyle,
                    position: 'absolute',
                    top: 0,
                    left: '64px',
                    bottom: '120px',
                    width: '580px',
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? 'translateY(0)' : 'translateY(16px)',
                    transition: isActive
                      ? 'opacity 0.4s ease-in-out 0.3s, transform 0.4s cubic-bezier(0.4, 0, 0.2, 1) 0.3s'
                      : 'opacity 0.25s ease-in-out 0s, transform 0.25s cubic-bezier(0.4, 0, 0.2, 1) 0s',
                    pointerEvents: isActive ? 'auto' : 'none',
                    justifyContent: 'flex-end',
                  }}
                >
                  {/* Top row — logo + live tag */}
                  {(s.logo || s.isLive) && (
                    <div style={topRowStyle}>
                      {s.logo && (
                        <img
                          src={s.logo}
                          alt="Channel logo"
                          style={{ height: '48px', objectFit: 'contain' }}
                        />
                      )}
                      {s.isLive && <span style={liveTagStyle}>Ao vivo</span>}
                    </div>
                  )}
                  <h1 style={titleStyle}>{s.title}</h1>
                  {s.description && <p style={descriptionStyle}>{s.description}</p>}
                </div>
              );
            })}

            {/* Bottom row — button + pagination */}
            <div style={bottomRowStyle}>
              {(slide?.buttonLabel !== undefined || slides.some((s) => s.buttonLabel)) && (
                <ActionButton
                  variant="text"
                  label={slide?.buttonLabel || 'Assistir'}
                  onClick={slide?.onButtonClick}
                  state={isPaused ? 'focus' : 'idle'}
                />
              )}

              {slides.length > 1 && (
                <div style={paginationStyle} role="tablist" aria-label="Slides">
                  {slides.map((s, i) => (
                    <button
                      key={s.id}
                      role="tab"
                      aria-selected={activeIndex === i}
                      aria-label={`Slide ${i + 1}: ${s.title}`}
                      onClick={() => goToSlide(i)}
                      style={{
                        width: activeIndex === i ? '24px' : '8px',
                        height: '8px',
                        borderRadius: '100px',
                        background:
                          activeIndex === i ? '#FFF' : 'rgba(255,255,255,0.4)',
                        border: 'none',
                        padding: 0,
                        cursor: 'pointer',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        outline: 'none',
                        flexShrink: 0,
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      );
    }
  )
);

HeroBanner.displayName = 'HeroBanner';
