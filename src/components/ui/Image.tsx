import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
// todo:: use Image from nextjs
interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  fill?: boolean;
  variant?: 'default' | 'rounded' | 'circle' | 'hero' | 'card';
  overlay?: boolean;
  overlayGradient?: string;
  priority?: boolean;
}

const imageVariants = {
  default: '',
  rounded: 'rounded-xl overflow-hidden',
  circle: 'rounded-full overflow-hidden',
  hero: 'object-cover object-center',
  card: 'rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300'
};

export function StyledImage({ 
  src, 
  alt, 
  className, 
  width, 
  height, 
  fill = false,
  variant = 'default',
  overlay = false,
  overlayGradient = 'from-black/40 to-black/20',
  priority = false
}: ImageProps) {
  return (
    <div className={cn('relative', imageVariants[variant], className)}>
      <img
        src={src}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        // fill={fill}
        className={cn(
          'transition-transform duration-300 hover:scale-105',
          variant === 'hero' && 'object-cover object-center'
        )}
        // priority={priority}
      />
      {overlay && (
        <div className={cn('absolute inset-0 bg-gradient-to-r', overlayGradient)} />
      )}
    </div>
  );
}

export function HeroImage({ src, alt, className, overlayGradient = 'from-green-900/80 via-emerald-800/70 to-teal-900/80' }: ImageProps) {
  return (
    <StyledImage
      src={src}
      alt={alt}
      fill
      variant="hero"
      overlay
      overlayGradient={overlayGradient}
      className={cn('absolute inset-0', className)}
      priority
    />
  );
}

export function CardImage({ src, alt, width = 400, height = 300, className }: ImageProps) {
  return (
    <StyledImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      variant="card"
      className={className}
    />
  );
}
