import { motion } from 'framer-motion'
import tw from 'twin.macro'

const DropdownMenu = tw(motion.ul)`
  z-10 absolute hidden bg-[#ffffff] border rounded-lg py-2 px-4 shadow-md
`

interface DropdownMenuProps {
  children: React.ReactNode
}

const DropdownMenuComponent: React.FC<DropdownMenuProps> = ({ children }) => {
  return (
    <DropdownMenu
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </DropdownMenu>
  )
}

export default DropdownMenuComponent
