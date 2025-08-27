import type React from "react"
import type { Metadata } from "next"
import { Work_Sans, Open_Sans } from "next/font/google"
import "./globals.css"
import { FloatingElements } from "@/components/ui/floating-elements"

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
  weight: ["400", "600", "700"],
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
  weight: ["400", "500", "600"],
})

export const metadata: Metadata = {
  title: "Boumiza Square",
  description: "Découvrez Boumiza Square, votre destination gastronomique et de loisirs moderne et dynamique."
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${workSans.variable} ${openSans.variable}`}>
      <body className="font-sans antialiased">
        <FloatingElements />
        {children}
      </body>
    </html>
  )
}
