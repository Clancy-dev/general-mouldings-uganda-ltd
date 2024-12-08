'use client'

import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

const staffMembers = [
  {
    name: 'John Doe',
    role: 'CEO',
    image: '/placeholder.svg?height=300&width=300',
    description: 'Visionary leader with 20+ years of experience in the plastics industry.',
  },
  {
    name: 'Jane Smith',
    role: 'Operations Manager',
    image: '/placeholder.svg?height=300&width=300',
    description: 'Efficiency expert ensuring smooth production and delivery processes.',
  },
  {
    name: 'Michael Johnson',
    role: 'Head of R&D',
    image: '/placeholder.svg?height=300&width=300',
    description: 'Innovator driving product development and sustainability initiatives.',
  },
  {
    name: 'Sarah Brown',
    role: 'Quality Control Manager',
    image: '/placeholder.svg?height=300&width=300',
    description: 'Dedicated to maintaining the highest standards in all our products.',
  },
]

export default function Staff() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="staff" className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Our Team</h2>
        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 transform ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {staffMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={200}
                height={200}
                className="mb-4 rounded-full"
              />
              <h3 className="text-xl font-semibold text-blue-900 mb-2">{member.name}</h3>
              <h4 className="text-lg font-medium text-blue-700 mb-2">{member.role}</h4>
              <p className="text-gray-700">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

