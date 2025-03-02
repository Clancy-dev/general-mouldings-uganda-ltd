"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { DotPattern } from "./ui/dot-pattern"
import { cn } from "@/lib/utils"

export default function AboutUsOverview() {
  return (
    <section className="relative py-20 bg-dark-blue text-white">
      <div className="container mx-auto px-4">
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]",
        )}
      />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-6 z-20 relative">About General Mouldings Uganda</h2>
          <p className="text-xl mb-8 z-20 relative">
            With over two decades of experience, General Mouldings Uganda Ltd. is your trusted partner in high-quality
            plastic solutions. We combine cutting-edge technology with eco-friendly practices to deliver innovative
            products that meet the diverse needs of our clients across various industries.
          </p>
          <Button
            size="lg"
            className="bg-white text-dark-blue z-20 relative hover:bg-blue-950 hover:border-white border-[1px] hover:text-white transition-colors duration-300 font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl"
          >
            Learn More
          </Button>
        </motion.div>
      </div>
      <h3 className="sr-only">General Mouldings Uganda Limited - Excellence in Plastic Manufacturing</h3>
    </section>
  )
}

