"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import FAQ from "./FAQ"

export default function AboutUs() {
  const [isLoaded, setIsLoaded] = useState(false)
  const observerRefs = useRef<(HTMLDivElement | null)[]>([])

  // Gallery images with different content
  const galleryImages = [
    { title: "/facility1.jpg?height=300&width=300"},
    { title: "/facility2.jpg?height=300&width=300"},
    { title: "/facility3.jpg?height=300&width=300"},
    { title: "/facility4.jpg?height=300&width=300"},
    { title: "/facility5.jpg?height=300&width=300"},
    { title: "/facility6.jpg?height=300&width=300"},
    { title: "/facility7.jpg?height=300&width=300"},
    { title: "/facility8.jpg?height=300&width=300"},
    
  
  ]

  // Set isLoaded to true after component mounts
  useEffect(() => {
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    // Only run intersection observer if component is loaded
    if (!isLoaded) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add show class with a slight delay to ensure CSS transitions work
            setTimeout(() => {
              entry.target.classList.add("show")
            }, 100)
          }
        })
      },
      {
        threshold: 0.15, // Trigger when at least 15% of the element is visible
        rootMargin: "0px 0px -100px 0px", // Trigger slightly before element comes into view
      },
    )

    // Observe all refs
    observerRefs.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => {
      // Cleanup
      observerRefs.current.forEach((el) => {
        if (el) observer.unobserve(el)
      })
    }
  }, [isLoaded])

  // Function to add elements to our refs array
  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !observerRefs.current.includes(el)) {
      observerRefs.current.push(el)
    }
  }

  return (
    <div className="min-h-screen bg-white text-black w-full">
      {/* Content Sections */}
      <div>
        {/* Background Section */}
        <section className="py-12 md:py-16 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div ref={addToRefs} className="animate-from-left mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#00008b]">Our Background</h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-lg mb-6">
                    We proudly introduce ourselves as General Mouldings (U) Ltd established in the year 1993. We are one
                    of the premier plastic manufacturing companies in Uganda serving both industrial and Domestic
                    sectors with our wide range of plastic products. It is obviously our pride, that our products are
                    well known for the quality and service.
                  </p>
                  <p className="text-lg">
                    We have constantly striven to replicate this flawless symmetry and innovation that we have so often
                    seen in and learnt from our experts and experience. We do not contend ourselves with this growth and
                    still shaping ourselves and will continue to shape our mindscape in structural excellence in the new
                    millennium.
                  </p>
                </div>
                <div className="rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src="/front photo.jpg?height=400&width=600"
                    alt="Manufacturing facility"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>

            <div ref={addToRefs} className="animate-from-right">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1 rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src="/image1.jpg?height=400&width=600"
                    alt="Team at work"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <p className="text-lg mb-6">
                    Pursuit of excellence burns bright in every heart at GML. Small beginning with only two blow
                    Mouldings machines in 1992 saw a team with dedicated directors and engineers who invested hard work
                    in business and dared to dream the impossible.
                  </p>
                  <p className="text-lg">
                    The success of GML is much due to the efforts of the key people in pivotal positions who are highly
                    qualified in this particular field. We operate 24 hrs a day in two shifts of production.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Where We Stand Today */}
        <section className="py-20 px-4 md:px-8 bg-[#00008b]/10">
          <div className="max-w-6xl mx-auto">
            <div ref={addToRefs} className="animate-from-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#00008b]">Where We Stand Today</h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-lg mb-6">
                    We have 2 locations; one in First Street Industrial Area, P.0Box 23349, Kampala-Uganda and the other
                    is a Manufacturing facility located Plot No 3187 & 3188, Kyaggwe, Seeta, Mukono, Kampala, Uganda.
                  </p>
                  <p className="text-lg">
                    Our facilities are equipped with state-of-the-art machinery. We are committed to producing
                    eco-friendly products that contribute to a sustainable future while meeting the diverse needs of our
                    clients locally and internationally.
                  </p>
                </div>
                <div className="rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src="/newfactory.jpg?height=400&width=600"
                    alt="Our facilities"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div ref={addToRefs} className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#00008b]">Our Mission & Vision</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div
                  ref={addToRefs}
                  className="animate-from-left bg-white p-8 rounded-lg border border-[#00008b] shadow-lg shadow-[#00008b]/20"
                >
                  <h3 className="text-2xl font-bold mb-4 text-[#00008b]">Mission</h3>
                  <p className="text-lg italic">
                    "To become as pioneers in manufacturing of plastic packing materials used in all industries"
                  </p>
                </div>
                <div
                  ref={addToRefs}
                  className="animate-from-right bg-white p-8 rounded-lg border border-[#00008b] shadow-lg shadow-[#00008b]/20"
                >
                  <h3 className="text-2xl font-bold mb-4 text-[#00008b]">Vision</h3>
                  <p className="text-lg italic">
                    "To provide qualitative products, to enhance our production capacities to meet market demand, and to
                    expand in to various product range, which results in providing service to the customers in various
                    sectors."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Legal Considerations */}
        <section className="py-20 px-4 md:px-8 bg-[#00008b]/10">
          <div className="max-w-6xl mx-auto">
            <div ref={addToRefs} className="animate-from-bottom">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#00008b]">Legal Considerations</h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <ul className="list-disc list-inside space-y-4 text-lg">
                    <li>
                      The company posses all the necessary statutory documents to legally operate the business activity
                      in Uganda.
                    </li>
                    <li>
                      The product manufactured by the company is environmental friendly but still the company has
                      obtained his environmental license from National Environmental Management Authority (NEMA) of
                      Uganda.
                    </li>
                  </ul>
                </div>
                <div className="rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src="/sustainable.jpg?height=400&width=600"
                    alt="Environmental friendly products"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Gallery */}
        <section className="py-20 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div ref={addToRefs} className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-[#00008b]">Our Company</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {galleryImages.map((image, index) => (
                  <div
                    key={index}
                    ref={addToRefs}
                    className={`rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 ${
                      index % 3 === 0
                        ? "animate-from-left"
                        : index % 3 === 1
                          ? "animate-from-right"
                          : "animate-from-bottom"
                    }`}
                    style={{ transitionDelay: `${index * 0.2}s` }}
                  >
                    <Image
                    //   src={`/placeholder.svg?height=300&width=300&text=${image.title}&bg=${image.color}`}
                      src={image.title}
                      alt={"General Mouldings Images"}
                      width={300}
                      height={300}
                      className="w-full object-contain"
                    />
                  </div>
                ))}
              </div>
              <p className="text-center mt-6 text-sm text-gray-600">Images of our facilities, team, and products</p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-white to-[#00008b]/10 text-black">
          <div className="max-w-6xl mx-auto text-center">
            <div ref={addToRefs} className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Commitment</h2>
              <p className="text-lg mb-8 max-w-3xl mx-auto">
                At General Mouldings Uganda Ltd, we remain committed to innovation, quality, and sustainability. With
                nearly three decades of experience, we continue to evolve and adapt to meet the changing needs of our
                customers while maintaining our core values of excellence and reliability.
              </p>
             
            </div>
          </div>
        </section>

        <FAQ/>
      </div>
    </div>
  )
}

