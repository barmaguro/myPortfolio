import localFont from "next/font/local";
import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import FirstView from "./components/FirstView";
import TabMneu from "./components/TabMneu";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <FirstView />
        <TabMneu />
      </body>
    </html>
  );
}
