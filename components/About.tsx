'use client'

import { useInView } from 'react-intersection-observer'

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">About Us</h2>
        <div
          ref={ref}
          className={`transition-all duration-1000 transform ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <p className="text-lg text-gray-700 mb-6">
            General Mouldings (Uganda) Ltd is a leading manufacturer in the plastics industry,
            specializing in high-quality plastic products. Located in Seeta Industrial Area, Mukono,
            Uganda, we have been serving businesses and consumers with innovative plastic solutions
            for over two decades.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Our state-of-the-art manufacturing facility and commitment to quality have positioned us
            as a trusted partner for businesses across Uganda and beyond. We take pride in our
            ability to deliver customized plastic solutions that meet the diverse needs of our
            clients.
          </p>
          <p className="text-lg text-gray-700">
            At General Mouldings, we are dedicated to sustainability and eco-friendly practices,
            ensuring that our products not only meet the highest quality standards but also
            contribute to a greener future.
          </p>
        </div>
      </div>
    </section>
  )
}

