import React, { useState, useEffect, useRef } from 'react';

interface CounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}

const Counter: React.FC<CounterProps> = ({ end, duration = 1500, prefix = '', suffix = '' }) => {
  const [count, setCount] = useState<number>(0);
  const [hasStarted, setHasStarted] = useState<boolean>(false);
  const elementRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const currentElement = elementRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setHasStarted(true);
          if (currentElement) {
            observer.unobserve(currentElement);
          }
        }
      },
      { threshold: 0.2 }
    );

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      
      // Easing function (easeOutQuad)
      const easeProgress = progress * (2 - progress);
      const currentCount = Math.floor(easeProgress * end);

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [hasStarted, end, duration]);

  return (
    <span ref={elementRef} className="counter-number">
      {prefix}
      {count}
      {suffix}
    </span>
  );
};

export default Counter;
