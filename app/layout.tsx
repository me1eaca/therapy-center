import type React from "react"
import type { Metadata } from "next"
import { Inter, Crimson_Text } from "next/font/google"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
})

const crimsonText = Crimson_Text({
  variable: "--font-crimson-text",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Aware Connections Center - Un vis devenit realitate",
  description:
    "Creăm un spațiu sigur unde poți explora experiențele interioare fără teama de a fi judecat. Terapie de cuplu și individuală cu EFT.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ro">
      <body className={`font-sans ${inter.variable} ${crimsonText.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
      </body>
    </html>
  )
}
