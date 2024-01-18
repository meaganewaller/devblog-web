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

// eslint-disable-next-line
const PageHeader = forwardRef<HTMLDivElement, PageHeaderProps>(
  ({ title, description, centered }: PageHeaderProps, ref) => {
    const animation = {
      hide: centered ? { y: 32, opacity: 0 } : { x: -32, opacity: 0 },
      show: centered ? { y: 0, opacity: 1 } : { x: 0, opacity: 1 },
    }

    return (
      <div className={tw('bg-pattern py-8', 'md:py-10', 'lg:py-12')} ref={ref}>
        <Container className={tw('overflow-hidden', centered && 'text-center')}>
          <motion.div initial={animation.hide} animate={animation.show} transition={{ delay: 0.1 }}>
            <h1
              className={tw(
                'font-venice text-4xl font-extrabold leading-tight',
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
              className={tw('w-[90%] pb-3', centered && 'text-center')}
            >
              <div dangerouslySetInnerHTML={{ __html: description }} />
            </motion.div>
          )}
        </Container>
      </div>
    )
  },
)

export default PageHeader
