import Link from 'next/link';
import { ArrowRight, Send } from 'lucide-react';
import { type ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: 'gold' | 'outline' | 'dark' | 'white';
  size?: 'sm' | 'md' | 'lg';
  icon?: 'arrow' | 'send' | 'none';
  className?: string;
  type?: 'button' | 'submit';
  onClick?: () => void;
  disabled?: boolean;
}

export default function Button({
  children,
  href,
  variant = 'gold',
  size = 'md',
  icon = 'arrow',
  className = '',
  type = 'button',
  onClick,
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-300 cursor-pointer';

  const sizeStyles = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-3.5 text-sm',
  };

  const variantStyles = {
    gold: 'bg-gold hover:bg-gold-light text-navy-deep hover:shadow-lg hover:shadow-gold/20',
    outline:
      'border-2 border-gold text-gold hover:bg-gold hover:text-navy-deep',
    dark: 'bg-navy-deep hover:bg-navy-dark text-white border border-card-border hover:border-gold',
    white: 'bg-white hover:bg-gray-50 text-navy-deep shadow-md hover:shadow-lg',
  };

  const iconEl =
    icon === 'arrow' ? (
      <ArrowRight className="w-4 h-4" />
    ) : icon === 'send' ? (
      <Send className="w-4 h-4" />
    ) : null;

  const classes = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
        {iconEl}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {children}
      {iconEl}
    </button>
  );
}
