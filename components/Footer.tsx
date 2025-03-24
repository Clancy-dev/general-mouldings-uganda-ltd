import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, HomeIcon, Info, Handshake } from "lucide-react"

export default function Footer() {
  const links = [
    { name: "Home", icon: <HomeIcon className="w-4 h-4" />, href: "/" },
    { name: "About Us", icon: <Info className="w-4 h-4" />, href: "/about" },
    { name: "Our Products", icon: <Handshake className="w-4 h-4" />, href: "/products" },
    { name: "Find us", icon: <MapPin className="w-4 h-4" />, href: "/find-us" },
    { name: "Contact us", icon: <Phone className="w-4 h-4" />, href: "/contact" },
  ]

  return (
    <footer className="bg-gradient-to-r bg-dark-blue text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">General Mouldings (Uganda) Ltd</h3>
            <p className="text-sm text-blue-200">Leading manufacturer of high-quality plastic products in Uganda</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-blue-300 transition-colors duration-200">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="hover:text-blue-300 transition-colors duration-200">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="hover:text-blue-300 transition-colors duration-200">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="hover:text-blue-300 transition-colors duration-200">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-blue-600 pb-2">Quick Links</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-blue-300 transition-colors duration-200 flex items-center"
                  >
                    <span className="mr-2">{link.icon}</span> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-blue-600 pb-2">Contact Information</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={16} className="mr-2 text-blue-300 mt-1 flex-shrink-0" />
                <span>First Street Industrial Area, P.0Box 23349, Kampala-Uganda</span>
              </li>
              <li className="space-y-1">
                <div className="flex items-center">
                  <Phone size={16} className="mr-2 text-blue-300 flex-shrink-0" />
                  <span>Tel: +256 414 250 776</span>
                </div>
                <div className="ml-6">
                  <span>Fax: +256 312 260 598</span>
                </div>
              </li>
              <li className="space-y-1">
                <div className="flex items-center">
                  <Mail size={16} className="mr-2 text-blue-300 flex-shrink-0" />
                  <span>sekhar@gml.co.ug</span>
                </div>
                <div className="ml-6">
                  <span>accounts@gml.co.ug</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-blue-700 text-center text-sm text-blue-200">
          <p>&copy; {new Date().getFullYear()} General Mouldings (Uganda) Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

