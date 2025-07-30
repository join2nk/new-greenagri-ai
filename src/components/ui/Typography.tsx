import React from 'react';
import { cn } from '@/lib/utils';

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
  gradient?: boolean;
  color?: 'primary' | 'secondary' | 'white' | 'muted';
}

// Main Hero Title
export function HeroTitle({ children, className, gradient = false, color = 'white' }: TypographyProps) {
  const colorClasses = {
    primary: 'text-green-600',
    secondary: 'text-emerald-600',
    white: 'text-white',
    muted: 'text-gray-600'
  };

  return (
    <h1 className={cn(
      'text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight',
      gradient 
        ? 'bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent'
        : colorClasses[color],
      className
    )}>
      {children}
    </h1>
  );
}

// Section Title
export function SectionTitle({ children, className, gradient = false, color = 'primary' }: TypographyProps) {
  const colorClasses = {
    primary: 'text-gray-900',
    secondary: 'text-green-600',
    white: 'text-white',
    muted: 'text-gray-600'
  };

  return (
    <h2 className={cn(
      'text-3xl sm:text-4xl md:text-5xl font-bold leading-tight',
      gradient 
        ? 'bg-gradient-to-r from-green-600 via-green-700 to-emerald-600 bg-clip-text text-transparent'
        : colorClasses[color],
      className
    )}>
      {children}
    </h2>
  );
}

// Subsection Title
export function SubsectionTitle({ children, className, color = 'primary' }: TypographyProps) {
  const colorClasses = {
    primary: 'text-gray-800',
    secondary: 'text-green-600',
    white: 'text-white',
    muted: 'text-gray-600'
  };

  return (
    <h3 className={cn(
      'text-2xl sm:text-3xl font-semibold leading-tight',
      colorClasses[color],
      className
    )}>
      {children}
    </h3>
  );
}

// Card Title
export function CardTitle({ children, className, color = 'primary' }: TypographyProps) {
  const colorClasses = {
    primary: 'text-gray-900',
    secondary: 'text-green-600',
    white: 'text-white',
    muted: 'text-gray-600'
  };

  return (
    <h4 className={cn(
      'text-xl sm:text-2xl font-semibold leading-tight',
      colorClasses[color],
      className
    )}>
      {children}
    </h4>
  );
}

// Subtitle/Overline
export function Subtitle({ children, className, color = 'secondary' }: TypographyProps) {
  const colorClasses = {
    primary: 'text-gray-600',
    secondary: 'text-green-600',
    white: 'text-green-300',
    muted: 'text-gray-500'
  };

  return (
    <p className={cn(
      'text-lg md:text-xl font-medium tracking-wide uppercase',
      colorClasses[color],
      className
    )}>
      {children}
    </p>
  );
}

// Body Text
export function BodyText({ children, className, color = 'primary' }: TypographyProps) {
  const colorClasses = {
    primary: 'text-gray-700',
    secondary: 'text-gray-600',
    white: 'text-gray-200',
    muted: 'text-gray-500'
  };

  return (
    <p className={cn(
      'text-lg md:text-xl leading-relaxed',
      colorClasses[color],
      className
    )}>
      {children}
    </p>
  );
}

// Large Body Text
export function LargeText({ children, className, color = 'primary' }: TypographyProps) {
  const colorClasses = {
    primary: 'text-gray-700',
    secondary: 'text-gray-600',
    white: 'text-gray-200',
    muted: 'text-gray-500'
  };

  return (
    <p className={cn(
      'text-xl md:text-2xl leading-relaxed',
      colorClasses[color],
      className
    )}>
      {children}
    </p>
  );
}

// Small Text
export function SmallText({ children, className, color = 'muted' }: TypographyProps) {
  const colorClasses = {
    primary: 'text-gray-600',
    secondary: 'text-green-600',
    white: 'text-gray-300',
    muted: 'text-gray-500'
  };

  return (
    <p className={cn(
      'text-sm md:text-base',
      colorClasses[color],
      className
    )}>
      {children}
    </p>
  );
}
