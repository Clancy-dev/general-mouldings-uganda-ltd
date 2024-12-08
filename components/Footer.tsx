import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">General Mouldings (Uganda) Ltd</h3>
            <p className="text-sm">Leading manufacturer of plastic products in Uganda</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#about" className="hover:underline">About</Link></li>
              <li><Link href="#services" className="hover:underline">Services</Link></li>
              <li><Link href="#products" className="hover:underline">Products</Link></li>
              <li><Link href="#contact-us" className="hover:underline">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-300"><Facebook /></a>
              <a href="#" className="hover:text-blue-300"><Twitter /></a>
              <a href="#" className="hover:text-blue-300"><Instagram /></a>
              <a href="#" className="hover:text-blue-300"><Linkedin /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} General Mouldings (Uganda) Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

