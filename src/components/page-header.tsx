'use client'

import { motion } from 'framer-motion'
import { forwardRef } from 'react'

import { tw } from '@/utils/tw'

import { Container } from './ui'

interface PageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description?: string
  centered?: boolean
}

const PageHeader = forwardRef<HTMLDivElement, PageHeaderProps>(
  ({ title, description, centered }: PageHeaderProps, ref) => {
    const animation = {
      hide: centered ? { y: 32, opacity: 0 } : { x: -32, opacity: 0 },
      show: centered ? { y: 0, opacity: 1 } : { x: 0, opacity: 1 },
    }

    return (
      <div className={tw('bg-pattern py-12', 'md:py-16', 'lg:py-20')} ref={ref}>
        <Container className={tw('pointer-events-none select-none overflow-hidden', centered && 'text-center',)}>
          <motion.div initial={animation.hide} animate={animation.show} transition={{ delay: 0.1 }}>
            <h1
              className={tw(
                'font-extrabold text-4xl leading-tight',
                'md:text-5xl md:leading-tight',
                'lg:text-6xl lg:leading-tight',
              )}
            >
              {title}
            </h1>
          </motion.div>
          {description && (
            <motion.div
              initial={animation.hide}
              animate={animation.show}
              transition={{ delay: 0.2 }}
            >
              <p className={tw('mt-4 text-lg')}>{description}</p>
            </motion.div>
          )}
        </Container>
      </div>
    )
  }
)

export default PageHeader
