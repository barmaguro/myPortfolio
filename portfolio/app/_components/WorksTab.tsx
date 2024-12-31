"use client";
import { TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { useState } from "react";
import { Category, Works } from "./_libs/microcms";

type Props = {
  category: Category[];
};

export default function WorksTab({ category}: Props) {
  const [selectedCategory, setSelectedCategory] = useState(category[0].id); // 選択中のカテゴリ

  return (
    <>
      <TabsList className="gap-8 flex justify-center items-center lg:flex-col lg:w-[250px] lg:items-start lg:mt-10 ">
        {category.map((cat) => (
          <TabsTrigger
            onClick={() => setSelectedCategory(cat.id)}
            value={cat.id}
            key={cat.id}
            className={
              selectedCategory === cat.id ? "font-medium md:text-lg scale-110 transition-transform relative global_clip-path__right-arrow before:w-2 before:h-3" : " opacity-50"
            }
          >
            {cat.name}
          </TabsTrigger>
        ))}
      </TabsList>
    </>
  );
}
