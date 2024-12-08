import About from "@/components/About";
import ContactUs from "@/components/ContactUs";
import FAQ from "@/components/FAQ";
import FindUs from "@/components/FindUs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Services from "@/components/Services";
import Staff from "@/components/Staff";
import Sustainability from "@/components/Sustainability";
import Testimonials from "@/components/Testimonials";


export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Services />
      <Products />
      <Staff />
      <Sustainability />
      <Testimonials />
      <FAQ />
      <FindUs />
      <ContactUs />
      <Footer />
    </main>
  )
}

