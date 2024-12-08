'use client'

import { useInView } from 'react-intersection-observer'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const testimonials = [
  {
    name: 'Alice Johnson',
    company: 'ABC Beverages',
    testimonial: 'General Mouldings has been our go-to supplier for bottles. Their quality and service are unmatched.',
    avatar: '/placeholder.svg?height=100&width=100',
  },
  {
    name: 'Robert Smith',
    company: 'XYZ Distributors',
    testimonial: 'The jerrycans we source from General Mouldings are durable and cost-effective. Highly recommended!',
    avatar: '/placeholder.svg?height=100&width=100',
  },
  {
    name: 'Emily Brown',
    company: 'Green Earth NGO',
    testimonial: 'We appreciate General Mouldings\' commitment to sustainability. Their eco-friendly products align with our values.',
    avatar: '/placeholder.svg?height=100&width=100',
  },
]

export default function Testimonials() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="testimonials" className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">What Our Clients Say</h2>
        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 transform ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="h-10 w-10 mr-4">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-700">{testimonial.testimonial}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

