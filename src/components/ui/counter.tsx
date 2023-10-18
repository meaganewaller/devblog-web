'use client'

import { m, useAnimationControls } from 'framer-motion'
import tw from '@/utils/tw'
import { useEffect } from 'react'

interface CounterProps {
  count: number
}

const Counter = ({ count }: CounterProps) => {
  const controls = useAnimationControls()

  useEffect(() => {
    const startMotion = async () => {
      await controls.start({
        y: [-20, 0],
        transition: { duration: 0.15 },
      })
    }

    if (count !== 0) startMotion()
  }, [count, controls])

  return (
    <div
      className={tw(
        'relative flex items-center gap-1 h-6 overflow-hidden rounded-full py-1 px-2 bg-accent-dark',
      )}
    >
      {count === 0 ? (
        <span
          className={tw(
            'flex flex-col font-mono text-sm font-bold text-on-accent',
          )}
        >
          <span className={tw('flex h-5 items-center')}>0</span>
        </span>
      ) : (
        <m.span
          className={tw(
            'flex flex-col font-mono text-sm font-bold text-on-accent',
          )}
          animate={controls}
        >
          <span className={tw('flex h-5 items-center')}>&nbsp;</span>
          <span className={tw('flex h-5 items-center')}>{count}</span>
          <span className={tw('flex h-5 items-center')}>{count - 1}</span>
        </m.span>
      )}
    </div>
  )
}

export default Counter
