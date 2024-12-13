'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPinIcon } from 'lucide-react'
import GoogleMap from './google-map'

const locations = [
  {
    id: 1,
    name: 'General Mouldings (U) Ltd - Sales Office',
    address: 'Plot 15/17, 1st Street, Industrial Area, Kampala',
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.8776649324875!2d32.601379495751075!3d0.3219579060196341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb8d0699bb15%3A0x6d4ed4fe06de981c!2sGeneral%20Mouldings%20(U)%20Ltd%20-%20Sales%20Office!5e0!3m2!1sen!2sug!4v1734081201178!5m2!1sen!2sug",
    bgImage: '/office.png?height=1080&width=1920'
  },
  {
    id: 2,
    name: 'General Mouldings (U) Ltd - Factory',
    address: 'Industrial Area, Seeta, Mukono',
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.8688264710268!2d32.70795649264035!3d0.36434333937112606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177db80cf743cfef%3A0x5486533c32642d2f!2sGeneral%20Mouldings%20(U)%20Ltd!5e0!3m2!1sen!2sug!4v1734081328452!5m2!1sen!2sug",
    bgImage: '/factory.png?height=1080&width=1920'
  },
]

export default function FindUs() {
  const [activeLocation, setActiveLocation] = useState(locations[0])

  return (
    <section 
      id="find-us" 
      className="relative min-h-screen overflow-hidden bg-cover bg-center transition-all duration-500 ease-in-out"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${activeLocation.bgImage})`,
      }}
    >
      <div className="container mx-auto px-4 py-16 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Find Us</h2>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="bg-white bg-opacity-90 rounded-lg shadow-xl p-6">
            <h3 className="text-2xl font-semibold mb-4 text-blue-800">Our Locations</h3>
            <ul className="space-y-4">
              {locations.map((location) => (
                <li key={location.id}>
                  <button
                    onClick={() => setActiveLocation(location)}
                    className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                      activeLocation.id === location.id
                        ? 'bg-blue-100 shadow-md'
                        : 'hover:bg-blue-50'
                    }`}
                  >
                    <h4 className="text-lg font-medium text-blue-900 mb-2">{location.name}</h4>
                    <p className="text-blue-700 flex items-start">
                      <MapPinIcon className="w-5 h-5 mr-2 mt-1 flex-shrink-0" />
                      {location.address}
                    </p>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <motion.div
            key={activeLocation.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white bg-opacity-90 rounded-lg shadow-xl p-6"
          >
            <GoogleMap location={activeLocation} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

