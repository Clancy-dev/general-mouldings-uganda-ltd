import ContactUs from '@/components/ContactUs'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Contact Us - General Mouldings (U) Ltd | Get in Touch with Us",
  description:
    "Reach out to General Mouldings (U) Ltd for inquiries, partnerships, or support. We are Uganda’s leading plastics manufacturer and exporter, committed to quality and customer satisfaction. Contact us today via phone, email, or visit our offices.",
};

export default function page() {
  return (
    <div className='mt-[72px]'>
      <ContactUs/>
    </div>
  )
}
