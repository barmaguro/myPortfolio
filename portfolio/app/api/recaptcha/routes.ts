// import { NextResponse } from "next/server"

// export async function POST(request: Request) {
//   try {
//     const { name, email, message, token } = await request.json()

//     // 必須フィールドの検証
//     if (!name || !email || !message || !token) {
//       return NextResponse.json({ message: "必須フィールドが不足しています" }, { status: 400 })
//     }

//     return NextResponse.json({ message: "お問い合わせを受け付けました" })
//   } catch (error) {
//     console.error("Contact API error:", error)
//     return NextResponse.json({ message: "サーバーエラーが発生しました" }, { status: 500 })
//   }
// }
