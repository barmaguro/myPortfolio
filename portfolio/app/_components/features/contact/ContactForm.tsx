"use client";

import ButtonHover from "@/components/ButtonHover";
import { createContactData } from "app/_actions/contact";
import Image from "next/image";
import Link from "next/link";
import { useFormState } from "react-dom";

const initialState = {
  status: "",
  message: "",
};

export default function ContactForm() {
  const [state, formAction] = useFormState(createContactData, initialState);
  return (
    <>
      <form action={formAction} className="mt-8">
        <div className="container [&>div]:mt-6">
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <label htmlFor="fullname" className="text-lg lg:text-xl">
                お名前
              </label>
              <span className="grid place-items-center rounded-lg bg-warning px-3 py-1 text-xs text-white">
                必須
              </span>
            </div>
            <input
              type="text"
              className="h-8 border border-primary px-2 py-1 md:h-10"
              id="fullname"
              name="fullname"
              autoComplete="name"
            />
            <div className="flex gap-2 text-xs tracking-widest text-zinc-500 md:text-base">
              <span className="block">ex.</span>
              <span className="block">田中 太郎</span>
            </div>
          </div>
          {/* contact-1 */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <label htmlFor="email" className="text-lg lg:text-xl">
                メールアドレス
              </label>
              <span className="grid place-items-center rounded-lg bg-warning px-3 py-1 text-xs text-white">
                必須
              </span>
            </div>
            <input
              type="email"
              className="h-8 border border-primary px-2 py-1 md:h-10"
              id="email"
              name="email"
              autoComplete="email"
            />
            <div className="flex gap-2 text-xs tracking-widest text-zinc-500 md:text-base">
              <span className="block">ex.</span>
              <span className="block">xxxx@sample.com</span>
            </div>
          </div>
          {/* contact-2 */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <label htmlFor="company" className="text-lg lg:text-xl">
                会社名
              </label>
            </div>
            <input
              type="text"
              className="h-8 border border-primary px-2 py-1 md:h-10"
              id="company"
              name="company"
              autoComplete="organization"
            />
            <div className="flex gap-2 text-xs tracking-widest text-zinc-500 md:text-base">
              <span className="block">ex.</span>
              <span className="block">株式会社Sample</span>
            </div>
          </div>
          {/* contact-3 */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <label htmlFor="message" className="text-lg lg:text-xl">
                お問い合わせ内容
              </label>
              <span className="grid place-items-center rounded-lg bg-warning px-3 py-1 text-xs text-white">
                必須
              </span>
            </div>
            <textarea
              className="border border-primary px-2 py-1"
              rows={10}
              id="message"
              name="message"
            />
          </div>
          <div className="flex items-center justify-center gap-4">
            <input
              type="checkbox"
              className="block size-6"
              id="polisycheck"
              name="polisycheck"
            />
            <p className="h-full">
              <Link href="/privacyPolicy" rel="privacy-policy" className="text-accent underline">
                プライバシーポリシー
              </Link>
              に同意する。
            </p>
          </div>
          {/* contact-4 */}
          <div className="mt-20 grid place-items-center">
            {state.status === "error" && <p className="">{state.message}</p>}
            <ButtonHover
              bgColor={"bg-primary"}
              textColor={"hover:text-primary"}
              borderColor={"hover:border-secondary"}
            >
              <button type="submit" value="送信する" className="">
                送信する
              </button>
            </ButtonHover>
            {state.status === "success" ? (
              <div className="mt-10 flex items-center justify-center gap-4">
                <p className="font-lg text-center">
                  お問い合わせありがとうございます。
                  <br />
                  ご返信まで、少々お待ちください。
                </p>
                <div className="w-8">
                  <Image
                    src="/images/deco_send-mail.png"
                    alt=""
                    width={532}
                    height={1100}
                    className="h-auto w-full"
                  />
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </form>
    </>
  );
}
