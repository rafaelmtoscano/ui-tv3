import type { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  label: string;
}

export function Button({
  variant = 'primary',
  size = 'medium',
  label,
  ...props
}: ButtonProps) {
  const baseStyles: React.CSSProperties = {
    fontFamily: 'inherit',
    fontWeight: 700,
    border: 0,
    borderRadius: 8,
    cursor: 'pointer',
    display: 'inline-block',
    lineHeight: 1,
  };

  const sizeStyles: Record<string, React.CSSProperties> = {
    small: { fontSize: 12, padding: '8px 16px' },
    medium: { fontSize: 14, padding: '10px 20px' },
    large: { fontSize: 16, padding: '12px 24px' },
  };

  const variantStyles: Record<string, React.CSSProperties> = {
    primary: { color: '#fff', backgroundColor: '#1ea7fd' },
    secondary: { color: '#333', backgroundColor: 'transparent', border: '1px solid #333' },
  };

  return (
    <button
      type="button"
      style={{ ...baseStyles, ...sizeStyles[size], ...variantStyles[variant] }}
      {...props}
    >
      {label}
    </button>
  );
}
