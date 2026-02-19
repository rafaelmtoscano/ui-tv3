import React, { forwardRef, memo, useMemo } from 'react';
import type { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  label?: string; // Keep label for backward compatibility but prioritize children
}

export const Button = memo(
  forwardRef<HTMLButtonElement, ButtonProps>(
    ({ variant = 'primary', size = 'medium', label, children, style, className, ...props }, ref) => {
      const baseStyles: React.CSSProperties = useMemo(
        () => ({
          fontFamily: 'inherit',
          fontWeight: 700,
          border: 0,
          borderRadius: 8,
          cursor: props.disabled ? 'not-allowed' : 'pointer',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          lineHeight: 1,
          transition: 'all 0.2s ease-in-out',
          opacity: props.disabled ? 0.6 : 1,
        }),
        [props.disabled]
      );

      const sizeStyles: Record<string, React.CSSProperties> = {
        small: { fontSize: 12, padding: '8px 16px' },
        medium: { fontSize: 14, padding: '10px 20px' },
        large: { fontSize: 16, padding: '12px 24px' },
      };

      const variantStyles: Record<string, React.CSSProperties> = {
        primary: { color: '#fff', backgroundColor: '#1ea7fd' },
        secondary: { color: '#333', backgroundColor: 'transparent', border: '1px solid #333' },
      };

      const combinedStyle = useMemo(
        () => ({
          ...baseStyles,
          ...sizeStyles[size],
          ...variantStyles[variant],
          ...style,
        }),
        [baseStyles, size, variant, style]
      );

      return (
        <button
          ref={ref}
          type="button"
          className={className}
          style={combinedStyle}
          {...props}
        >
          {children || label}
        </button>
      );
    }
  )
);

Button.displayName = 'Button';
