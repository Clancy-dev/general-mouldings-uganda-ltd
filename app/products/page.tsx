import OurProducts from '@/components/OurProducts';
import Products from '@/components/Products'
import Services from '@/components/Services'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  metadataBase: new URL("https://generalmouldingsultd.com"),

  title: "Plastic Products in Uganda | General Mouldings (U) Ltd",

  description:
    "Explore high-quality plastic products from General Mouldings (U) Ltd, Uganda’s leading manufacturer. We offer durable plastic containers, packaging solutions, and industrial products for bulk orders and commercial use.",

  keywords: [
    "plastic products Uganda",
    "plastic containers Uganda",
    "plastic packaging Uganda",
    "industrial plastic Uganda",
    "plastic manufacturers in Uganda",
    "plastic suppliers Kampala",
    "bulk plastic products Uganda",
    "custom plastic molding Uganda",
    "plastic factory Uganda",
    "eco-friendly plastic products Uganda",
  ],

  alternates: {
    canonical: "/products",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Plastic Products in Uganda | General Mouldings (U) Ltd",
    description:
      "Browse durable and eco-friendly plastic products for industrial and domestic use in Uganda.",
    url: "https://generalmouldingsultd.com/products",
    siteName: "General Mouldings (U) Ltd",
    type: "website",
    images: [
      {
        url: "https://generalmouldingsultd.com/hero1.jpg",
        width: 1200,
        height: 630,
        alt: "Plastic Products by General Mouldings Uganda",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Plastic Products in Uganda",
    description:
      "High-quality plastic containers and packaging solutions for businesses and households.",
    images: ["https://generalmouldingsultd.com/hero1.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  category: "products",
};

export default function page() {
  return (
    <div className='mt-[72px]'>
    <OurProducts/>
    </div>
  )
}
