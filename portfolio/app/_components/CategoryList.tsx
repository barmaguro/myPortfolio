"use client";
import { DrawerClose } from "@/components/ui/drawer";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Drawer } from "vaul";
import { Category } from "./_libs/microcms";

type CategoryListProps = {
  categories: Category[];
  autoFocus?: boolean; // ← 親から指定できるように
};

export default function CategoryList({
  categories,
  autoFocus = false,
}: CategoryListProps) {
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (autoFocus && firstLinkRef.current) {
      firstLinkRef.current.focus();
    }
  }, [autoFocus]);

  return (
    <>
      <button onClick={() => setOpen(true)}>開く</button>
      <Drawer.Root open={open} onOpenChange={setOpen}>
        <Drawer.Content>
          <ul className="mt-2 flex flex-col gap-2 md:gap-4">
            <li>
              <DrawerClose asChild>
                <Link
                  href="/works"
                  className="flex items-center gap-1 underline"
                  ref={firstLinkRef} // ← 最初のリンクにフォーカスさせる
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                  <p className="text-base">全実績一覧</p>
                </Link>
              </DrawerClose>
            </li>
            {categories.map((category) => (
              <li key={category.id}>
                <DrawerClose asChild>
                  <Link
                    href={`/works/category/${category.id}`}
                    className="flex items-center gap-1 underline"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                    <p className="text-base">{category.name}一覧</p>
                  </Link>
                </DrawerClose>
              </li>
            ))}
          </ul>
          <button onClick={() => setOpen(false)}>閉じる</button>
        </Drawer.Content>
      </Drawer.Root>
    </>
  );
}
