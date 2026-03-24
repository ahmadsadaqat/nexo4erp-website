'use client'

import React, { useRef, useEffect, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  width?: 'full' | 'auto';
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ children, className = "", delay = 0, width = 'full' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger if intersecting
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        // Lower threshold ensures it triggers even if only a pixel is visible
        threshold: 0,
        // Removed negative margin which was likely preventing detection at the very top of the page on some screens
        rootMargin: "0px" 
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      // Initial state: opacity-0, blur, translate-y-8 (starts slightly down)
      // Final state: opacity-100, no blur, translate-y-0
      className={`
        transform transition-all duration-1000 ease-in-out will-change-[transform,opacity,filter]
        ${width === 'full' ? 'w-full' : 'w-auto'}
        ${className}
        ${isVisible 
          ? 'opacity-100 blur-0 translate-y-0' 
          : 'opacity-0 blur-[2px] translate-y-8' 
        }
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;