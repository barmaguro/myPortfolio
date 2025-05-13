import { z } from "zod"

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(1, { message: "お名前を入力してください" })
    .max(50, { message: "お名前は50文字以内で入力してください" }),

  email: z
    .string()
    .min(1, { message: "メールアドレスを入力してください" })
    .email({ message: "有効なメールアドレスを入力してください" }),

  message: z
    .string()
    .min(10, { message: "お問い合わせ内容は10文字以上入力してください" })
    .max(1000, { message: "お問い合わせ内容は1000文字以内で入力してください" }),

  privacy: z.boolean().refine((val) => val === true, {
    message: "プライバシーポリシーに同意する必要があります",
  }),
})
