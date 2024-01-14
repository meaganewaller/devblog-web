'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { BsChatSquareHeart } from 'react-icons/bs'
import { HiSparkles } from 'react-icons/hi'
import { MdWavingHand } from 'react-icons/md'
import { PiPencilFill } from 'react-icons/pi'

import { tw } from '@/utils/tw'

function useActivePath(): (path: string) => boolean {
  const pathname = usePathname()

  const checkActivePath = (path: string) => {
    return path === pathname
  }

  return checkActivePath
}

import { Nav, NavItem, SvgBox } from '@/components/Layout/Navbar.styles'
import NewsletterForm from '@/components/NewsletterForm'

import { Modal } from '../Modal'

import { NavigationItem } from '@/types'

const navigation: NavigationItem[] = [
  { href: '/welcome', icon: MdWavingHand, name: 'Welcome' },
  { href: '/blog', icon: PiPencilFill, name: 'Blog' },
  { href: '/now', icon: HiSparkles, name: 'Now' },
  { href: '/chat', icon: BsChatSquareHeart, name: 'Say Hi' },
]

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
      <header className='z-[100] flex items-center justify-between bg-transparent p-4' variants={menuVariants}>
        <div>
          <Link href='/'>
            <Image src='/static/images/rainbow.svg' alt='logo' className='h-8' width='80' height='80' />
          </Link>
        </div>
        <nav className='hidden space-x-4 sm:flex'>
          {navigation.map(({ href, icon: Icon, name }) => (
            <Link
              className={tw(
                'btn flex items-center',
                checkActivePath(href) &&
                  'border-purple bg-lilac shadow-lavender hover:border-blush hover:bg-light-peach hover:shadow-peachy-pink',
              )}
              key={name}
              href={href}
            >
              <Icon className='mr-2 inline-block align-middle' />
              <span>{name}</span>
            </Link>
          ))}
        </nav>
        <SvgBox
          variants={iconVariants}
          animate={isOpen ? 'opened' : 'closed'}
          whileHover={{ scale: 1.4 }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              className={isOpen ? 'fill-tropical-orange' : 'fill-deep-pink'}
              d='M12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5C13 4.44772 12.5523 4 12 4Z'
            />
          </svg>
        </SvgBox>
      </header>
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
            <Link href='/now'>Now</Link>
          </NavItem>
          <NavItem onClick={() => setIsOpen(!isOpen)} variants={linkVariants} whileHover={{ scale: 1.1 }}>
            <Link href='/chat'>Say Hi</Link>
          </NavItem>
          <NavItem onClick={() => setIsOpen(!isOpen)} variants={linkVariants} whileHover={{ scale: 1.1 }}>
            <button
              className='rounded-lg bg-goldenrod px-2 text-primary-txt'
              onClick={() => setShowNewsletterModal(true)}
            >
              Join the Newsletter
            </button>
          </NavItem>
        </ul>
      </Nav>
      <Modal isOpen={showNewsletterModal} setIsOpen={setShowNewsletterModal}>
        <div className='mx-auto flex w-full'>
          <NewsletterForm
            // eslint-disable-next-line
             title={["A newsletter you'll ", <em>actually</em>, ' open.']}
            subtitle='A monthly-ish newsletter with updates from the blog, my life, and things I find around the web.'
          />
        </div>
      </Modal>
    </>
  )
}

export default Navbar
