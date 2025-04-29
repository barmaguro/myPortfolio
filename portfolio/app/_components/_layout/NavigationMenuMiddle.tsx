"use client";
import CategoryList from "@/components/CategoryList";
import { navItems } from "@/libs/navigation";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@radix-ui/react-hover-card";
import Link from "next/link";
import { useState } from "react";
import { Category } from "../_libs/microcms";

type NavigationMenuMiddleProps = {
  categories: Category[];
};

export default function NavigationMenuMiddle({
  categories,
}: NavigationMenuMiddleProps) {
  return (
    <nav className="">
      <ul className="mx-auto flex w-fit items-center gap-14 py-5">
        {navItems.map((item, index) => (
          <li key={index} className="">
            {item.label === "Works" ? (
              <MultipleMenu categories={categories} />
            ) : (
              <Link
                href={item.href}
                aria-label={`${item.label}セクションに移動する`}
                className="group flex items-center gap-2"
              >
                <p className="text-lg text-secondary transition group-hover:text-accent lg:text-xl">
                  {item.label}
                </p>
                <span className="grid size-6 place-items-center rounded-full border-1 border-secondary group-hover:border-accent group-hover:bg-accent">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 scale-x-125 transition group-hover:translate-y-1 group-hover:text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5"
                    />
                  </svg>
                </span>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

type MultipleMenuProps = {
  categories: Category[];
};

function MultipleMenu({ categories }: MultipleMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <HoverCard openDelay={0} open={open} onOpenChange={setOpen}>
      <HoverCardTrigger asChild>
        <button
          className="text-lg text-secondary hover:text-accent lg:text-xl"
          aria-haspopup="true"
          aria-label="実績カテゴリーを開く"
          aria-expanded={open}
          aria-controls="category-list"
        >
          Works
        </button>
      </HoverCardTrigger>
      <HoverCardContent
        id="category-list"
        className="mt-4 rounded border bg-background px-4 pb-4 pt-2"
      >
        <CategoryList categories={categories} />
      </HoverCardContent>
    </HoverCard>
  );
}
