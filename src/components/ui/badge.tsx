import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'glass' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
}

const badgeVariants = {
  primary: 'bg-green-100 text-green-800 border border-green-200',
  secondary: 'bg-blue-100 text-blue-800 border border-blue-200',
  success: 'bg-emerald-100 text-emerald-800 border border-emerald-200',
  warning: 'bg-yellow-100 text-yellow-800 border border-yellow-200',
  glass: 'bg-white/10 backdrop-blur-sm text-white border border-white/20',
  outline: 'border border-gray-500 text-gray-800 bg-white hover:bg-gray-50'

};

const badgeSizes = {
  sm: 'px-2 py-1 text-xs',
  md: 'px-3 py-1.5 text-sm',
  lg: 'px-4 py-2 text-base'
};

export function Badge({ 
  children, 
  className, 
  variant = 'primary', 
  size = 'md',
  icon 
}: BadgeProps) {
  return (
    <span className={cn(
      'inline-flex items-center font-medium rounded-full transition-all duration-200',
      badgeVariants[variant],
      badgeSizes[size],
      className
    )}>
      {icon && <span className="mr-1.5">{icon}</span>}
      {children}
    </span>
  );
}

export function FeatureBadge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <Badge
      variant="glass"
      size="md"
      icon="✓"
      className={className}
    >
      {children}
    </Badge>
  );
}
