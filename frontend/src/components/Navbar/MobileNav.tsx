'use client'
import React, { useEffect } from 'react'
import tw from 'twin.macro'

import { useMedia } from '@/hooks/useMedia'
import { useScrollFreeze } from '@/hooks/useScrollFreeze'

import { useMenuContext } from '@/providers/menu-provider'

import NavLinks from './NavLinks'

const MobileNavbar = () => {
  const { isMenuOpen, closeMenu } = useMenuContext()
  const { isMobile } = useMedia()
  useScrollFreeze(isMenuOpen)

  useEffect(() => {
    if (!isMobile && closeMenu) {
      closeMenu()
    }
  }, [isMobile, closeMenu])

  return (
    <>
      {isMenuOpen && (
        <MobileNav>
          <NavLinks />
        </MobileNav>
      )}
    </>
  )
}

export default MobileNavbar

const MobileNav = tw.nav`
  fixed top-0 left-0 h-full w-full bg-[rgb(251,174,210)] bg-opacity-90 z-50 flex content-center items-center
`
