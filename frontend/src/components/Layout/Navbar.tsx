'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { HiSparkles } from 'react-icons/hi'

//
// import {
//   DesktopNav,
//   DesktopNavItem,
//   Header,
//   Logo,
//   Nav,
//   NavItem,
//   NestedDesktopNav,
//   SvgBox,
// } from './Navbar.styles'
//
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
    <div>
      <nav className='fixed h-[32px] w-full rounded-t-md bg-toolbar'>
        <div className='container mx-auto px-6 lg:px-8'>
          <div className='flex h-full items-center justify-between'>
            <div className='flex flex-grow items-center justify-between'>
              <div className='flex-shrink-0'>
                <h1 className='inline-block text-xl'>
                  <Link
                    className='inline-block h-full text-on-accent hover:text-gradient-yellow'
                    href='/'
                  >
                    <HiSparkles className='h-[32px]' size={25} />
                  </Link>
                </h1>
              </div>
              <div className='hidden lg:block'>
                <div className='flex items-center'>
                  <Link
                    href='#'
                    className='flex flex-row items-center rounded-md px-3 py-2 text-sm font-medium text-on-accent focus:text-gradient-yellow focus:outline-none'
                  >
                    <svg
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5C13 4.44772 12.5523 4 12 4Z'
                        fill='#fff'
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

//   return (
//     <>
//       <Modal isOpen={showNewsletterModal} setIsOpen={setShowNewsletterModal}>
//         <div className='mx-auto flex w-full'>
//           <NewsletterForm
//             title={["A newsletter you'll ", <em>actually</em>, ' open.']}
//             subtitle='A monthly-ish newsletter with updates from the blog, my life, and things I find around the web.'
//           />
//         </div>
//       </Modal>
//
//       <Header>
//         <Link href='/'>
//           <Logo size='20' />
//         </Link>
//         <DesktopNav className='menubar' variants={menuVariants}>
//           <DesktopNavItem className='align-middle'>
//             Site
//             <NestedDesktopNav>
//               <DesktopNavItem>
//                 <Link href='/start'>Start here</Link>
//               </DesktopNavItem>
//               <DesktopNavItem>
//                 <button
//                   className='m-0 p-0'
//                   onClick={() => setShowNewsletterModal(true)}
//                 >
//                   Join the Newsletter
//                 </button>
//               </DesktopNavItem>
//             </NestedDesktopNav>
//           </DesktopNavItem>
//           <DesktopNavItem className='align-middle'>
//             Meagan
//             <NestedDesktopNav>
//               <DesktopNavItem>
//                 <Link href='/meagan'>About</Link>
//               </DesktopNavItem>
//               <DesktopNavItem>
//                 <Link href='/chat'>Say Hi</Link>
//               </DesktopNavItem>
//             </NestedDesktopNav>
//           </DesktopNavItem>
//           <DesktopNavItem className='align-middle'>
//             <Link href='/blog'>Blog</Link>
//           </DesktopNavItem>
//           <DesktopNavItem className='align-middle'>
//             <Link href='/projects'>Projects</Link>
//           </DesktopNavItem>
//           <DesktopNavItem className='align-middle'>
//             <Link href='/workspace'>Workspace</Link>
//           </DesktopNavItem>
//           <DesktopNavItem className='align-middle'>
//             <Link href='/guestbook'>Guestbook</Link>
//           </DesktopNavItem>
//         </DesktopNav>
//         {/* <ThemeToggle /> */}
//         <SvgBox
//           variants={iconVariants}
//           animate={isOpen ? 'opened' : 'closed'}
//           whileHover={{ scale: 1.4 }}
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           <svg
//             width='24'
//             height='24'
//             viewBox='0 0 24 24'
//             fill='none'
//             xmlns='http://www.w3.org/2000/svg'
//           >
//             <path
//               d='M12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5C13 4.44772 12.5523 4 12 4Z'
//               fill='#fff'
//             />
//           </svg>
//         </SvgBox>
//       </Header>
//
//       <Nav
//         initial={false}
//         variants={menuVariants}
//         animate={isOpen ? 'opened' : 'closed'}
//       >
//         <ul>
//           <NavItem
//             onClick={() => setIsOpen(!isOpen)}
//             variants={linkVariants}
//             whileHover={{ scale: 1.1 }}
//           >
//             <Link href='/'>Home</Link>
//           </NavItem>
//           <NavItem
//             onClick={() => setIsOpen(!isOpen)}
//             variants={linkVariants}
//             whileHover={{ scale: 1.1 }}
//           >
//             <Link href='/start'>Start here</Link>
//           </NavItem>
//           <NavItem
//             onClick={() => setIsOpen(!isOpen)}
//             variants={linkVariants}
//             whileHover={{ scale: 1.1 }}
//           >
//             <Link href='/newsletter'>Join the Newsletter</Link>
//           </NavItem>
//           <NavItem
//             onClick={() => setIsOpen(!isOpen)}
//             variants={linkVariants}
//             whileHover={{ scale: 1.1 }}
//           >
//             <Link href='/meagan'>Meagan</Link>
//           </NavItem>
//           <NavItem
//             onClick={() => setIsOpen(!isOpen)}
//             variants={linkVariants}
//             whileHover={{ scale: 1.1 }}
//           >
//             <Link href='/blog'>Blog</Link>
//           </NavItem>
//           <NavItem
//             onClick={() => setIsOpen(!isOpen)}
//             variants={linkVariants}
//             whileHover={{ scale: 1.1 }}
//           >
//             <Link href='/projects'>Projects</Link>
//           </NavItem>
//           <NavItem
//             onClick={() => setIsOpen(!isOpen)}
//             variants={linkVariants}
//             whileHover={{ scale: 1.1 }}
//           >
//             <Link href='/workspace'>Workspace</Link>
//           </NavItem>
//           <NavItem
//             onClick={() => setIsOpen(!isOpen)}
//             variants={linkVariants}
//             whileHover={{ scale: 1.1 }}
//           >
//             <Link href='/guestbook'>Guestbook</Link>
//           </NavItem>
//           <NavItem
//             onClick={() => setIsOpen(!isOpen)}
//             variants={linkVariants}
//             whileHover={{ scale: 1.1 }}
//           >
//             <Link href='/chat'>Say Hi</Link>
//           </NavItem>
//         </ul>
//       </Nav>
//     </>
//   )
// }
//
export default Navbar
