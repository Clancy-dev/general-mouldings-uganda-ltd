'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Products', href: '#products' },
  { name: 'Staff', href: '#staff' },
  { name: 'Sustainability', href: '#sustainability' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Find Us', href: '#find-us' },
  { name: 'Contact Us', href: '#contact-us' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section')
      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        if (section instanceof HTMLElement) {
          const sectionTop = section.offsetTop
          const sectionHeight = section.clientHeight
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(section.id)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-blue-900 rounded-full mr-4"></div>
          <h1 className="text-xl font-bold text-blue-900 hidden sm:block">
            General Mouldings (Uganda) Limited
          </h1>
          <h1 className="text-xl font-bold text-blue-900 sm:hidden">GM (U) Ltd</h1>
        </div>
        <nav className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-blue-900 hover:text-blue-700 ${
                activeSection === item.href.slice(1) ? 'underline font-bold' : ''
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black opacity-25" onClick={() => setIsMenuOpen(false)}></div>
          <nav className="absolute top-0 right-0 bottom-0 w-3/4 bg-white p-8 overflow-y-auto transform transition-transform duration-300 ease-in-out">
            <div className="flex justify-end">
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
                <X className="h-6 w-6" />
              </Button>
            </div>
            <div className="mt-8 flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-blue-900 hover:text-blue-700 ${
                    activeSection === item.href.slice(1) ? 'underline font-bold' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

