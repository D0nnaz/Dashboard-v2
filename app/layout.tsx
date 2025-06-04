import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider, TransitionProvider } from "@/components/theme-provider"
import { CharlieAssistant } from "@/components/charlie-assistant"
import Image from "next/image"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Charlie Ethics Dashboard",
  description: "AI Ethics Assistant Dashboard",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <TransitionProvider>
            <div className="flex min-h-screen flex-col">
              <main className="flex-1 transition-opacity duration-300">
                <div className="absolute left-0 top-6 px-4">
                  <Image
                    src="https://www.bikkelhart.com/hs-fs/hubfs/Bikkelhart%20logo%20negative-1.png?width=1301&height=350&name=Bikkelhart%20logo%20negative-1.png"
                    alt="Bikkelhart"
                    width={150}
                    height={40}
                    className="h-auto max-w-[150px] object-contain"
                    priority
                  />
                </div>
                <div className="mx-auto max-w-[1200px] px-4 py-6 pt-16">{children}</div>
              </main>
              <CharlieAssistant />
            </div>
          </TransitionProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
