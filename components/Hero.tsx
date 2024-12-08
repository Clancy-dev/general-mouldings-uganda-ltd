'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const heroContent = [
  {
    image: '/placeholder.svg?height=800&width=1200',
    title: 'Welcome to General Mouldings',
    subtitle: 'Leading Plastic Manufacturer in Uganda',
  },
  {
    image: '/placeholder.svg?height=800&width=1200',
    title: 'Quality Plastic Solutions',
    subtitle: 'Innovative Products for Every Need',
  },
  {
    image: '/placeholder.svg?height=800&width=1200',
    title: 'Sustainable Manufacturing',
    subtitle: 'Committed to Eco-Friendly Practices',
  },
  {
    image: '/placeholder.svg?height=800&width=1200',
    title: 'Trusted by Businesses',
    subtitle: 'Serving Uganda and Beyond',
  },
  {
    image: '/placeholder.svg?height=800&width=1200',
    title: 'Join Our Success Story',
    subtitle: 'Experience Excellence in Plastics',
  },
]

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroContent.length)
    }, 7000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen">
      {heroContent.map((content, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={content.image}
            alt={content.title}
            layout="fill"
            objectFit="cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center">
              {content.title}
            </h2>
            <p className="text-xl md:text-2xl lg:text-3xl text-center">{content.subtitle}</p>
          </div>
        </div>
      ))}
    </section>
  )
}

