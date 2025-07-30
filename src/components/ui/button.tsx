import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glass';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
}

const buttonVariants = {
  primary: 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 shadow-lg hover:shadow-xl',
  secondary: 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 shadow-lg hover:shadow-xl',
  outline: 'border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white',
  ghost: 'text-green-600 hover:bg-green-50',
  glass: 'bg-white/10 backdrop-blur-sm text-white border border-white/30 hover:bg-white/20'
};

const buttonSizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
  xl: 'px-10 py-5 text-xl'
};

export function Button({ 
  children, 
  className, 
  href, 
  onClick, 
  variant = 'primary', 
  size = 'md',
  icon,
  iconPosition = 'right',
  disabled = false
}: ButtonProps) {
  const baseClasses = cn(
    'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2',
    buttonVariants[variant],
    buttonSizes[size],
    disabled && 'opacity-50 cursor-not-allowed hover:scale-100',
    className
  );

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </>
  );

  if (href && !disabled) {
    return (
      <Link href={href} className={baseClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button 
      className={baseClasses} 
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
}

// Specialized Hero Buttons
export function HeroPrimaryButton({ children, href = '#', className, ...props }: Omit<ButtonProps, 'variant' | 'size'>) {
  return (
    <Button
      variant="primary"
      size="lg"
      href={href}
      className={cn('shadow-2xl', className)}
      icon={
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      }
      {...props}
    >
      {children}
    </Button>
  );
}

export function HeroSecondaryButton({ children, href = '#', className, ...props }: Omit<ButtonProps, 'variant' | 'size'>) {
  return (
    <Button
      variant="glass"
      size="lg"
      href={href}
      className={className}
      {...props}
    >
      {children}
    </Button>
  );
}
