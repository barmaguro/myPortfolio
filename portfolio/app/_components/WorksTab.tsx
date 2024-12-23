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
      <TabsList className="gap-6 flex justify-center">
        {category.map((cat) => (
          <TabsTrigger
            onClick={() => setSelectedCategory(cat.id)}
            value={cat.id}
            key={cat.id}
            className={
              selectedCategory === cat.id ? "font-bold text-lg" : " opacity-50"
            }
          >
            {cat.name}
          </TabsTrigger>
        ))}
      </TabsList>
    </>
  );
}
