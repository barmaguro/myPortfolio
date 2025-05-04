"use client"

import type React from "react"

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3"

export function ReCaptchaProvider({ children }: { children: React.ReactNode }) {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.RECAPTCHA_SERVER_SECRET_KEY}
      scriptProps={{
        async: true,
        defer: true,
        appendTo: "head",
      }}
    >
      {children}
    </GoogleReCaptchaProvider>
  )
}
