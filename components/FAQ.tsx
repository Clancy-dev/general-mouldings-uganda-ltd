'use client'

import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const faqs = [
  {
    question: "What's the difference between injection molding and blow molding?",
    answer: "Injection molding involves injecting molten plastic into a mold cavity, while blow molding inflates a heated plastic tube inside a mold. We use injection molding for precise, solid parts like bottle caps, and blow molding for hollow items like bottles."
  },
  {
    question: "How do you ensure consistent wall thickness in your plastic products?",
    answer: "We maintain consistent wall thickness through precise mold design, controlled injection speeds, and optimized cooling processes. Our advanced machinery and quality control measures help us achieve uniform wall thickness, which is crucial for product strength and performance."
  },
  {
    question: "Can you explain the concept of 'plastic memory' and how it affects your products?",
    answer: "Plastic memory refers to a material's tendency to return to its original shape when heated. We consider this property in our design and manufacturing processes, especially for products that may be exposed to high temperatures, ensuring they maintain their intended shape and functionality."
  },
  {
    question: "What measures do you take to prevent stress whitening in your plastic products?",
    answer: "To prevent stress whitening, we carefully control the molding process parameters such as injection speed, pressure, and cooling rate. We also select appropriate materials and use stress-relieving techniques when necessary to maintain the aesthetic and structural integrity of our products."
  },
  {
    question: "How do you address the challenge of weld lines in complex mold designs?",
    answer: "We minimize weld lines through strategic gate placement, optimized mold filling simulations, and controlled injection parameters. In some cases, we use advanced techniques like sequential valve gating to reduce the visibility and impact of weld lines on product strength and appearance."
  },
  {
    question: "What's your approach to dealing with shrinkage and warpage in large plastic parts?",
    answer: "For large parts, we use computer simulations to predict and compensate for shrinkage and warpage. We also employ techniques like differential cooling, strategic reinforcement, and material selection to minimize these issues. Post-molding processes like annealing may be used when necessary."
  },
  {
    question: "How do you ensure the chemical resistance of your plastic products for various applications?",
    answer: "We select materials based on their chemical resistance properties and the intended use of the product. We also conduct rigorous testing, including immersion tests and accelerated aging, to verify the long-term chemical resistance of our products in their intended environments."
  },
  {
    question: "Can you explain how you optimize the gate location in complex mold designs?",
    answer: "Gate location optimization involves balancing factors like flow path, pressure distribution, and aesthetic requirements. We use mold flow analysis software to simulate different gate locations and their effects on part quality. This helps us determine the optimal gate placement for each specific product design."
  },
  {
    question: "What strategies do you employ to reduce cycle times without compromising product quality?",
    answer: "We reduce cycle times through various methods, including optimized cooling channel designs, use of rapid heat cycle molding where appropriate, and precise process control. We also continuously invest in high-speed machinery and automation to improve efficiency without sacrificing quality."
  },
  {
    question: "How do you address the challenge of molding parts with varying wall thicknesses?",
    answer: "Molding parts with varying wall thicknesses requires careful consideration of flow patterns and cooling rates. We use advanced simulation software to optimize mold design and process parameters. Techniques like sequential valve gating and variable cooling may be employed to ensure uniform filling and minimal warpage in parts with significant thickness variations."
  }
]

export default function FAQ() {
  const [openItems, setOpenItems] = useState<string[]>([])
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const toggleItem = (value: string) => {
    setOpenItems((prevItems) =>
      prevItems.includes(value)
        ? prevItems.filter((item) => item !== value)
        : [...prevItems, value]
    )
  }

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Frequently Asked Questions</h2>
        <div
          ref={ref}
          className={`transition-all duration-1000 transform ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger onClick={() => toggleItem(`item-${index}`)}>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

