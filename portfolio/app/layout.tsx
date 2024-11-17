// import localFont from "next/font/local";
import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import { Inconsolata } from "next/font/google";
import BreadCrumb from "./components/BreadCrumb";

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
  subsets: ['latin'],
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
      <body
        className={`${InconsolataFont.className} text-primary`} 
      >
          <Header />
          <BreadCrumb />
        {children}
      </body>
    </html>
  );
}
