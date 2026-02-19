import React from 'react';
import { typography } from '../../styles/typography';

type Variant = 'display' | 'headline' | 'body' | 'label';
type Size = 'large' | 'medium' | 'small';

interface TextProps {
  variant?: Variant;
  size?: Size;
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
}

export const Text = ({
  variant = 'body',
  size = 'medium',
  as: Tag = 'p',
  children,
  className,
}: TextProps) => {
  const style = (typography[variant] as any)?.[size];

  return (
    <Tag style={style} className={className}>
      {children}
    </Tag>
  );
};
