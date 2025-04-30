"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ReactNode, useRef } from "react";

type MarkerProps = {
  children: ReactNode;
  addClass?: string;
};

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function MaskEffect({ children, addClass = "" }: MarkerProps) {
  const ref = useRef(null);

  useGSAP(
    () => {
      gsap
        .timeline()
        .fromTo(
          ref.current,
          {
            scaleX: "0%",
          },
          { scaleX: "100%" ,
            opacity:1,
            duration:0.6,
          }
        )
        .fromTo(
          ref.current,
          {
            "--translateX": "0%",
          },
          {
            duration:1.6,
            "--translateX": "100%",
          }
        );
    },
    { scope: ref }
  );


  return (
    <>
      <h1
        id="mask-effect"
        ref={ref}
        className={`relative left-0 -bottom-5 whitespace-nowrap origin-left opacity-0 w-fit overflow-hidden before:absolute px-4 py-2 text-xl  text-white before:top-0 before:h-full before:w-full before:translate-x-[var(--translateX)] before:bg-white mf:text-2xl lg:text-3xl  ${addClass}`}
      >
        {children}
      </h1>
    </>
  );
}
