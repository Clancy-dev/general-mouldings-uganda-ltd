import React, { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionProps {
  children: ReactNode
  className?: string
}

export function Section({ children, className }: SectionProps) {
  return (
    <section className={cn('py-16 md:py-24', className)}>
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  )
}

