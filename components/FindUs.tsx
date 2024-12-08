'use client'

import { useInView } from 'react-intersection-observer'

export default function FindUs() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="find-us" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Find Us</h2>
        <div
          ref={ref}
          className={`transition-all duration-1000 transform ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7573147954365!2d32.58559661475325!3d0.3215999997251249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbd256762a889%3A0x7890b3a021c8db51!2sNew%20Vision%2C%20Kampala%2C%20Uganda!5e0!3m2!1sen!2sus!4v1623345678901!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
          <div className="mt-8 text-center">
            <p className="text-lg text-gray-700">
              General Mouldings (Uganda) Ltd<br />
              Near New Vision, Kampala, Uganda
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

