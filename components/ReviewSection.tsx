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
    <section ref={ref} className="py-20 bg-gradient-to-br from-dark-blue/10 to-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10 text-dark-blue">What Our Customers Say</h2>
        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentReview}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <Quote className="w-12 h-12 text-dark-blue/20 mb-4" />
              <p className="text-lg text-gray-700 mb-6">"{reviews[currentReview].text}"</p>
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src={reviews[currentReview].image || "/placeholder.svg"}
                    alt={reviews[currentReview].name}
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-dark-blue text-lg">{reviews[currentReview].name}</h3>
                  <p className="text-gray-600">Satisfied Customer</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <button
            onClick={prevReview}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 bg-white p-2 rounded-full shadow-md text-dark-blue hover:bg-dark-blue hover:text-white transition-colors duration-300"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextReview}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 bg-white p-2 rounded-full shadow-md text-dark-blue hover:bg-dark-blue hover:text-white transition-colors duration-300"
            aria-label="Next review"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        <div className="flex justify-center mt-8 flex-wrap">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentReview(index)}
              className={`w-3 h-3 rounded-full mx-1 mb-2 ${index === currentReview ? "bg-dark-blue" : "bg-gray-300"}`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

