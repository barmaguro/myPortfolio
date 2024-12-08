// import localFont from "next/font/local";
// import { GoogleTagManager } from '@next/third-parties/google';
import Header from "app/_components/Header";
import type { Metadata } from "next";
import { Inconsolata } from "next/font/google";
import React from "react";

import "./globals.css";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const InconsolataFont = Inconsolata({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://my-portfolio-3lch9irba-motokis-projects-bfd99225.vercel.app"),
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
  alternates: { canonical: "https://my-portfolio-3lch9irba-motokis-projects-bfd99225.vercel.app" },
};
// TODO: images、urlの設定を追加する

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${InconsolataFont.className} text-primary`}>
        <Header />
        {children}
      </body>
      {/* <GoogleTagManager gtmId="GTM-55Q5FK2W" /> */}
    </html>
  );
}
