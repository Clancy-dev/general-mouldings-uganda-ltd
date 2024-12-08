'use client'

import { useInView } from 'react-intersection-observer'
import { Recycle, Leaf, Droplet, Sun } from 'lucide-react'

const sustainabilityInitiatives = [
  {
    title: 'Recycling Program',
    description: 'We actively recycle and reuse plastic materials in our production process.',
    icon: Recycle,
  },
  {
    title: 'Eco-Friendly Materials',
    description: 'We use biodegradable additives in our plastic products to reduce environmental impact.',
    icon: Leaf,
  },
  {
    title: 'Water Conservation',
    description: 'Our manufacturing process is designed to minimize water usage and promote conservation.',
    icon: Droplet,
  },
  {
    title: 'Solar Energy',
    description: 'We harness solar power to reduce our carbon footprint and energy consumption.',
    icon: Sun,
  },
]

export default function Sustainability() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="sustainability" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Our Commitment to Sustainability</h2>
        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 transform ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {sustainabilityInitiatives.map((initiative, index) => (
            <div
              key={index}
              className="bg-blue-50 p-6 rounded-lg shadow-md flex flex-col items-center text-center"
            >
              <initiative.icon className="w-12 h-12 text-blue-900 mb-4" />
              <h3 className="text-xl font-semibold text-blue-900 mb-2">{initiative.title}</h3>
              <p className="text-gray-700">{initiative.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

