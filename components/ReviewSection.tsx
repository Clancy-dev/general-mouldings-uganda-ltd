"use client"

import { useInView } from "react-intersection-observer"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const reviews = [
  {
    id: 1,
    name: "Nakiganda Daisy",
    image: "/review images/daisy.jpg",
    text: "General Mouldings (U) Ltd has redefined excellence in the plastics industry. Their attention to detail, timeliness, and commitment to delivering top-notch products is impressive. Truly a company you can trust!",
  },
  {
    id: 2,
    name: "Okello Timothy",
    image: "/review images/okello.jpg",
    text: "I ordered customized plastic packaging, and they exceeded my expectations! The durability and design were spot on. It's rare to find such dedication to quality.",
  },
  {
    id: 3,
    name: "Asiimwe Winnie",
    image: "/review images/winnie.jpg",
    text: "Their professionalism is evident in everything they do. From inquiry to delivery, I felt supported every step of the way. General Mouldings truly cares about its clients.",
  },
  {
    id: 4,
    name: "Mugisha Denis",
    image: "/review images/dennis.jpg",
    text: "The team at General Mouldings is incredibly innovative! Their ability to create custom solutions for my business needs has saved me time and money.",
  },
  {
    id: 5,
    name: "Kirabo Chris",
    image: "/review images/chris.jpg",
    text: "What sets General Mouldings apart is their consistency. Whether it's a small order or a bulk purchase, the quality is always impeccable.",
  },
  {
    id: 6,
    name: "Nankunda Cathy",
    image: "/review images/cathy.jpg",
    text: "I love how environmentally conscious General Mouldings is. Their commitment to sustainable manufacturing gives me peace of mind knowing I'm supporting a company that cares about the planet.",
  },
  {
    id: 7,
    name: "Omara Simon",
    image: "/review images/omara.jpg",
    text: "It's refreshing to see a Ugandan company setting such a high standard in manufacturing. General Mouldings (U) Ltd is a shining example of quality and professionalism.",
  },
  {
    id: 8,
    name: "Mugume Mark",
    image: "/review images/mark.jpg",
    text: "I've been sourcing plastic products from General Mouldings for my business, and I've never been disappointed. Their products are durable, eco-friendly, and priced fairly.",
  },
  {
    id: 9,
    name: "Busingye Moses",
    image: "/review images/moses.jpg",
    text: "The customer service at General Mouldings is phenomenal. They treat you like family and always deliver on time. Highly recommend them!",
  },
  {
    id: 10,
    name: "Kato Fred",
    image: "/review images/fred.jpg",
    text: "From the friendly staff to the exceptional products, General Mouldings is a company that understands its customers. I'm always happy to recommend them to others!",
  },
  {
    id: 11,
    name: "Mwanga Patrick",
    image: "/review images/patrick.jpg",
    text: "General Mouldings has been instrumental in helping my business grow. Their quick turnaround time and flawless product quality are truly unmatched.",
  },
]

export default function ReviewSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [currentReview, setCurrentReview] = useState(0)

  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setCurrentReview((prev) => (prev + 1) % reviews.length)
      }, 7500)

      return () => clearInterval(interval)
    }
  }, [inView])

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  return (
    <section ref={ref} className="py-8 sm:py-12 md:py-20 bg-gradient-to-br from-[#1e3a8a]/10 to-gray-100">
      <div className="container mx-auto px-4 max-w-[95%] md:max-w-[90%] lg:max-w-4xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 md:mb-10 text-dark-blue">
          What Our Customers Say
        </h2>
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentReview}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-lg"
            >
              <Quote className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[#1e3a8a]/20 mb-3 sm:mb-4" />
              <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">"{reviews[currentReview].text}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full overflow-hidden mr-3 sm:mr-4 flex-shrink-0">
                  <Image
                    src={reviews[currentReview].image || "/placeholder.svg"}
                    alt={reviews[currentReview].name}
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-dark-blue text-base sm:text-lg">{reviews[currentReview].name}</h3>
                  <p className="text-gray-600 text-sm sm:text-base">Satisfied Customer</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons - Repositioned for mobile */}
          <div className="flex justify-between mt-4 sm:mt-0">
            <button
              onClick={prevReview}
              className="sm:absolute left-0 sm:left-0 top-1/2 sm:-translate-y-1/2 sm:-translate-x-12 bg-white p-2 rounded-full shadow-md text-dark-blue hover:bg-[#1e3a8a] hover:text-white transition-colors duration-300"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={nextReview}
              className="sm:absolute right-0 sm:right-0 top-1/2 sm:-translate-y-1/2 sm:translate-x-12 bg-white p-2 rounded-full shadow-md text-dark-blue hover:bg-[#1e3a8a] hover:text-white transition-colors duration-300"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center mt-6 sm:mt-8 flex-wrap gap-1">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentReview(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full mx-0.5 sm:mx-1 transition-colors duration-300 ${
                index === currentReview ? "bg-[#1e3a8a]" : "bg-gray-300"
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

