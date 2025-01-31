"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function CallToActionHome() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Need High-Quality Plastic Products?</h2>
          <p className="text-xl mb-8">
            Get in touch with General Mouldings Uganda Ltd. today and discover how our innovative plastic solutions can
            benefit your business.
          </p>
          <Button size="lg" className="bg-dark-blue hover:bg-blue-800 text-white">
            Contact Us
          </Button>
        </motion.div>
      </div>
      <h3 className="sr-only">General Mouldings Uganda Limited - Your Partner in Plastic Innovation</h3>
    </section>
  )
}

