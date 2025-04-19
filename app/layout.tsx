import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import MainLayout from "@/components/main-layout"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Zervi Sourcing App",
  description: "Streamlined sourcing and supplier management platform",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <MainLayout>{children}</MainLayout>
        </ThemeProvider>
      </body>
    </html>
  )
}
