"use client"

import Gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ReactNode, useEffect, useRef } from 'react';

type MarkerProps = {
  children: ReactNode;
};

Gsap.registerPlugin(ScrollTrigger);
Gsap.config({
    nullTargetWarn: false,
});

export default function Marker({ children }: MarkerProps) {
  const ref = useRef(null);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      Gsap.to(ref.current, {
        scrollTrigger: {
          trigger: ref.current,
          start: 'top center',
          markers: true,
        },
        scale: 1,
        duration: 1,
      });
    }
  }, []); 

  return (
    <>
      <span ref={ref} className="text-lg font-bold before:scale-0 relative before:block before:w-5/6 before:h-2 before:bottom-0 before:bg-accentLight before:absolute before:left-1/2 before:-translate-x-1/2 before:-z-10 before:rounded">
        {children}
      </span>
    </>
  );
}
