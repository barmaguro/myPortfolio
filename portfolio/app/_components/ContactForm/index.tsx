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
      <form action={formAction} className="">
        <div className="container [&>div]:mt-5">
          <div className="flex gap-2 ">
            <label htmlFor="lastname" className="">
              性
            </label>
            <input
              type="text"
              className="border border-primary"
              id="lastname"
              name="lastname"
            />
          </div>
          <div className="flex gap-2">
            <label htmlFor="firstname" className="">
              名
            </label>
            <input
              type="text"
              className="border border-primary"
              id="firstname"
              name="firstname"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="company">会社名</label>
            <input
              type="text"
              id="company"
              name="company"
              className="border border-primary"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">メールアドレス</label>
            <input
              type="email"
              id="email"
              name="email"
              className="border border-primary"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message">メッセージ</label>
            <textarea
              className="border border-primary"
              id="message"
              name="message"
            />
          </div>
          <div className="">
            {state.status === "error" && <p className="">{state.message}</p>}
            <input type="submit" value="送信する" className="" />
          </div>
        </div>
      </form>
    </>
  );
}
