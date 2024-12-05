"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

function KeyVisual() {
  const [headerOffsetHeight, setHeaderOffsetHeight] = useState(0);

  useEffect(() => {
    const header = document.querySelector("header");
    if (header) {
      setHeaderOffsetHeight(header.offsetHeight);
    }
  }, []);

  return (
    <>
      <div
        className="grid grid-rows-[1fr_20px] place-items-center px-6 py-5  border-primary"
        style={{
          height: `calc(100svh - ${headerOffsetHeight}px)`,
        }}
      >
        <div className="flex flex-col gap-3 items-center justify-center h-[90%] w-full max-h-[576px] px-4 border-primary border relative top_kv-pseudo shadow-md -z-10">
          <div className="">
            <h1 className="text-4xl text-primary">
              Moto Design <br />
              Portfolio
            </h1>
            <p className="text-lg text-secondary">
              Thanks for visiting my website!
            </p>
          </div>
          <div className="max-w-48">
            <Image
              src="/images/logo.svg"
              width={500}
              height={500}
              alt="motodesignのロゴ"
              className="h-full w-full"
            />
          </div>
        </div>
        <div className="h-6 place-self-end">
          <a className="text-lg uppercase underline font-bold">about me</a>
        </div>
      </div>
    </>
  );
}

export default KeyVisual;
