import React, { ReactNode, useEffect, useRef } from 'react';

// Describe Props
type Props = {
  children: ReactNode;
  onContentEndVisible: () => void;
}

export function Observer({ children, onContentEndVisible }: Props) {
  // Specify the correct type for useRef, pay attention to which DOM element we are passing it to
  const endContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Specify the correct type for options, hint, class can also be specified as a type
    const options: IntersectionObserverInit = {
      rootMargin: '0px',
      threshold: 1.0,
      root: null,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          onContentEndVisible();
          observer.disconnect();
        }
      });
    }, options);

    if (endContentRef.current) {
      observer.observe(endContentRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [onContentEndVisible]);

  return (
    <div>
      {children}
      <div ref={endContentRef} />
    </div>
  );
}
