'use client'

import { useState, useEffect } from 'react'
import { Home, Briefcase, Info, Heart, BookOpen, Search, Phone, Menu, X, LucideImage, Leaf, House, Handshake, MapPin, CircleHelp } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const links = [
  { name: 'Home', icon: <House className="w-4 h-4" />, href: '/' },
  { name: 'What we do', icon: <Handshake className="w-4 h-4" />, href: '/services' },
  { name: 'About', icon: <Info className="w-4 h-4" />, href: '/about' },
  { name: 'Sustainability', icon: <Leaf className="w-4 h-4" />, href: '/sus' },
  { name: 'FAQ', icon: <CircleHelp className="w-4 h-4" />, href: '/faq' },
  { name: 'Find us', icon: <MapPin className="w-4 h-4" />, href: '/find-us' },
  { name: 'Contact us', icon: <Phone className="w-4 h-4" />, href: '/contact' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[72px] w-[100%]">
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            
            <div className="flex items-center">
            <div className="w-12 h-12  rounded-full mr-4">
             <Image src="/gm-final-logo.png" alt="Gaba Hope For Kids Logo" width={60} height={40} className="w-auto h-10" />
             </div>
          
             <h1 className="text-xl font-bold text-blue-900 hidden sm:block">
               General Mouldings (U) Ltd
             </h1>
             <h1 className="text-xl font-bold text-blue-900 sm:hidden">GM (U) Ltd</h1>
           </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "flex items-center space-x-1 px-3 py-2 rounded-md font-bold transition-colors",
                  pathname === link.href
                    ? "text-white bg-blue-900 border-b-2 border-orange-600"
                    : "text-blue-900 hover:bg-blue-100"
                )}
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            ))}
          </div>
          <button
            className="md:hidden bg-blue-900 text-white p-2 rounded-md transition-transform duration-1000 ease-in-out hover:rotate-360"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsMenuOpen(false)}>
            <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm" style={{ top: '64px' }} />
          </div>
          <nav className="fixed top-[64px] left-0 bottom-0 w-3/4 bg-white p-4 overflow-y-auto z-50">
            <div className="space-y-2">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "flex items-center space-x-2 p-2 rounded-md font-bold border-b border-blue-200",
                    pathname === link.href
                      ? "text-white bg-blue-900 border-b-2 border-orange-600"
                      : "text-blue-900 hover:bg-blue-100"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.icon}
                  <span>{link.name}</span>
                </Link>
              ))}
            </div>
          </nav>
        </>
      )}
    </header>
  )
}






























// 'use client'

// import { useState, useEffect } from 'react'
// import { Menu, X } from 'lucide-react'
// import { Button } from '@/components/ui/button'
// import Link from 'next/link'

// const navItems = [
//   { name: 'About', href: '#about' },
//   { name: 'Services', href: '#services' },
//   { name: 'Products', href: '#products' },
//   { name: 'Staff', href: '#staff' },
//   { name: 'Sustainability', href: '#sustainability' },
//   { name: 'Testimonials', href: '#testimonials' },
//   { name: 'FAQ', href: '#faq' },
//   { name: 'Find Us', href: '#find-us' },
//   { name: 'Contact Us', href: '#contact-us' },
// ]

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//   const [activeSection, setActiveSection] = useState('')

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = document.querySelectorAll('section')
//       const scrollPosition = window.scrollY + 100

//       sections.forEach((section) => {
//         if (section instanceof HTMLElement) {
//           const sectionTop = section.offsetTop
//           const sectionHeight = section.clientHeight
//           if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
//             setActiveSection(section.id)
//           }
//         }
//       })
//     }

//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   useEffect(() => {
//     if (isMenuOpen) {
//       document.body.style.overflow = 'hidden'
//     } else {
//       document.body.style.overflow = 'unset'
//     }
//   }, [isMenuOpen])

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md h-[10vh] flex items-center justify-center">
//       <div className="container mx-auto px-4 py-4 flex items-center justify-between">
//         <div className="flex items-center">
//           <div className="w-12 h-12  rounded-full mr-4">
//             <img src="/gm-final-logo.png" alt="General Mouldings Logo" className='w-full h-full'/>
//           </div>
          
//           <h1 className="text-xl font-bold text-blue-900 hidden sm:block">
//             General Mouldings (Uganda) Limited
//           </h1>
//           <h1 className="text-xl font-bold text-blue-900 sm:hidden">GM (U) Ltd</h1>
//         </div>
//         <nav className="hidden md:flex space-x-4">
//           {navItems.map((item) => (
//             <Link
//               key={item.name}
//               href={item.href}
//               className={`text-blue-900 hover:text-blue-700 ${
//                 activeSection === item.href.slice(1) ? 'underline font-bold' : ''
//               }`}
//             >
//               {item.name}
//             </Link>
//           ))}
//         </nav>
//         <Button
//           variant="ghost"
//           size="icon"
//           className="md:hidden"
//           onClick={() => setIsMenuOpen(true)}
//         >
//           <Menu className="h-6 w-6" />
//         </Button>
//       </div>
//       {isMenuOpen && (
//         <div className="fixed inset-0 z-50 md:hidden">
//           <div className="absolute inset-0 bg-black opacity-25" onClick={() => setIsMenuOpen(false)}></div>
//           <nav className="absolute top-0 right-0 bottom-0 w-3/4 bg-white p-8 overflow-y-auto transform transition-transform duration-300 ease-in-out">
//             <div className="flex justify-end">
//               <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
//                 <X className="h-6 w-6" />
//               </Button>
//             </div>
//             <div className="mt-8 flex flex-col space-y-4">
//               {navItems.map((item) => (
//                 <Link
//                   key={item.name}
//                   href={item.href}
//                   className={`text-blue-900 hover:text-blue-700 ${
//                     activeSection === item.href.slice(1) ? 'underline font-bold' : ''
//                   }`}
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   {item.name}
//                 </Link>
//               ))}
//             </div>
//           </nav>
//         </div>
//       )}
//     </header>
//   )
// }

