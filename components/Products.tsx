'use client'

import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

const products = [
  {
    name: 'Small White jerrican',
    description: 'A compact, high-quality plastic jerrican with a smooth white finish and sturdy ergonomic design, featuring a built-in handle for easy carrying.',
    image: '/wb1.jpeg?height=300&width=300',
  },
  {
    name: 'Water bottle',
    description: 'A large, transparent water bottle crafted from durable, high-quality plastic, with a smooth, crystal-clear finish that reflects light beautifully.',
    image: '/wb2.jpeg?height=300&width=300',
  },
  {
    name: 'Yellow Jerrican',
    description: 'A robust and vibrant 20-liter plastic jerrican with a bright yellow finish, featuring a sturdy rectangular design and an ergonomic handle for easy transport. ',
    image: '/wb3.jpeg?height=300&width=300',
  },
  {
    name: 'Pot shaped water bottle',
    description: 'A large, realistic, pot-shaped colorless water bottle made from high-quality, transparent plastic. The bottle has a rounded, sturdy shape with a wide neck and a robust, ergonomic handle for easy carrying.',
    image: '/wb4.jpeg?height=300&width=300',
  },
]

export default function Products() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="products" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Our Products</h2>
        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 transform ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={200}
                className="mb-4 rounded-lg"
              />
              <h3 className="text-xl font-semibold text-blue-900 mb-2">{product.name}</h3>
              <p className="text-gray-700">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

