import FindUs from '@/components/FindUs'
import { Metadata } from 'next';
import React from 'react'


export const metadata: Metadata = {
  metadataBase: new URL("https://generalmouldingsultd.com"),

  title: "Find General Mouldings (U) Ltd | Factory & Office Locations in Uganda",

  description:
    "Locate General Mouldings (U) Ltd in Uganda. Visit our offices and manufacturing facilities in Kampala and Mukono. Get directions, maps, and opening hours to plan your visit.",

  keywords: [
    "General Mouldings Uganda location",
    "plastic factory Kampala location",
    "plastic manufacturer Uganda address",
    "General Mouldings Mukono factory",
    "plastic company Kampala directions",
    "plastic suppliers Uganda location",
    "industrial plastic Uganda location",
  ],

  alternates: {
    canonical: "/find-us",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Find General Mouldings (U) Ltd",
    description:
      "Visit our plastic manufacturing facilities in Uganda. Get directions to our Kampala and Mukono locations.",
    url: "https://generalmouldingsultd.com/find-us",
    siteName: "General Mouldings (U) Ltd",
    type: "website",
    images: [
      {
        url: "https://generalmouldingsultd.com/front photo.jpg",
        width: 1200,
        height: 630,
        alt: "General Mouldings Uganda Location",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Find General Mouldings (U) Ltd",
    description:
      "Get directions to our offices and manufacturing facilities in Uganda.",
    images: ["https://generalmouldingsultd.com/front photo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function page() {
  return (
    <div className='mt-[72px]'>
      <FindUs/>
    </div>
  )
}
