import { useEffect, useRef } from 'react';
import { trackScrollDepth } from '../lib/analytics';

// Hook to track scroll depth
export const useScrollTracking = () => {
  const thresholdsReached = useRef(new Set<number>());

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const percentage = Math.round((scrolled / scrollHeight) * 100);

      // Track at 25%, 50%, 75%, and 100%
      const thresholds = [25, 50, 75, 100];
      
      thresholds.forEach((threshold) => {
        if (percentage >= threshold && !thresholdsReached.current.has(threshold)) {
          thresholdsReached.current.add(threshold);
          trackScrollDepth(threshold);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};
