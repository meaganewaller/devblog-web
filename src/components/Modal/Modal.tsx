import { AnimatePresence, motion } from 'framer-motion'
import { FC } from 'react'

interface Props {
  isOpen: boolean
  setIsOpen: (state: boolean) => void
  children: React.ReactNode
}

const backdropVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      durtion: 1,
      delayChildren: 0.2,
    },
  },
}

const modalVariant = {
  hidden: {
    y: '-100vh',
  },
  visible: {
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 70,
    },
  },
}

export const Modal: FC<Props> = ({ isOpen, setIsOpen, children }: Props) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className='modal-backdrop'
          variants={backdropVariant}
          initial='hidden'
          animate='visible'
          exit='hidden'
        >
          <motion.div className='modal-container' variants={modalVariant}>
            {children}
            <motion.div
              whileHover={{ rotate: 45 }}
              className='close'
              onClick={() => setIsOpen(false)}
            >
              <div></div>
              <div></div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
