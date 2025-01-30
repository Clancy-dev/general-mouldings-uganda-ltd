import About from "@/components/About";
import ContactUs from "@/components/ContactUs";
import FAQ from "@/components/FAQ";
import FeaturedProductsSection from "@/components/FeaturedProducts";
import FindUs from "@/components/FindUs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import ReviewSection from "@/components/ReviewSection";
import ScrollingBrands from "@/components/ScrollingBrands";
import Services from "@/components/Services";
import Staff from "@/components/Staff";
import StatisticsPage from "@/components/StatisticsPage";
import StatisticsSection from "@/components/StatisticsSection";
import Sustainability from "@/components/Sustainability";
import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | General Mouldings (U) Ltd is Uganda's Leading Plastics Manufacturer & Exporter",
  description:
    "Welcome to General Mouldings (U) Ltd, the leading manufacturer and exporter of high-quality plastic products in Uganda. We provide durable, eco-friendly solutions for households, industries, and commercial needs. Explore our products and services today.",
    keywords: [
      // General Mouldings (U) Ltd variations
      
      "General Mouldings Uganda",
      "General Mouldings Uganda",
      "General Mouldings Uganda",
      "General Mouldings Uganda",
      "General Mouldings Uganda",
      "General Mouldings Uganda",
      "General Mouldings Uganda",
      "General Mouldings Uganda",
      "General Mouldings (U) Ltd",
      "General Mouldings",
      "General Mouldings",
      "General Mouldings",
      "General Mouldings",
      "General Mouldings",
      "General Mouldings",
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
};
export default function Home() {
  return (
    <div className="min-h-screen bg-white mt-[72px]">
      <Hero />
      <FeaturedProductsSection/>
      <StatisticsPage/>
      <ScrollingBrands/>
      <ReviewSection/>
    </div>
  )
}


