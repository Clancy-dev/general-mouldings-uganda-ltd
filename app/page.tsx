import AboutUsOverview from "@/components/AboutUsOverview";
import CallToActionHome from "@/components/CallToActionHome";
import Hero from "@/components/Hero";

import HomeProducts from "@/components/HomeProducts";
import IndustriesWeServe from "@/components/IndustriesWeServe";
import ReviewSection from "@/components/ReviewSection";
import StatisticsPage from "@/components/StatisticsPage";
import WhyChooseUs from "@/components/WhyChooseUs";
import { Metadata } from "next";



export const metadata: Metadata = {
  metadataBase: new URL("https://generalmouldingsultd.com"),

  title: "General Mouldings (U) Ltd | Leading Plastic Manufacturer in Uganda",

  description:
    "General Mouldings (U) Ltd is a leading plastic manufacturer and exporter in Uganda. We produce high-quality, durable, and eco-friendly plastic products for households, industries, and commercial use across Uganda and beyond.",

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
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "General Mouldings (U) Ltd | Uganda’s Leading Plastic Manufacturer",
    description:
      "High-quality plastic manufacturing and export solutions in Uganda. Durable, eco-friendly products for industrial and domestic use.",
    url: "https://generalmouldingsultd.com",
    siteName: "General Mouldings (U) Ltd",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://generalmouldingsultd.com/hero1.jpg",
        width: 1200,
        height: 630,
        alt: "General Mouldings Uganda Factory",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "General Mouldings (U) Ltd",
    description:
      "Uganda’s trusted plastic manufacturer delivering quality and sustainability.",
    images: ["https://generalmouldingsultd.com/hero1.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  category: "business",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white lg:mt-[112px] mt-[72px]">
      <Hero/>
      <AboutUsOverview/>
      <HomeProducts/>
      <StatisticsPage/>
      <IndustriesWeServe/>
      {/* <ScrollingBrands/>    */}
      <WhyChooseUs/>
      <ReviewSection/>
      <CallToActionHome/>
    </div>
  )
}


