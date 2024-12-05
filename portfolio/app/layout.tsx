// import localFont from "next/font/local";
import type { Metadata } from "next";
import { Inconsolata } from "next/font/google";
import React from "react";
import Header from "app/_components/Header";
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
  title: "MotoDesignのポートフォリオ",
  description: "WEB制作のフリーランス。MotoDesignのポートフォリオです。",
};

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
    </html>
  );
}
