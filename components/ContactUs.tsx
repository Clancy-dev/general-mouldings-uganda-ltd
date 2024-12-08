'use client'

import { useInView } from 'react-intersection-observer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function ContactUs() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <section id="contact-us" className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Contact Us</h2>
        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-1000 transform ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input type="text" placeholder="Your Name" required />
              <Input type="email" placeholder="Your Email" required />
              <Input type="text" placeholder="Subject" required />
              <Textarea placeholder="Your Message" required />
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </div>
          <div className="space-y-4">
            <div className="flex items-center">
              <Mail className="w-6 h-6 text-blue-900 mr-4" />
              <p className="text-gray-700">info@generalmouldings.com</p>
            </div>
            <div className="flex items-center">
              <Phone className="w-6 h-6 text-blue-900 mr-4" />
              <p className="text-gray-700">+256 123 456 789</p>
            </div>
            <div className="flex items-center">
              <MapPin className="w-6 h-6 text-blue-900 mr-4" />
              <p className="text-gray-700">Seeta Industrial Area, Mukono, Uganda</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

