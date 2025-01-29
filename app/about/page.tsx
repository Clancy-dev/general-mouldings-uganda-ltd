import About from '@/components/About'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "About Us - General Mouldings (U) Ltd | Uganda’s Leading Plastics Manufacturer & Exporter",
  description:
    "Discover General Mouldings (U) Ltd, Uganda’s trusted manufacturer and exporter of high-quality plastic products. With cutting-edge technology and a commitment to sustainability, we deliver durable, eco-friendly solutions for diverse industries. Learn more about our mission, values, and impact.",
};


export default function page() {
  return (
    <div className='mt-[72px]'>
       <About />
    </div>
  )
}
