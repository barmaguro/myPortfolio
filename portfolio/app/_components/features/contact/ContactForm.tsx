"use client";

import ButtonHover from "@/components/ButtonHover";
import { contactFormSchema } from "@/libs/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useState } from "react";
import { FieldErrors, useForm } from "react-hook-form";
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

  const [validationSummary, setValidationSummary] = useState<string[]>([]);

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    setValidationSummary([]); // 送信時にサマリーをリセット

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

  const onError = (errors: FieldErrors<FormValues>) => {
    // エラーメッセージを収集
    const errorMessages: string[] = [];

    if (errors.name) errorMessages.push("お名前が入力されていません");
    if (errors.email)
      errorMessages.push("メールアドレスが正しく入力されていません");
    if (errors.message)
      errorMessages.push("お問い合わせ内容が正しく入力されていません");
    if (errors.privacy)
      errorMessages.push("プライバシーポリシーへの同意が必要です");

    setValidationSummary(errorMessages);
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
          inert
        >
          {validationSummary.length > 0 && (
            <div className="mt-4 rounded-md border border-red-200 bg-red-50 p-3">
              <p className="mb-2 font-medium text-red-600">
                以下の項目をご確認ください。
              </p>
              <ul className="list-disc space-y-1 pl-5 text-sm text-red-600">
                {validationSummary.map((message, index) => (
                  <li key={index}>{message}</li>
                ))}
              </ul>
            </div>
          )}
          <div className="container text-gray-400  [&>div]:mt-10 [&_input]:border-gray-400 [&_textarea]:border-gray-400 ">
            <div className="relative flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <label htmlFor="fullname" className="text-lg lg:text-xl">
                  お名前
                </label>
                <span className="grid place-items-center rounded-lg bg-gray-400 px-3 py-1 text-sm font-semibold tracking-widest text-white" >
                  必須
                </span>
              </div>
              <input
                type="text"
                className={`h-8 border border-primary px-2 py-1 md:h-10 ${errors.name ? "border-warning" : ""}`}
                id="fullname"
                inputMode="text"
                name="fullname"
                autoComplete="name"
                aria-invalid={errors.name ? "true" : "false"}
                {...register("name")}
                required
              />
              {errors.name && (
                <span role="status" aria-live="polite">
                  <p className="absolute bottom-0 right-0 mt-1 text-xs text-red-500 md:text-sm">
                    {errors.name.message}
                  </p>
                </span>
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
                <span className="grid place-items-center rounded-lg bg-gray-400  px-3 py-1 text-sm font-semibold tracking-widest text-white" >
                  必須
                </span>
              </div>
              <input
                type="email"
                className={`h-8 border border-primary px-2 py-1 md:h-10 ${errors.email ? "border-warning" : ""}`}
                id="email"
                inputMode="email"
                {...register("email")}
                name="email"
                autoComplete="email"
                aria-invalid={errors.email ? "true" : "false"}
                required
              />
              <span className="flex justify-between gap-4">
                <div className="flex gap-2 text-xs tracking-widest text-zinc-500 md:text-base">
                  <span className="block">ex.</span>
                  <span className="block">xxxx@sample.com</span>
                </div>
                {errors.email && (
                  <span role="status" aria-live="polite">
                    <p className="mt-1 text-xs text-red-500 md:text-sm">
                      {errors.email.message}
                    </p>
                  </span>
                )}
              </span>
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
                <span className="grid place-items-center rounded-lg  bg-gray-400 px-3 py-1 text-sm font-semibold tracking-widest text-white" >
                  必須
                </span>
              </div>
              <textarea
                className={`border border-primary px-2 py-1 ${errors.message ? "border-warning" : ""}`}
                rows={10}
                id="message"
                inputMode="text"
                {...register("message")}
                name="message"
                aria-invalid={errors.message ? "true" : "false"}
                required
              />
              {errors.message && (
                <span role="status" aria-live="polite">
                  <p className="absolute -bottom-7 right-0 mt-1 text-xs text-red-500 md:text-sm">
                    {errors.message.message}
                  </p>
                </span>
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
                aria-invalid={errors.privacy ? "true" : "false"}
                aria-labelledby="policycheck-label"
                required
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
                <span role="status" aria-live="polite">
                  <p className="absolute -bottom-full left-1/2 mt-1 -translate-x-1/2 whitespace-nowrap text-xs text-red-500 md:text-sm">
                    {errors.privacy.message}
                  </p>
                </span>
              )}
            </div>
            {/* contact-4 */}
          </div>
          <div className="mt-20 grid place-items-center">
            <ButtonHover
              bgColor={"bg-gray-400"}
              textColor={"hover:text-primary"}
              borderColor={"hover:border-secondary"}
            >
              <button
                type="submit"
                value=""
                className="size-full"
                aria-label="お問い合わせを送信する"
                data-label="button"
                disabled={isSubmitting}
                onClick={handleSubmit(onSubmit, onError)}
              >
                {isSubmitting ? "送信中..." : "送信する"}
              </button>
            </ButtonHover>
          </div>
        </form>
      )}
    </>
  );
}
