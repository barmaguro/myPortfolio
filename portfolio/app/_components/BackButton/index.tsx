"use client";

import { useRouter } from "next/navigation";
import React from "react";

const BackButton: React.FC = () => {
  const router = useRouter();

  const handleBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back(); 
    } else {
      router.push("/"); 
    }
  };

  return <button onClick={handleBack} className="mx-auto mt-10 flex w-fit justify-center rounded bg-secondary px-8 py-3 font-bold text-white">戻る</button>;
};

export default BackButton;
