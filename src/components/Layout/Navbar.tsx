'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode, useState } from 'react'

import Logo from '@/components/ui/Logo'

import { tw } from '@/utils/tw'

function useActivePath(): (path: string) => boolean {
  const pathname = usePathname()

  const checkActivePath = (path: string) => {
    return path === pathname
  }

  return checkActivePath
}

import { Nav, NavItem, NavLink, SvgBox } from '@/components/Layout/Navbar.styles'
import NewsletterForm from '@/components/NewsletterForm'

import { Modal } from '../Modal'

import { NavigationItem } from '@/types'

const navigation: NavigationItem[] = [
  { href: '/meagan', name: 'About' },
  { href: '/blog', name: 'Blog' },
  { href: '/now', name: 'Now' },
  { href: '/chat', name: 'Say Hi' },
]

function Navbar() {
  const newsletterTitle = ["A newsletter you'll ", <em key='actually-italic'>actually</em>, ' open.']
  const newsletterSubtitle = [
    'A monthly-ish newsletter with updates from the blog, my life, and things I find around the web.',
  ]

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

  const checkActivePath = useActivePath()

  const menuVariants = {
    opened: {
      top: '0px',
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.05,
      },
      zIndex: -10,
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
      <motion.header
        className='z-[100] flex items-center justify-between bg-transparent p-4 pb-0'
        variants={menuVariants}
      >
        <div>
          <Logo />
        </div>
        <nav className='hidden space-x-4 sm:flex sm:space-x-2'>
          {navigation.map(({ href, name }) => (
            <Link
              className={tw(
                'btn flex items-center text-center text-espresso hover:text-espresso hover:no-underline',
                checkActivePath(href) &&
                  'border-purple bg-lilac shadow-lavender hover:border-blush hover:bg-light-peach hover:shadow-peachy-pink',
              )}
              key={name}
              href={href}
            >
              <span>{name}</span>
            </Link>
          ))}
          <Link
            onClick={() => setShowNewsletterModal(true)}
            className='btn flex items-center text-center text-espresso hover:text-espresso hover:no-underline'
            href='#'
          >
            <span>Join the Newsletter</span>
          </Link>
        </nav>
        <SvgBox
          variants={iconVariants}
          animate={isOpen ? 'opened' : 'closed'}
          whileHover={{ scale: 1.4 }}
          onClick={() => setIsOpen(!isOpen)}
          className='cursor-pointer'
        >
          <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              className={isOpen ? 'fill-deep-sky-blue' : 'fill-deep-pink'}
              d='M12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5C13 4.44772 12.5523 4 12 4Z'
            />
          </svg>
        </SvgBox>
      </motion.header>
      <Nav className='z-[99]' initial={false} variants={menuVariants} animate={isOpen ? 'opened' : 'closed'}>
        <ul>
          <NavItem onClick={() => setIsOpen(!isOpen)} variants={linkVariants} whileHover={{ scale: 1.1 }}>
            <NavLink href='/'>Home</NavLink>
          </NavItem>
          <NavItem onClick={() => setIsOpen(!isOpen)} variants={linkVariants} whileHover={{ scale: 1.1 }}>
            <NavLink href='/meagan'>About</NavLink>
          </NavItem>
          <NavItem onClick={() => setIsOpen(!isOpen)} variants={linkVariants} whileHover={{ scale: 1.1 }}>
            <NavLink href='/blog'>Blog</NavLink>
          </NavItem>
          <NavItem onClick={() => setIsOpen(!isOpen)} variants={linkVariants} whileHover={{ scale: 1.1 }}>
            <NavLink href='/now'>Now</NavLink>
          </NavItem>
          <NavItem onClick={() => setIsOpen(!isOpen)} variants={linkVariants} whileHover={{ scale: 1.1 }}>
            <NavLink href='/chat'>Say Hi</NavLink>
          </NavItem>
          <NavItem onClick={() => setIsOpen(!isOpen)} variants={linkVariants} whileHover={{ scale: 1.1 }}>
            <button
              className='rounded-lg bg-deep-sky-blue px-2 py-3 text-vanilla hover:bg-purple'
              onClick={() => setShowNewsletterModal(true)}
            >
              Join the Newsletter
            </button>
          </NavItem>
        </ul>
      </Nav>
      <Modal isOpen={showNewsletterModal} setIsOpen={setShowNewsletterModal}>
        <div className='mx-auto flex w-full'>
          <NewsletterForm title={newsletterTitle as ReactNode} subtitle={newsletterSubtitle as ReactNode} />
        </div>
      </Modal>
    </>
  )
}

export default Navbar
