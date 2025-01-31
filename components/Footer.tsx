import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r bg-dark-blue text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">General Mouldings (Uganda) Ltd</h3>
            <p className="text-sm text-blue-200">Leading manufacturer of high-quality plastic products in Uganda</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-300 transition-colors duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-blue-300 transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-blue-300 transition-colors duration-200">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-blue-300 transition-colors duration-200">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-blue-600 pb-2">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-blue-300 transition-colors duration-200 flex items-center">
                  <span className="mr-2">›</span> Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-300 transition-colors duration-200 flex items-center">
                  <span className="mr-2">›</span> About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-blue-300 transition-colors duration-200 flex items-center">
                  <span className="mr-2">›</span> Our Products
                </Link>
              </li>
              <li>
                <Link href="/find-us" className="hover:text-blue-300 transition-colors duration-200 flex items-center">
                  <span className="mr-2">›</span> Find Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-300 transition-colors duration-200 flex items-center">
                  <span className="mr-2">›</span> Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-blue-600 pb-2">Contact Information</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MapPin size={16} className="mr-2 text-blue-300" />
                <span>123 Industrial Area, Kampala, Uganda</span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-blue-300" />
                <span>+256 123 456 789</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-blue-300" />
                <span>info@generalmouldings.com</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-blue-600 pb-2">Newsletter</h4>
            <p className="text-sm mb-4">Stay updated with our latest products and offers</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-blue-800 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-300 w-full"
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-r-md transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-blue-700 text-center text-sm text-blue-200">
          <p>&copy; {new Date().getFullYear()} General Mouldings (Uganda) Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

