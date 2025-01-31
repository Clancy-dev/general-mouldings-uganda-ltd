"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const featuredProducts = [
  {
    id: 1,
    name: "Household Bucket",
    category: "Household Plastics",
    description: "Durable plastic bucket available in various sizes.",
    image: "/bucket.png?height=200&width=300",
    colors: ["Red", "Blue", "Green"],
    contacts: [
      { type: "phone", value: "+256 123 456 789" },
      { type: "email", value: "buckets@generalmouldings.com" },
      { type: "address", value: "123 Bucket St., Kampala, Uganda" },
    ],
  },
  {
    id: 2,
    name: "Paint Bucket",
    category: "Household Plastics",
    description: "Durable plastic bucket available in various sizes.",
    image: "/white.png?height=200&width=300",
    colors: ["White"],
    contacts: [
      { type: "phone", value: "+256 987 654 321" },
      { type: "email", value: "crates@generalmouldings.com" },
      { type: "address", value: "456 Crate Ave., Entebbe, Uganda" },
    ],
  },
  {
    id: 3,
    name: "Beverage Bottles",
    category: "Industrial Plastics",
    description: "Beverage bottles for industrial use.",
    image: "/beverage.png?height=200&width=300",
    colors: ["Blue","Brown", "Yellow","Green","Clear"],
    contacts: [
      { type: "phone", value: "+256 246 813 579" },
      { type: "email", value: "chairs@generalmouldings.com" },
      { type: "address", value: "789 Chair Rd., Jinja, Uganda" },
    ],
  },
  {
    id: 4,
    name: "Small Jerricans (1L - 5L)",
    category: "Household Plastics",
    description: "Popular for drinking water, motor oil, and liquid fertilizers.",
    image: "/small-jerrican.png?height=200&width=300",
    colors: ["White","Yellow", "Blue", "Green"],
    contacts: [
      { type: "phone", value: "+256 135 792 468" },
      { type: "email", value: "storage@generalmouldings.com" },
      { type: "address", value: "101 Container Blvd., Gulu, Uganda" },
    ],
  },
  {
    id: 5,
    name: "Medium Jerricans(10L - 20L)",
    category: "Household Plastics",
    description: "Popular for drinking water, motor oil, and liquid fertilizers.",
    image: "/jerrican.png?height=200&width=300",
    colors: ["Yellow","White", "Blue", "Green","Red"],
    contacts: [
      { type: "phone", value: "+256 369 258 147" },
      { type: "email", value: "drums@generalmouldings.com" },
      { type: "address", value: "202 Drum Lane, Mbarara, Uganda" },
    ],
  },
  {
    id: 6,
    name: "Large Jerricans (25L - 50L)",
    category: "Household Plastics",
    description: "Popular for drinking water, motor oil, and liquid fertilizers.",
    image: "/big-jerrican.png?height=200&width=300",
    colors: ["White","Yellow", "Blue", "Green","Red"],
    contacts: [
      { type: "phone", value: "+256 741 852 963" },
      { type: "email", value: "tables@generalmouldings.com" },
      { type: "address", value: "303 Table Ct., Mbale, Uganda" },
    ],
  },
]

export default function HomeProducts() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Products Showcase</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
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

function ProductCard({ product }:{product:any}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className={`h-full flex flex-col overflow-hidden group transition-all duration-300 ${isHovered ? "shadow-xl" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardHeader className="p-0">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            layout="fill"
            objectFit="contain"
            className={`transition-transform duration-300 ${isHovered ? "scale-110" : "scale-100"}`}
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
            {product.colors.map((color:any) => (
              <span
                key={color}
                className="w-4 h-4 rounded-full border"
                style={{ backgroundColor: color.toLowerCase() }}
                title={color}
              />
            )) }
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="contacts">
              <AccordionTrigger className="text-sm font-semibold">Contact Us</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2">
                  {product.contacts.map((contact:any, index:any) => (
                    <li key={index} className="flex items-center text-sm">
                      {contact.type === "phone" && <Phone className="w-4 h-4 mr-2" />}
                      {contact.type === "email" && <Mail className="w-4 h-4 mr-2" />}
                      {contact.type === "address" && <MapPin className="w-4 h-4 mr-2" />}
                      {contact.value}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </CardContent>
    </Card>
  )
}

