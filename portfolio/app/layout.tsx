import type { Metadata } from "next";
import { Zen_Kaku_Gothic_New } from "next/font/google";
import React from "react";
// import { GoogleAnalytics } from '@next/third-parties/google'
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import "./globals.css";

const ZenKakuGothicNew = Zen_Kaku_Gothic_New({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://motodesgin.site/"),
  title: {
    template: "%s | MotoDesignのポートフォリオ",
    default: "MotoDesignのポートフォリオ",
  },
  description:
    "おしゃれなだけじゃない。課題を解くデザイン。webデザイナー、MotoDesignのポートフォリオです。",
  openGraph: {
    title: {
      template: "%s | MotoDesignのポートフォリオ",
      default: "MotoDesignのポートフォリオ",
    },
    description:
      "おしゃれなだけじゃない。課題を解くデザイン。webデザイナー、MotoDesignのポートフォリオです。",
    images: ["/dynamic/ogp.png"],
  },
  alternates: { canonical: "https://motodesgin.site/" },
};

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
      {/* <GoogleAnalytics gaId={process.env.NEXT_GA_ID} /> */}
    </html>
  );
}
