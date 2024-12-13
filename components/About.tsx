'use client'

import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-green-200 z-0" />
      <div className="absolute inset-0 z-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-green-300 opacity-20"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 5}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>
      <div className="container mx-auto px-4 relative z-20">
        <h2 className="text-4xl font-bold text-green-800 mb-8 text-center p-2">About Us</h2>
        <div
          ref={ref}
          className={`transition-all duration-1000 transform ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="bg-white bg-opacity-80 rounded-lg shadow-xl p-8 mb-8">
            <p className="text-lg text-gray-700 mb-6">
              General Mouldings (Uganda) Ltd, founded on October 31, 1991, is a leading manufacturer in the plastics industry.
              We specialize in high-quality plastic products, including bottles and jerricans, and have been providing innovative solutions for businesses and consumers for over two decades.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              We have 2 locations; one in  Kampala at Plot 15/17, 1st Street, Industrial Area, in the Kaka Building and the other is a Manufacturing facility loacted at  Seeta Industrial Area, Mukono equipped with state-of-the-art machinery.
              We are committed to producing eco-friendly products that contribute to a sustainable future while meeting the diverse needs of our clients locally and internationally.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              At General Mouldings, we are passionate about quality and innovation. Our team works tirelessly to create tailored solutions for our clients, ensuring that every product we produce meets the highest industry standards.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Our mission is to be the leading provider of plastic products, offering sustainable and customized solutions that support the growth of businesses globally. We aim to foster long-term partnerships with our clients based on trust and mutual success.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              With a clear focus on environmental sustainability, General Mouldings remains dedicated to using recyclable materials and reducing our carbon footprint through innovative manufacturing processes.
            </p>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </section>
  )
}

