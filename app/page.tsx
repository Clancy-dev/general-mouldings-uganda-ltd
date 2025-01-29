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


