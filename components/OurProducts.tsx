"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Search, Phone } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DotPattern } from "./ui/dot-pattern"
import { cn } from "@/lib/utils"

const products = [
  {
    id: 1,
    name: "Household Bucket",
    category: "Household Plastics",
    description: "Durable plastic bucket available in various sizes.",
    image: "/bucket.png?height=200&width=300",
    material: "Polypropylene",
    colors: ["Red", "Blue", "Green"],
  },
  {
    id: 2,
    name: "Paint Bucket",
    category: "Household Plastics",
    description: "Durable plastic bucket available in various sizes.",
    image: "/white.png?height=200&width=300",
    material: "Polypropylene",
    colors: ["White"],
  },
  {
    id: 3,
    name: "Beverage Bottles",
    category: "Industrial Plastics",
    description: "Beverage bottles for industrial use.",
    image: "/beverage.png?height=200&width=300",
    material: "HDPE",
    colors: ["Blue","Brown", "Yellow","Green","Clear"],
  },
  {
    id: 4,
    name: "Medicine bottles",
    category: "Phamecutical platics",
    description: "Phamecutical platics for packing medicine.",
    image: "/medicine.png?height=200&width=300",
    material: "HDPE",
    colors: ["White"],
  },
  {
    id: 5,
    name: "Small Jerricans (1L - 5L)",
    category: "Household Plastics",
    description: "Popular for drinking water, motor oil, and liquid fertilizers.",
    image: "/small-jerrican.png?height=200&width=300",
    material: "Polyethylene",
    colors: ["White","Yellow", "Blue", "Green"],
  },
  {
    id: 6,
    name: "Medium Jerricans(10L - 20L)",
    category: "Household Plastics",
    description: "Popular for drinking water, motor oil, and liquid fertilizers.",
    image: "/jerrican.png?height=200&width=300",
    material: "Polyethylene",
    colors: ["Yellow","White", "Blue", "Green","Red"],
  },
  {
    id: 7,
    name: "Large Jerricans (25L - 50L)",
    category: "Household Plastics",
    description: "Popular for drinking water, motor oil, and liquid fertilizers.",
    image: "/big-jerrican.png?height=200&width=300",
    material: "Polyethylene",
    colors: ["White","Yellow", "Blue", "Green","Red"],
  },
  {
    id: 8,
    name: "Cosmetic Plastics",
    category: "Industrial Plastics",
    description: "Versatile storage solution for home and office.",
    image: "/cosmetic.png?height=200&width=300",
    material: "Polypropylene",
    colors: ["Clear", "Blue", "Green","Yellow","Grey","Brown","White"],
  },
  {
    id: 9,
    name: "Lubricant Plastics",
    category: "Industrial Plastics",
    description: "Large capacity drum for industrial liquids.",
    image: "/lubricant.png?height=200&width=300",
    material: "HDPE",
    colors: ["Blue", "Black","Grey","Gray","White","Orange","Red"],
  }
  
]

export default function OurProducts() {
  const [selectedCategory, setSelectedCategory] = useState("")
  const [searchTerm, setSearchTerm] = useState("")

  const categories = ["All", ...new Set(products.map((product) => product.category))]

  const filteredProducts = products.filter(
    (product) =>
      (selectedCategory === "All" || selectedCategory === "" || product.category === selectedCategory) &&
      product.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="container mx-auto px-4 py-12">
      


      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center text-blue-950 mb-8 title-t"
      >
        Our Products
      </motion.h1>

      {/* Search & Filter Section */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-8 space-y-4 md:space-y-0 md:space-x-4">
        <div className="relative w-full md:w-1/3">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Search products..."
            className="pl-10 w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <Select onValueChange={(value) => setSelectedCategory(value)}>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Products Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.03 }}
            >
              <Card className="h-full flex flex-col">
                <CardHeader className="p-0">
                  <div className="relative h-48 w-full">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-t-lg"
                    />
                  </div>
                </CardHeader>
                <CardContent className="flex-grow p-4">
                  <CardTitle className="text-xl mb-2">{product.name}</CardTitle>
                  <Badge variant="secondary" className="mb-2">
                    {product.category}
                  </Badge>
                  <CardDescription className="text-sm mb-2">{product.description}</CardDescription>
                  <p className="text-sm text-muted-foreground mb-2">Material: {product.material}</p>
                  <div className="mb-2">
                    <p className="text-sm text-muted-foreground mb-1">Available colors:</p>
                    <div className="flex gap-2">
                      {product.colors.map((color) => (
                        <span
                          key={color}
                          className="w-4 h-4 rounded-full border"
                          style={{ backgroundColor: color.toLowerCase() }}
                          title={color}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-primary flex items-center">
                    <Phone className="w-4 h-4 mr-1" />
                    Contact for pricing
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))
        ) : (
          <p className="col-span-full text-center text-muted-foreground">No products found.</p>
        )}
      </motion.div>
    </div>
  )
}

