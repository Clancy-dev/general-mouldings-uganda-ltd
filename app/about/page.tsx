
import AboutUs from '@/components/about-us';
import React from 'react'
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://generalmouldingsultd.com"),

  title: "About General Mouldings (U) Ltd | Uganda’s Leading Plastic Manufacturer",
  
  description:
    "Learn about General Mouldings (U) Ltd, a leading plastic manufacturer in Uganda since 1993. We produce high-quality, eco-friendly plastic products for industrial and domestic use across Uganda and international markets.",

  keywords: [
    "General Mouldings Uganda",
    "General Mouldings (U) Ltd",
    "plastic manufacturers in Uganda",
    "plastic products Uganda",
    "plastic factory Kampala",
    "plastic packaging Uganda",
    "plastic exporters Uganda",
    "industrial plastic Uganda",
    "eco-friendly plastic Uganda",
    "plastic company Kampala",
  ],

  alternates: {
    canonical: "/about",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "About General Mouldings (U) Ltd",
    description:
      "Discover Uganda’s trusted plastic manufacturer delivering high-quality and sustainable plastic solutions.",
    url: "https://generalmouldingsultd.com/about",
    siteName: "General Mouldings (U) Ltd",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://generalmouldingsultd.com/front photo.jpg",
        width: 1200,
        height: 630,
        alt: "General Mouldings Uganda Factory",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "About General Mouldings (U) Ltd",
    description:
      "Leading plastic manufacturer in Uganda offering durable and eco-friendly solutions.",
    images: ["https://generalmouldingsultd.com/front photo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};


export default function page() {
  return (
    <div className='mt-[72px]'>
       <AboutUs/>
    </div>
  )
}
