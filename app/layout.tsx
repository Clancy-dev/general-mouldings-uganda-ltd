import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'General Mouldings (Uganda) Ltd',
  description: 'Leading manufacturer of plastic products in Uganda',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <Header/>
      <body className={inter.className}>{children}</body>
      <Footer/>
    </html>
  )
}

