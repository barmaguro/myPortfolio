"use client";

import ButtonHover from "@/components/ButtonHover";
import { contactFormSchema } from "@/libs/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import type { z } from "zod";

type FormValues = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(contactFormSchema),
    mode: "onBlur", // フォーカスを外した時にバリデーションを実行
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);

    try {
      // ここで実際のAPIリクエストを行います
      console.log("送信データ:", data);

      // 送信成功を模擬（実際の実装では、APIレスポンスに基づいて処理）
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSubmitSuccess(true);
      reset(); // フォームをリセット
    } catch (error) {
      console.error("送信エラー:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {submitSuccess ? (
        <div
          aria-modal
          role="dialog"
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black/40 transition-opacity duration-300 ${setSubmitSuccess ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
        >
          <div
            className={`w-full max-w-md rounded-xl bg-white p-8 text-center shadow-lg transition-all duration-300 ${setSubmitSuccess ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
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
              onClick={() => setSubmitSuccess(false)}
              className="mt-6 rounded-sm bg-secondary px-2 py-1 text-white transition"
            >
              閉じる
            </button>
          </div>
        </div>
      ) : (
        <form
          action={process.env.NEXT_PUBLIC_NEWT_FORM_ENDPOINT}
          onSubmit={handleSubmit(onSubmit)}
          method="POST"
          className="mt-8"
        >
          <div className="container [&>div]:mt-10">
            <div className="relative flex flex-col gap-1">
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
                {...register("name")}
                required
              />
              {errors.name && (
                <p className="absolute bottom-0 right-0 mt-1 text-xs md:text-sm text-red-500">
                  {errors.name.message}
                </p>
              )}
              <div className="flex gap-2 text-xs tracking-widest text-zinc-500 md:text-base">
                <span className="block">ex.</span>
                <span className="block">田中 太郎</span>
              </div>
            </div>
            {/* contact-1 */}
            <div className="relative flex flex-col gap-1">
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
                {...register("email")}
                name="email"
                autoComplete="email"
                required
              />
              {errors.email && (
                <p className="absolute bottom-0 right-0 mt-1 text-xs md:text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
              <div className="flex gap-2 text-xs tracking-widest text-zinc-500 md:text-base">
                <span className="block">ex.</span>
                <span className="block">xxxx@sample.com</span>
              </div>
            </div>
            {/* contact-2 */}
            <div className="relative flex flex-col gap-1">
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
            <div className="relative flex flex-col gap-1">
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
                {...register("message")}
                name="message"
                required
              />
              {errors.message && (
                <p className="absolute -bottom-7 right-0 mt-1 text-xs md:text-sm text-red-500">
                  {errors.message.message}
                </p>
              )}
            </div>
            <div className="relative flex items-center justify-center gap-4">
              <input
                type="checkbox"
                className="block size-6"
                id="polisycheck"
                name="polisycheck"
                {...register("privacy")}
                aria-checked="false"
                aria-labelledby="policycheck-label"
              />
              <p className="h-full" id="policycheck-label">
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
              {errors.privacy && (
                <p className="absolute -bottom-full left-1/2 mt-1 -translate-x-1/2 text-xs md:text-sm text-red-500">
                  {errors.privacy.message}
                </p>
              )}
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
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "送信中..." : "送信する"}
                </button>
              </ButtonHover>
            </div>
          </div>
        </form>
      )}
    </>
  );
}
