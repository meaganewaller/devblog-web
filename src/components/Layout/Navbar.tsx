'use client'

import Link from 'next/link'
import React, { useState } from 'react'

import { Modal } from '@/components/Modal'

import { DesktopNav, DesktopNavItem, Header, Logo, Nav, NavItem, NestedDesktopNav, SvgBox } from './Navbar.styles'
import ThemeToggle from './ThemeToggle'
// import { NewsletterForm } from '../NewsletterForm'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [showNewsletterModal, setShowNewsletterModal] = useState(false)
  const iconVariants = {
    opened: {
      rotate: 135,
    },
    closed: {
      rotate: 0,
    },
  }

  const menuVariants = {
    opened: {
      top: '32px',
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.05,
      },
    },
    closed: {
      top: '-100vh',
    },
  }

  const linkVariants = {
    opened: {
      opacity: 1,
      y: 50,
    },
    closed: {
      opacity: 0,
      y: 0,
    },
  }

  return (
    <>
      {/* <Modal isOpen={showNewsletterModal} setIsOpen={setShowNewsletterModal}> */}
      {/*   <div className='mx-auto flex w-full'> */}
      {/*     <NewsletterForm */}
      {/*       // eslint-disable-next-line */}
      {/*       title={["A newsletter you'll ", <em>actually</em>, ' open.']} */}
      {/*       subtitle='A monthly-ish newsletter with updates from the blog, my life, and things I find around the web.' */}
      {/*     /> */}
      {/*   </div> */}
      {/* </Modal> */}

      <Header>
        <Link href='/'>
          <Logo size='20' />
        </Link>
        <DesktopNav className='menubar' variants={menuVariants}>
          <DesktopNavItem className='align-middle'>
            <Link href='/meagan'>About</Link>
          </DesktopNavItem>
          <DesktopNavItem className='align-middle'>
            <Link href='/blog'>Blog</Link>
          </DesktopNavItem>
          <DesktopNavItem className='align-middle'>
            <Link href='/uses'>Workspace</Link>
          </DesktopNavItem>
          <DesktopNavItem className='align-middle'>
            <Link href='/now'>Now</Link>
          </DesktopNavItem>
          <DesktopNavItem className='align-middle'>
            <Link href='/chat'>Say Hi</Link>
          </DesktopNavItem>
          <DesktopNavItem className='align-middle'>
            <button className='px-2 rounded-lg text-primary-txt bg-goldenrod' onClick={() => setShowNewsletterModal(true)}>
              Join the Newsletter
            </button>
          </DesktopNavItem>
        </DesktopNav>
        <SvgBox
          variants={iconVariants}
          animate={isOpen ? 'opened' : 'closed'}
          whileHover={{ scale: 1.4 }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5C13 4.44772 12.5523 4 12 4Z'
              fill='#fff'
            />
          </svg>
        </SvgBox>
      </Header>

      <Nav className='z-[99]' initial={false} variants={menuVariants} animate={isOpen ? 'opened' : 'closed'}>
        <ul>
          <NavItem onClick={() => setIsOpen(!isOpen)} variants={linkVariants} whileHover={{ scale: 1.1 }}>
            <Link href='/'>Home</Link>
          </NavItem>
          <NavItem onClick={() => setIsOpen(!isOpen)} variants={linkVariants} whileHover={{ scale: 1.1 }}>
            <Link href='/meagan'>About</Link>
          </NavItem>
          <NavItem onClick={() => setIsOpen(!isOpen)} variants={linkVariants} whileHover={{ scale: 1.1 }}>
            <Link href='/blog'>Blog</Link>
          </NavItem>
          <NavItem onClick={() => setIsOpen(!isOpen)} variants={linkVariants} whileHover={{ scale: 1.1 }}>
            <Link href='/uses'>Workspace</Link>
          </NavItem>
          <NavItem onClick={() => setIsOpen(!isOpen)} variants={linkVariants} whileHover={{ scale: 1.1 }}>
            <Link href='/now'>Now</Link>
          </NavItem>
          <NavItem onClick={() => setIsOpen(!isOpen)} variants={linkVariants} whileHover={{ scale: 1.1 }}>
            <Link href='/chat'>Say Hi</Link>
          </NavItem>
          <NavItem onClick={() => setIsOpen(!isOpen)} variants={linkVariants} whileHover={{ scale: 1.1 }}>
            <button className='px-2 rounded-lg text-primary-txt bg-goldenrod' onClick={() => setShowNewsletterModal(true)}>
              Join the Newsletter
            </button>
          </NavItem>
        </ul>
      </Nav>
    </>
  )
  console.log('file: Navbar.tsx~line: 81~button', button)
  console.log('file: Navbar.tsx~line: 81~button', button)
}

export default Navbar
