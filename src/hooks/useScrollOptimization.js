import { useEffect, useCallback, useRef } from 'react';

// Throttle function for performance optimization
const throttle = (func, limit) => {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
};

// Debounce function for performance optimization
const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

export const useScrollOptimization = (callback, dependencies = [], throttleMs = 16) => {
  const callbackRef = useRef(callback);
  const tickingRef = useRef(false);

  // Update callback ref when callback changes
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  // Optimized scroll handler with requestAnimationFrame
  const handleScroll = useCallback(() => {
    if (!tickingRef.current) {
      requestAnimationFrame(() => {
        callbackRef.current();
        tickingRef.current = false;
      });
      tickingRef.current = true;
    }
  }, []);

  // Throttled scroll handler
  const throttledScrollHandler = useCallback(
    throttle(handleScroll, throttleMs),
    [handleScroll, throttleMs]
  );

  useEffect(() => {
    window.addEventListener('scroll', throttledScrollHandler, { passive: true });
    return () => window.removeEventListener('scroll', throttledScrollHandler);
  }, [throttledScrollHandler]);

  return { handleScroll: throttledScrollHandler };
};

export const useIntersectionObserver = (callback, options = {}) => {
  const observerRef = useRef(null);
  const elementRef = useRef(null);

  const defaultOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
    ...options
  };

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback(entry);
        }
      });
    }, defaultOptions);

    if (elementRef.current) {
      observerRef.current.observe(elementRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [callback, defaultOptions]);

  return elementRef;
};

export const useResizeOptimization = (callback, dependencies = []) => {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const debouncedResizeHandler = useCallback(
    debounce(() => {
      callbackRef.current();
    }, 250),
    []
  );

  useEffect(() => {
    window.addEventListener('resize', debouncedResizeHandler, { passive: true });
    return () => window.removeEventListener('resize', debouncedResizeHandler);
  }, [debouncedResizeHandler]);

  return { handleResize: debouncedResizeHandler };
};

export const usePerformanceMonitor = () => {
  const performanceRef = useRef({
    scrollEvents: 0,
    resizeEvents: 0,
    lastScrollTime: 0,
    lastResizeTime: 0
  });

  const logPerformance = useCallback(() => {
    const perf = performanceRef.current;
    console.log('Performance Stats:', {
      scrollEvents: perf.scrollEvents,
      resizeEvents: perf.resizeEvents,
      averageScrollInterval: perf.scrollEvents > 0 ? 
        (Date.now() - perf.lastScrollTime) / perf.scrollEvents : 0
    });
  }, []);

  const incrementScrollEvents = useCallback(() => {
    performanceRef.current.scrollEvents++;
    performanceRef.current.lastScrollTime = Date.now();
  }, []);

  const incrementResizeEvents = useCallback(() => {
    performanceRef.current.resizeEvents++;
    performanceRef.current.lastResizeTime = Date.now();
  }, []);

  return {
    logPerformance,
    incrementScrollEvents,
    incrementResizeEvents
  };
};
