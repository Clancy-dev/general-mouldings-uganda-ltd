"use client"

import { motion } from "framer-motion"
import { Package, Building, HardHat, ShoppingBag, Pill, Utensils } from "lucide-react"
import { AnimatedGridPattern } from "./ui/animated-grid-pattern"
import { cn } from "@/lib/utils"

const industries = [
  { name: "Packaging", icon: Package, description: "Innovative packaging solutions" },
  { name: "Construction", icon: Building, description: "Durable construction materials" },
  { name: "Agriculture", icon: HardHat, description: "Efficient agricultural products" },
  { name: "Retail", icon: ShoppingBag, description: "Custom retail displays" },
  { name: "Pharmaceutical", icon: Pill, description: "Precision medical packaging" },
  { name: "Food & Beverage", icon: Utensils, description: "Safe food-grade plastics" },
]

export default function IndustriesWeServe() {
  return (
    <section className="relative overflow-hidden py-20 bg-dark-blue text-white w-full min-h-[20vh]">
        <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
        )}
      />
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Industries We Serve</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <industry.icon className="w-16 h-16 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{industry.name}</h3>
              <p>{industry.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <h3 className="sr-only">General Mouldings Uganda Limited - Serving Diverse Industries with Excellence</h3>
    </section>
  )
}

