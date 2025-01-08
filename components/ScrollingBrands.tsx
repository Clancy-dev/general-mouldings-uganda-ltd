'use client'

import { useRef, useEffect } from 'react'
import Image from 'next/image'

// Sample brand data - replace with your actual brand data
const brands = [
  { name: 'Brand 1', logo: '/brands/brand1.png' },
  { name: 'Brand 2', logo: '/brands/brand2.png' },
  { name: 'Brand 3', logo: '/brands/brand3.png' },
  { name: 'Brand 4', logo: '/brands/brand4.png' },
  { name: 'Brand 5', logo: '/brands/brand5.png' },
  { name: 'Brand 6', logo: '/brands/brand6.png' },
  { name: 'Brand 7', logo: '/brands/brand7.png' },
  { name: 'Brand 8', logo: '/brands/brand8.png' },
]

export default function ScrollingBrands() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const scrollWidth = scrollContainer.scrollWidth
    const clientWidth = scrollContainer.clientWidth

    let scrollPosition = 0
    const scrollSpeed = 0.5 // Adjust this value to change the scroll speed

    const scroll = () => {
      scrollPosition += scrollSpeed
      if (scrollPosition >= scrollWidth / 2) {
        scrollPosition = 0
      }
      scrollContainer.scrollLeft = scrollPosition
      requestAnimationFrame(scroll)
    }

    const animation = requestAnimationFrame(scroll)

    return () => cancelAnimationFrame(animation)
  }, [])

  return (
    <section className="py-12 bg-gray-100 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">Our Trusted Partners</h2>
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex overflow-x-hidden"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            <div className="flex animate-scroll">
              {[...brands, ...brands].map((brand, index) => (
                <div key={`${brand.name}-${index}`} className="flex-shrink-0 mx-4">
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    width={150}
                    height={100}
                    className="object-contain h-20"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

