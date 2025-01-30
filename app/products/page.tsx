import OurProducts from '@/components/OurProducts';
import Products from '@/components/Products'
import Services from '@/components/Services'
import { Metadata } from 'next';
import React from 'react'


export const metadata: Metadata = {
  title: "Products - General Mouldings (U) Ltd | Leading Plastics Manufacturer in Uganda",
  description:
    "At General Mouldings (U) Ltd, we specialize in manufacturing high-quality plastic products for various industries. From household items to industrial packaging, we provide durable and eco-friendly solutions tailored to meet your needs. Learn more about our services and expertise.",
};

export default function page() {
  return (
    <div className='mt-[72px]'>
    <OurProducts/>
    </div>
  )
}
