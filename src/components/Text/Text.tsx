import React, { forwardRef, memo } from 'react';
import { typography } from '../../styles/typography';
import type { TypographyVariant } from '../../styles/typography';

type Size = 'large' | 'medium' | 'small';

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant;
  size?: Size;
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
}

export const Text = memo(
  forwardRef<HTMLElement, TextProps>(
    ({ variant = 'body', size = 'medium', as: Tag = 'p', children, className, style, ...props }, ref) => {
      const variantTypography = typography[variant] as Record<string, React.CSSProperties>;
      const typographyStyle = variantTypography[size] || variantTypography['medium'] || {};

      return (
        <Tag
          ref={ref as any}
          style={{ ...typographyStyle, ...style }}
          className={className}
          {...props}
        >
          {children}
        </Tag>
      );
    }
  )
);

Text.displayName = 'Text';
