"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Leaf, Banknote, Truck } from "lucide-react"

const features = [
  { title: "High-Quality Materials", icon: Shield, description: "Premium raw materials for durable products" },
  { title: "Eco-Friendly Production", icon: Leaf, description: "Sustainable practices for a greener future" },
  { title: "Affordable Prices", icon: Banknote, description: "Competitive pricing without compromising quality" },
  { title: "Fast Delivery", icon: Truck, description: "Efficient logistics for timely deliveries" },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose General Mouldings Uganda?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <feature.icon className="w-6 h-6 mr-2 text-dark-blue" />
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      <h3 className="sr-only">General Mouldings Uganda Limited - Unmatched Quality and Service</h3>
    </section>
  )
}

