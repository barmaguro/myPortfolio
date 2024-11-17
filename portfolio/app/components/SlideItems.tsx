"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";

const skills = [
  { html: { url: "/images/icon_html5.svg", alt: "HTML5" } },
  { css: { url: "/images/icon_css3.svg", alt: "CSS3" } },
  { wordpress: { url: "/images/icon_wordpress.svg", alt: "WordPress" } },
  { tailwind: { url: "/images/icon_tailwindcss.svg", alt: "Tailwind CSS" } },
  { vue: { url: "/images/icon_vue.svg", alt: "Vue.js" } },
  { nuxt: { url: "/images/icon_nuxtjs.svg", alt: "Nuxt.js" } },
  { react: { url: "/images/icon_react.svg", alt: "React" } },
];

export default function SlideItems() {
  const isHover = useRef(null);
  useGSAP(() => {
    const box = document.querySelectorAll(".js_box");

    box.forEach((box) => {
      box.addEventListener("mouseover", () => {
        gsap.to(box, {
          scale: 1.2,
          x: -6,
          y: -10,
          ease: "power2.inOut",
          filter: "drop-shadow(0 2px 5px rgba(0, 0, 0, 0.3))",
          onComplete: () => {
            gsap.to(box, {
              scale: 1,
              x: 0,
              y: 0,
              ease: "power2.inOut",
              filter: "none",
              duration: 0.6,
            });
          }
        });
        box.addEventListener("mouseout", () => {
          gsap.to(box, {
            scale: 1,
            x: 0,
            y: 0,
            ease: "power2.inOut",
            filter: "none",
            duration: 0.6,
          });
        });
      });
      {
        scope: isHover;
      }
    });
  });

    const skillList = skills.map((skill, index) => {
      const key = Object.keys(skill)[0];
      const value = Object.values(skill)[0];
      return (
        <div className="js_box w-10 "key={key}>
          <Image src={value.url} alt={value.alt} width={60} height={60} />
        </div>
      );
    });

    return (
      <div className="flex gap-2 items-center" ref={isHover}>
        {skillList}
      </div>
    );
}
