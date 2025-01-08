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


