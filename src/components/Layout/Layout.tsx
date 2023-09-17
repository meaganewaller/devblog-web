'use client'

import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

export default function Layout(props: { children: React.ReactNode }) {
  const { children } = props
  const pathname = usePathname()

  return (
    <div className='flex min-h-screen flex-col'>
      <motion.main
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.15 } }}
        className='relative flex-grow px-4'
      >
        {children}
      </motion.main>
    </div>
  )
}
