'use client'

import { ReactNode } from 'react'
import { LazyMotion, MotionConfig, domAnimation, m } from 'framer-motion'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  )
}
