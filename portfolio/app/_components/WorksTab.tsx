"use client";
import { useGSAP } from '@gsap/react';
import { TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useState } from "react";
import { Category } from "./_libs/microcms";

type Props = {
  category: Category[];
};

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function WorksTab({ category }: Props) {
  const [selectedCategory, setSelectedCategory] = useState(category[0].id); // 選択中のカテゴリ


  return (
    <>
      <TabsList className="flex w-full items-center justify-around gap-9 border-b border-gray-400 pb-4 md:text-lg lg:mt-10 lg:w-[250px] lg:flex-col lg:items-start lg:border-b-0 lg:text-xl ">
        {category.map((cat) => (
          <TabsTrigger
            onClick={() => setSelectedCategory(cat.id)}
            value={cat.id}
            key={cat.id}
            className={
              selectedCategory === cat.id ? "global_clip-path__right-arrow relative scale-110 whitespace-nowrap font-medium transition-transform before:h-4 before:w-3 before:animate-rotate-hor-center" : " whitespace-nowrap  opacity-50 transition hover:text-accentLight hover:opacity-100"
            }
          >
            {cat.name}
          </TabsTrigger>
        ))}
      </TabsList>
    </>
  );
}
