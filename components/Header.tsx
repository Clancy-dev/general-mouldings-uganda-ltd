"use client"

import { useState, useEffect } from "react"
import { Info, Phone, Menu, X, HomeIcon, Handshake, MapPin, Mail, Facebook, Twitter, Instagram } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const links = [
  { name: "Home", icon: <HomeIcon className="w-4 h-4" />, href: "/" },
  { name: "About Us", icon: <Info className="w-4 h-4" />, href: "/about" },
  { name: "Our Products", icon: <Handshake className="w-4 h-4" />, href: "/products" },
  { name: "Find us", icon: <MapPin className="w-4 h-4" />, href: "/find-us" },
  { name: "Contact us", icon: <Phone className="w-4 h-4" />, href: "/contact" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMenuOpen])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300",
        isScrolled ? "shadow-md" : "",
      )}
    >
      {/* Top bar */}
      <div className="bg-dark-blue text-white py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <a href="mailto:info@generalmouldings.com" className="flex items-center space-x-2 hover:text-gray-300">
              <Mail className="w-4 h-4" />
              <span>info@generalmouldings.com</span>
            </a>
            <a href="tel:+256123456789" className="flex items-center space-x-2 hover:text-gray-300">
              <Phone className="w-4 h-4" />
              <span>+256 123 456 789</span>
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-gray-300">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-gray-300">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-gray-300">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className={cn("bg-white transition-all duration-300 relative z-50", isScrolled ? "py-2" : "py-4")}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full mr-4 overflow-hidden">
                <Image
                  src="/gm-final-logo.png"
                  alt="General Mouldings Logo"
                  width={60}
                  height={60}
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-xl font-bold text-dark-blue hidden sm:block">General Mouldings (U) Ltd</h1>
              <h1 className="text-xl font-bold text-dark-blue sm:hidden">GM (U) Ltd</h1>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "flex items-center space-x-1 px-3 py-2 rounded-md font-semibold transition-colors text-sm nav-link",
                  pathname === link.href ? "text-white bg-dark-blue" : "text-dark-blue hover:bg-gray-100",
                )}
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            ))}
          </div>
          <button
            className="md:hidden bg-dark-blue text-white p-2 rounded-md transition-all duration-300 hover:bg-blue-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative w-6 h-6">
              <Menu
                className={`w-6 h-6 absolute transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
              />
              <X
                className={`w-6 h-6 absolute transition-opacity duration-300 ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />
      <nav
        className={`fixed top-[72px] left-0 right-0 bottom-0 bg-white p-4 overflow-y-auto z-50 transition-transform duration-300 ${
          isMenuOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="space-y-2">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "flex items-center space-x-2 p-2 rounded-md font-semibold text-sm",
                pathname === link.href ? "text-white bg-dark-blue" : "text-dark-blue hover:bg-gray-100",
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          ))}
        </div>
        <div className="mt-6 pt-6 border-t border-gray-200">
          <h3 className="text-sm font-semibold text-gray-600 mb-2">Contact Information</h3>
          <a
            href="mailto:info@generalmouldings.com"
            className="flex items-center space-x-2 text-dark-blue hover:text-blue-600 mb-2"
          >
            <Mail className="w-4 h-4" />
            <span>info@generalmouldings.com</span>
          </a>
          <a href="tel:+256123456789" className="flex items-center space-x-2 text-dark-blue hover:text-blue-600 mb-4">
            <Phone className="w-4 h-4" />
            <span>+256 123 456 789</span>
          </a>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-dark-blue hover:text-blue-600">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-dark-blue hover:text-blue-600">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-dark-blue hover:text-blue-600">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

