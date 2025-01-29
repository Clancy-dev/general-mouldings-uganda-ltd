import FindUs from '@/components/FindUs'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Find Us - General Mouldings (U) Ltd | Locate Our Offices & Facilities",
  description:
    "Find General Mouldings (U) Ltd easily with our detailed location guide. Visit our offices and manufacturing facilities in Uganda. Get directions, office hours, and contact details to plan your visit effortlessly.",
};

export default function page() {
  return (
    <div className='mt-[72px]'>
      <FindUs/>
    </div>
  )
}
