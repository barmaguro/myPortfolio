"use client";

import { createContactData } from "app/_actions/contact";
import { useFormState } from "react-dom";

const initialState = {
  status: "",
  message: "",
};

export default function ContactForm() {
  const [state, formAction] = useFormState(createContactData, initialState);
  console.log(state);
  if (state.status === "success") {
    return (
      <p className="">
        お問い合わせありがとうございます。
        <br />
        お返事まで今しばらくお待ちください。
      </p>
    );
  }

  return (
    <>
      <form action={formAction} className="mt-8">
        <div className="container [&>div]:mt-6">
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <label htmlFor="firstname" className="text-lg">
                お名前
              </label>
              <span className="text-xs grid place-items-center px-3 py-1 bg-warning text-white rounded-lg">
                必須
              </span>
            </div>
            <input
              type="text"
              className="border border-primary h-8 px-2 py-1"
              id="firstname"
              name="firstname"
            />
            <div className="text-zinc-500 text-xs flex gap-2 tracking-widest">
              <span className="block">ex)</span>
              <span className="block">田中 太郎</span>
            </div>
          </div>
          {/* contact-1 */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <label htmlFor="email" className="text-lg">
                メールアドレス
              </label>
              <span className="text-xs grid place-items-center px-3 py-1 bg-warning text-white rounded-lg">
                必須
              </span>
            </div>
            <input
              type="email"
              className="border border-primary h-8 px-2 py-1"
              id="email"
              name="email"
            />
            <div className="text-zinc-500 text-xs flex gap-2 tracking-widest">
              <span className="block">ex)</span>
              <span className="block">xxxx@sample.com</span>
            </div>
          </div>
          {/* contact-2 */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <label htmlFor="company" className="text-lg">
                会社名
              </label>
            </div>
            <input
              type="text"
              className="border border-primary h-8 px-2 py-1"
              id="company"
              name="company"
            />
            <div className="text-zinc-500 text-xs flex gap-2 tracking-widest">
              <span className="block">ex)</span>
              <span className="block">株式会社Sample</span>
            </div>
          </div>
          {/* contact-3 */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <label htmlFor="firstname" className="text-lg">
                お問い合わせ内容
              </label>
              <span className="text-xs grid place-items-center px-3 py-1 bg-warning text-white rounded-lg">
                必須
              </span>
            </div>
            <textarea
              className="border border-primary  px-2 py-1"
              rows={10}
              id="message"
              name="message"
            />
          </div>
          {/* contact-4 */}
          <div className="grid place-items-center mt-12">
            {state.status === "error" && <p className="">{state.message}</p>}
            <button
              type="submit"
              value="送信する"
              className="bg-primary text-white rounded-lg py-4 px-6 w-full max-w-52 "
            >
              送信する
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
