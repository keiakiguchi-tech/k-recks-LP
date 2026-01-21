import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  fullWidth = false,
  className = '',
  style,
  ...props
}) => {
  const baseStyles: React.CSSProperties = {
    padding: '12px 24px',
    borderRadius: '4px',
    fontSize: '16px',
    fontWeight: 600,
    transition: 'all 0.3s ease',
    width: fullWidth ? '100%' : 'auto',
    textAlign: 'center',
    display: 'inline-block',
    cursor: 'pointer'
  };

  const variants = {
    primary: {
      backgroundColor: 'var(--color-primary)',
      color: 'var(--color-white)',
      border: '2px solid var(--color-primary)',
    },
    secondary: {
      backgroundColor: 'var(--color-accent)',
      color: 'var(--color-white)',
      border: '2px solid var(--color-accent)',
    },
    outline: {
      backgroundColor: 'transparent',
      color: 'var(--color-primary)',
      border: '2px solid var(--color-primary)',
    },
    white: {
      backgroundColor: 'white',
      color: 'var(--color-primary)',
      border: '2px solid white',
    }
  };

  // Merge order: base < variant < style prop
  const combinedStyle = { ...baseStyles, ...variants[variant], ...style };

  return (
    <button
      style={combinedStyle}
      className={className}
      {...props}
      onMouseOver={(e) => {
        const target = e.currentTarget;
        if (variant === 'outline') {
          target.style.backgroundColor = 'var(--color-primary)';
          target.style.color = 'var(--color-white)';
        } else {
          // Solid buttons (primary, secondary, white) just get opacity effect
          target.style.opacity = '0.9';
          target.style.transform = 'translateY(-1px)';
        }
      }}
      onMouseOut={(e) => {
        const target = e.currentTarget;
        if (variant === 'outline') {
          target.style.backgroundColor = 'transparent';
          target.style.color = 'var(--color-primary)';
        } else {
          target.style.opacity = '1';
          target.style.transform = 'translateY(0)';
        }
      }}
    >
      {children}
    </button>
  );
};
