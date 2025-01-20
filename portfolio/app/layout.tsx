import type { Metadata } from "next";
import { Zen_Kaku_Gothic_New } from "next/font/google";
import React from "react";

import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import "./globals.css";

const ZenKakuGothicNew = Zen_Kaku_Gothic_New({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.motodesgin.site/"),
  title: {
    template: "%s | MotoDesignのポートフォリオ",
    default: "MotoDesignのポートフォリオ",
  },
  description:
    "想いを届けるwebサイト制作。webデザイナー、MotoDesignのポートフォリオです。",
  openGraph: {
    title: {
      template: "%s | MotoDesignのポートフォリオ",
      default: "MotoDesignのポートフォリオ",
    },
    description:
      "想いを届けるwebサイト制作。webデザイナー、MotoDesignのポートフォリオです。",
    images: ["/dynamic/ogp.png"],
  },
  alternates: { canonical: "https://www.motodesgin.site/" },
};
// TODO: imagesの設定を追加する

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${ZenKakuGothicNew.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
      {/* <GoogleTagManager gtmId="GTM-55Q5FK2W" /> */}
    </html>
  );
}
