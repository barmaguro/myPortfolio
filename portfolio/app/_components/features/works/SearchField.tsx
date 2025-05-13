"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { Suspense } from "react";

function SearchFieldComponent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const q = e.currentTarget.elements.namedItem("q");
    console.log(q);
    if (q instanceof HTMLInputElement) {
      const params = new URLSearchParams();
      params.set("q", q.value.trim());
      router.push(`/works/search?${params.toString()}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <div className="flex items-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <input
            type="text"
            className="rounded-md border-2 border-gray-300 p-2"
            name="q"
            defaultValue={searchParams.get("q") ?? undefined}
            placeholder="キーワードを入力"
          />
        </div>
      </label>
    </form>
  );
}

export default function SearchField() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchFieldComponent />
    </Suspense>
  );
}
