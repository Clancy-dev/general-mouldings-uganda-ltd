'use client'

import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

const products = [
  {
    name: 'Nyonta Water Bottle',
    description: 'Pure, refreshing water in a sturdy, eco-friendly bottle.',
    image: '/placeholder.svg?height=300&width=300',
  },
  {
    name: 'Nyonta Juice Bottle',
    description: 'Delicious, natural juices in convenient plastic bottles.',
    image: '/placeholder.svg?height=300&width=300',
  },
  {
    name: 'Nyonta Oil Container',
    description: 'High-quality cooking oil in durable, easy-to-pour containers.',
    image: '/placeholder.svg?height=300&width=300',
  },
  {
    name: 'Nyonta Storage Jar',
    description: 'Versatile jars for storing various food items and more.',
    image: '/placeholder.svg?height=300&width=300',
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

