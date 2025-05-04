import { NextResponse } from "next/server"

// reCAPTCHA検証用の関数
async function verifyRecaptcha(token: string) {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY

  if (!secretKey) {
    throw new Error("reCAPTCHA Secret Keyが設定されていません")
  }

  const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `secret=${secretKey}&response=${token}`,
  })

  const data = await response.json()

  return {
    success: data.success,
    score: data.score, // 0.0〜1.0のスコア（1.0が最も人間らしい）
    action: data.action,
  }
}

export async function POST(request: Request) {
  try {
    const { name, email, message, token } = await request.json()

    // 必須フィールドの検証
    if (!name || !email || !message || !token) {
      return NextResponse.json({ message: "必須フィールドが不足しています" }, { status: 400 })
    }

    // reCAPTCHAの検証
    const recaptchaResult = await verifyRecaptcha(token)

    // 検証失敗
    if (!recaptchaResult.success) {
      return NextResponse.json({ message: "reCAPTCHA検証に失敗しました" }, { status: 400 })
    }

    // スコアが低すぎる場合（閾値は調整可能）
    if (recaptchaResult.score < 0.5) {
      return NextResponse.json(
        { message: "セキュリティチェックに失敗しました。後でもう一度お試しください。" },
        { status: 400 },
      )
    }

    // ここで実際のお問い合わせ処理（メール送信やデータベース保存など）を行う
    // ...

    return NextResponse.json({ message: "お問い合わせを受け付けました" })
  } catch (error) {
    console.error("Contact API error:", error)
    return NextResponse.json({ message: "サーバーエラーが発生しました" }, { status: 500 })
  }
}
