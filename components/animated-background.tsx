'use client'

import { motion } from 'framer-motion'

const backgroundItems = [
  { id: 1, type: 'jerrican', size: 60 },
  { id: 2, type: 'bottle', size: 40 },
  { id: 3, type: 'jerrican', size: 80 },
  { id: 4, type: 'bottle', size: 50 },
  { id: 5, type: 'jerrican', size: 70 },
]

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {backgroundItems.map((item) => (
        <motion.div
          key={item.id}
          className="absolute"
          initial={{
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`,
            opacity: 0,
          }}
          animate={{
            x: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
            y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
            opacity: [0, 0.1, 0],
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        >
          {item.type === 'jerrican' ? (
            <svg
              width={item.size}
              height={item.size}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 4L18 4M6 4L3 8L6 12M6 4V12M18 4L21 8L18 12M18 4V12M6 12V20H18V12M6 12L3 16L6 20M18 12L21 16L18 20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-blue-200"
              />
            </svg>
          ) : (
            <svg
              width={item.size}
              height={item.size}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 2H16M9 2V4M15 2V4M12 11V19M12 11C13.6569 11 15 9.65685 15 8V4H9V8C9 9.65685 10.3431 11 12 11ZM12 19C9.23858 19 7 16.7614 7 14V8H17V14C17 16.7614 14.7614 19 12 19ZM12 19V22"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-blue-200"
              />
            </svg>
          )}
        </motion.div>
      ))}
    </div>
  )
}

