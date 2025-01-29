import "./globals.css"
import { Inter } from "next/font/google"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ProgressBar from "@/components/ProgressBar"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Mental Wellness Platform",
  description: "Your Companion for Mental Wellness and Emotional Balance",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gradient-to-br from-blue-50 to-purple-50`}>
        <ProgressBar />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

