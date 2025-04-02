import type React from "react"
import type { Metadata } from "next"
import { Orbitron } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Javier Pozo Miranda | Portfolio",
  description: "AI Engineer • ML Developer • CS @ Penn State",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${orbitron.variable} font-orbitron bg-[#0d0d0d] text-white`}>
        <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem={false} themes={["dark", "orange"]}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'