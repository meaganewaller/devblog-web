import { motion } from 'framer-motion'
import { HiSparkles } from 'react-icons/hi'
import tw, { styled } from 'twin.macro'
import Link from 'next/link'

const StyledHeader = styled.header`
  box-shadow:
    inset 1px 1px 0 var(--index-shadow-light),
    inset -1px -1px 0 var(--index-shadow-dark);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  backdrop-filter: blur(4px);
`

export const Header = tw(StyledHeader)`
  fixed z-[3] bg-toolbar flex border-b border-solid border-b-inverse rounded-t-md text-on-accent justify-between lg:justify-start px-6 h-[32px] w-full items-center
`

export const Nav = tw(motion.nav)`
  h-[100vh] overflow-y-auto w-[100vw] bg-accent z-[10] flex items-center justify-evenly fixed top-0 flex-col
`

export const NavItem = tw(motion.li)`
  text-on-accent mb-[1.25em] text-xl font-mono
`

const StyledDesktopNav = styled(motion.ul)`
  filter: drop-shadow(1px 1px 0 rgba(0, 0, 0, 0.35));
`

export const DesktopNav = tw(StyledDesktopNav)`
  hidden lg:flex flex-row z-10 items-center h-full overflow-visible
`
export const NestedDesktopNav = tw(DesktopNav)`
  bg-toolbar bg-opacity-95 flex-col left-0 absolute text-on-accent z-10 rounded-b-[.25em] py-[0.25em] whitespace-nowrap -top-[1000em]
`

export const DesktopNavItem = tw(motion.li)`
  relative z-10 overflow-visible font-mono
`

export const LogoContainer = tw(Link)`
  inline-block h-full
`

// text-on-accent text-xl hover:text-gradient-yellow h-[32px]
export const Logo = tw(HiSparkles)`
  h-[32px] text-on-accent hover:text-gradient-yellow text-xl
`

export const SvgBox = tw(motion.div)`
  flex items-center justify-center h-full lg:hidden
`
