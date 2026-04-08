import ContactUs from '@/components/ContactUs'
import { Metadata } from 'next';
import React from 'react'


export const metadata: Metadata = {
  metadataBase: new URL("https://generalmouldingsultd.com"),

  title: "Contact General Mouldings (U) Ltd | Plastic Manufacturer in Uganda",

  description:
    "Contact General Mouldings (U) Ltd, a leading plastic manufacturer in Uganda. Get in touch for product inquiries, bulk orders, or partnerships. Visit our offices in Kampala or reach us via phone and email.",

  keywords: [
    "General Mouldings Uganda contact",
    "contact plastic manufacturer Uganda",
    "plastic company Kampala contact",
    "plastic suppliers Uganda contact",
    "General Mouldings phone number",
    "plastic factory Kampala contact",
    "industrial plastic Uganda contact",
    "plastic products Uganda inquiry",
  ],

  alternates: {
    canonical: "/contact",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Contact General Mouldings (U) Ltd",
    description:
      "Reach out to Uganda’s leading plastic manufacturer for inquiries, partnerships, and bulk orders.",
    url: "https://generalmouldingsultd.com/contact",
    siteName: "General Mouldings (U) Ltd",
    type: "website",
    images: [
      {
        url: "https://generalmouldingsultd.com/front photo.jpg",
        width: 1200,
        height: 630,
        alt: "Contact General Mouldings Uganda",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact General Mouldings (U) Ltd",
    description:
      "Get in touch with Uganda’s trusted plastic manufacturer today.",
    images: ["https://generalmouldingsultd.com/front photo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function page() {
  return (
    <div className='mt-[72px]'>
      <ContactUs/>
      {/* contact */}
    </div>
  )
}
