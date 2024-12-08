'use client'

import { useInView } from 'react-intersection-observer'
import { BoxIcon as Bottle, Package, Sticker, Recycle } from 'lucide-react'

const services = [
  {
    title: 'Jerrycans',
    description: 'Durable and versatile jerrycans for various industrial and household uses.',
    icon: Package,
  },
  {
    title: 'Bottles',
    description: 'High-quality plastic bottles for beverages, cosmetics, and more.',
    icon: Bottle,
  },
  {
    title: 'Jars',
    description: 'Wide-mouth jars perfect for food storage and packaging.',
    icon: Package,
  },
  {
    title: 'Straws',
    description: 'Eco-friendly and reusable straws for the hospitality industry.',
    icon: Sticker,
  },
]

export default function Services() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="services" className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Our Services</h2>
        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 transform ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
            >
              <service.icon className="w-12 h-12 text-blue-900 mb-4" />
              <h3 className="text-xl font-semibold text-blue-900 mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

