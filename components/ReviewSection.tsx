'use client'

import { useInView } from 'react-intersection-observer'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const reviews = [
    {
      id: 1,
      name: 'Nakiganda Daisy',
      image: './review images/daisy.jpg',
      text: 'General Mouldings (U) Ltd has redefined excellence in the plastics industry. Their attention to detail, timeliness, and commitment to delivering top-notch products is impressive. Truly a company you can trust!',
    },
    {
      id: 2,
      name: 'Okello Timothy',
      image: './review images/okello.jpg',
      text: 'I ordered customized plastic packaging, and they exceeded my expectations! The durability and design were spot on. It’s rare to find such dedication to quality.',
    },
    {
      id: 3,
      name: 'Asiimwe Winnie',
      image: './review images/winnie.jpg',
      text: 'Their professionalism is evident in everything they do. From inquiry to delivery, I felt supported every step of the way. General Mouldings truly cares about its clients.',
    },
    {
      id: 4,
      name: 'Mugisha Denis',
      image: './review images/dennis.jpg',
      text: 'The team at General Mouldings is incredibly innovative! Their ability to create custom solutions for my business needs has saved me time and money.',
    },
    {
      id: 5,
      name: 'Kirabo Chris',
      image: './review images/chris.jpg',
      text: 'What sets General Mouldings apart is their consistency. Whether it’s a small order or a bulk purchase, the quality is always impeccable.',
    },
    {
      id: 6,
      name: 'Nankunda Cathy',
      image: './review images/cathy.jpg',
      text: 'I love how environmentally conscious General Mouldings is. Their commitment to sustainable manufacturing gives me peace of mind knowing I’m supporting a company that cares about the planet.',
    },
    {
      id: 7,
      name: 'Omara Simon',
      image: './review images/omara.jpg',
      text: 'It’s refreshing to see a Ugandan company setting such a high standard in manufacturing. General Mouldings (U) Ltd is a shining example of quality and professionalism.',
    },
    {
      id: 8,
      name: 'Mugume Mark',
      image: './review images/mark.jpg',
      text: 'I’ve been sourcing plastic products from General Mouldings for my business, and I’ve never been disappointed. Their products are durable, eco-friendly, and priced fairly.',
    },
    {
      id: 9,
      name: 'Busingye Moses',
      image: './review images/moses.jpg',
      text: 'The customer service at General Mouldings is phenomenal. They treat you like family and always deliver on time. Highly recommend them!',
    },
    {
      id: 10,
      name: 'Kato Fred',
      image: './review images/fred.jpg',
      text: 'From the friendly staff to the exceptional products, General Mouldings is a company that understands its customers. I’m always happy to recommend them to others!',
    },
    {
      id: 11,
      name: 'Mwanga Patrick',
      image: './review images/patrick.jpg',
      text: 'General Mouldings has been instrumental in helping my business grow. Their quick turnaround time and flawless product quality are truly unmatched.',
    },
  ];
  

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

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-700">Reviews</h2>
        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentReview}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                <img src={reviews[currentReview].image} alt={reviews[currentReview].name} className="w-12 h-12 rounded-full mr-4" />
                <h3 className="font-semibold text-primary">{reviews[currentReview].name}</h3>
              </div>
              <p className="italic text-primary/80">"{reviews[currentReview].text}"</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

