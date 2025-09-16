import { useState, useEffect } from 'react';

// Hook to detect prefers-reduced-motion
export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const handler = () => setReduced(mq.matches);
    try {
      mq.addEventListener('change', handler);
    } catch (e) {
      mq.addListener(handler);
    }
    return () => {
      try { mq.removeEventListener('change', handler); } catch (e) { mq.removeListener(handler); }
    };
  }, []);

  return reduced;
}
