import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  metadataBase:new URL('https://www.generalmouldingsug.com/'),
  // title: '',
  title: {
    default: "General Mouldings (U) Ltd | Uganda’s Leading Plastics Manufacturer & Exporter",
    template: "%s - General Mouldings (U) Ltd",
  },
  description:
    "General Mouldings (U) Ltd is Uganda’s top manufacturer and exporter of high-quality plastic products. We provide durable, eco-friendly solutions for industrial, household, and commercial needs.",
  applicationName: 'Gaba Hope For Kids',
  keywords: [
    // General Mouldings (U) Ltd variations
    "General Mouldings (U) Ltd",
    "General Mouldings Uganda",
    "General Mouldings",
    "GML",
    "General Mouldings Limited Uganda",
    "General Mouldings plastics",
    "General Mouldings Uganda Limited",
    "General Mouldings Kampala",
    "General Mouldings company Uganda",
    "General Mouldings manufacturer",
    "General Mouldings products",
    "General Mouldings factory Uganda",
    "General Mouldings exporters Uganda",

    // Plastic manufacturing company searches
    "plastic manufacturers in Uganda",
    "plastic products Uganda",
    "plastic manufacturing companies Uganda",
    "best plastic manufacturer Uganda",
    "industrial plastic manufacturers Uganda",
    "plastic suppliers in Uganda",
    "plastics factory Uganda",
    "plastic packaging manufacturers Uganda",
    "custom plastic molding Uganda",
    "plastic injection molding Uganda",
    "plastic exporters in Uganda",
    "plastic recycling Uganda",
    "sustainable plastic products Uganda",
    "affordable plastic products Uganda",
    "commercial plastic manufacturing Uganda",
    "plastic container manufacturers Uganda",
    "household plastic products Uganda",
    "industrial plastic solutions Uganda",
    "eco-friendly plastic manufacturers Uganda",
    "plastic production Uganda",
    "plastic company Kampala",
    "plastic solutions Uganda",
    "leading plastic manufacturer Uganda",
    "custom plastic products Uganda",
    "bulk plastic production Uganda",
    "wholesale plastic suppliers Uganda"
  ],

  authors: [{name:'Clancy Ssekisambu | At Desishub'},{url:'https://clancy-s-portfolio-s.vercel.app/'}],
  creator: 'Clancy Ssekisambu',
  publisher: 'Clancy Ssekisambu',
  alternates:{
    canonical:'/',
    languages:{
      'en-US':'/en-US',
      'de-DE':'/de-DE',
    }

  },
    
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

