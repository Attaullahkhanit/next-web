import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Providers from "@/components/providers" // Import the new providers
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Attaullah Khan - Full Stack Developer & Designer",
  description: "Portfolio of Attaullah Khan, a passionate full-stack developer with expertise in modern web technologies.",
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        {/* Wrap children here */}
        <Providers>
          {children}
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}