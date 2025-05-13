"use client";

import ButtonHover from "@/components/ButtonHover";
import { createContactData } from "app/_actions/contact";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";

const initialState = {
  status: "",
  message: "",
};

export default function ContactForm() {
  const [formState, formAction] = useFormState(createContactData, initialState);
  const [isSent, setIsSent] = useState(false);

  // ③ 送信成功を検知 → モーダルを開く
  useEffect(() => {
    if (formState.status === "success") setIsSent(true);
  }, [formState.status]);
  return (
    <>
      <form action={process.env.NEXT_PUBLIC_NEWT_FORM_ENDPOINT} method="POST" className="mt-8">
        <div className="container [&>div]:mt-6">
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <label htmlFor="fullname" className="text-lg lg:text-xl">
                お名前
              </label>
              <span className="grid place-items-center rounded-lg bg-warning px-3 py-1 text-sm font-semibold tracking-widest text-white">
                必須
              </span>
            </div>
            <input
              type="text"
              className="h-8 border border-primary px-2 py-1 md:h-10"
              id="fullname"
              inputMode="text"
              name="fullname"
              autoComplete="name"
              required
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
              <span className="grid place-items-center rounded-lg bg-warning px-3 py-1 text-sm font-semibold tracking-widest text-white">
                必須
              </span>
            </div>
            <input
              type="email"
              className="h-8 border border-primary px-2 py-1 md:h-10"
              id="email"
              inputMode="email"
              name="email"
              autoComplete="email"
              required
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
              inputMode="text"
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
              <span className="grid place-items-center rounded-lg bg-warning px-3 py-1 text-sm font-semibold tracking-widest text-white">
                必須
              </span>
            </div>
            <textarea
              className="border border-primary px-2 py-1"
              rows={10}
              id="message"
              inputMode="text"
              name="message"
              required
            />
          </div>
          <div className="flex items-center justify-center gap-4">
            <input
              type="checkbox"
              className="block size-6"
              id="polisycheck"
              name="polisycheck"
              role="checkbox"
              aria-checked="false"
              aria-label="プライバシーポリシーに同意してチェックする"
            />
            <p className="h-full">
              <Link
                href="/privacyPolicy"
                rel="privacy-policy"
                className="text-accent underline"
                aria-label="プライバシーポリシーページに移動する"
              >
                プライバシーポリシー
              </Link>
              に同意する。
            </p>
          </div>
          {/* contact-4 */}
          <div className="mt-20 grid place-items-center">
            <ButtonHover
              bgColor={"bg-primary"}
              textColor={"hover:text-primary"}
              borderColor={"hover:border-secondary"}
            >
              <button
                type="submit"
                value=""
                className="size-full"
                aria-label="お問い合わせを送信する"
              >
                送信する
              </button>
            </ButtonHover>
            {isSent && (
              <div
                aria-modal
                role="dialog"
                className={`fixed inset-0 z-50 flex items-center justify-center bg-black/40 transition-opacity duration-300 ${isSent ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
              >
                <div
                  className={`w-full max-w-md rounded-xl bg-white p-8 text-center shadow-lg transition-all duration-300 ${isSent ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
                >
                  <h2 className="text-2xl font-semibold">
                    ありがとうございました！!
                  </h2>
                  <p className="mt-4">
                    お問い合わせを受け付けました。
                    <br />
                    内容を確認後、折り返しご連絡いたします。
                  </p>
                  <button
                    onClick={() => setIsSent(false)}
                    className="mt-6 rounded-sm bg-secondary px-2 py-1 text-white transition"
                  >
                    閉じる
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </form>
    </>
  );
}
