"use client"

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ReactNode, useRef } from 'react';

type MarkerProps = {
  children: ReactNode;
};

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function Marker({ children }: MarkerProps) {

  const ref = useRef(null);

  useGSAP(
    () => {
        gsap.to(ref.current, {
          scrollTrigger: {
            trigger:ref.current,
            start: 'top center',
            markers: true,
          },
          '--scaleX': 1,
          duration: 1,
        });
    },
    { scope: ref }
  );

  return (
    <>
      <span id='marker' ref={ref} className="relative text-lg font-bold before:absolute before:bottom-0 before:left-1/2 before:-z-10 before:block before:h-2 before:w-5/6 before:origin-left before:-translate-x-1/2 before:scale-[var(--scaleX)] before:rounded before:bg-accentLight">
        {children}
      </span>
    </>
  );
}