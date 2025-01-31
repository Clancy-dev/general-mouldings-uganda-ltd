"use client"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const featuredProducts = [
  {
    id: 1,
    name: "Plastic Bucket",
    category: "Household Plastics",
    description: "Durable plastic bucket available in various sizes.",
    image: "/placeholder.svg?height=200&width=300",
    colors: ["Red", "Blue", "Green"],
  },
  {
    id: 2,
    name: "Plastic Crate",
    category: "Industrial Plastics",
    description: "Heavy-duty crate for industrial use.",
    image: "/placeholder.svg?height=200&width=300",
    colors: ["Black", "Yellow"],
  },
  {
    id: 3,
    name: "Plastic Chair",
    category: "Household Plastics",
    description: "Lightweight and strong plastic chair.",
    image: "/placeholder.svg?height=200&width=300",
    colors: ["White", "Blue", "Green"],
  },
  {
    id: 4,
    name: "Storage Container",
    category: "Household Plastics",
    description: "Versatile storage solution for home and office.",
    image: "/placeholder.svg?height=200&width=300",
    colors: ["Clear", "Blue", "Green"],
  },
  {
    id: 5,
    name: "Industrial Drum",
    category: "Industrial Plastics",
    description: "Large capacity drum for industrial liquids.",
    image: "/placeholder.svg?height=200&width=300",
    colors: ["Blue", "Black"],
  },
  {
    id: 6,
    name: "Plastic Table",
    category: "Household Plastics",
    description: "Durable and easy to clean plastic table.",
    image: "/placeholder.svg?height=200&width=300",
    colors: ["White", "Beige"],
  },
]

export default function HomeProducts() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="h-full flex flex-col overflow-hidden group">
              <CardHeader className="p-0">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </CardHeader>
              <CardContent className="flex-grow p-4">
                <Badge variant="secondary" className="mb-2">
                  {product.category}
                </Badge>
                <CardTitle className="text-xl mb-2">{product.name}</CardTitle>
                <CardDescription className="text-sm mb-4 line-clamp-2">{product.description}</CardDescription>
                <div className="mt-auto">
                  <p className="text-sm font-semibold text-primary mb-2">Available colors:</p>
                  <div className="flex gap-2 mb-4">
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
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/products">
            <Button variant="outline" size="lg" className="group">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

