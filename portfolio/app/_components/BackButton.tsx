"use client";

import ButtonHover from "@/components/ButtonHover";
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

  return (
    <ButtonHover
      bgColor={"bg-secondary"}
      textColor={"hover:text-secondary"}
      borderColor={"hover:border-secondary"}
      margin="mx-auto"
    >
      <button onClick={handleBack} className="" aria-label="前のページに戻る">
        戻る
      </button>
    </ButtonHover>
  );
};

export default BackButton;
