'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { Header, Nav, NavItem, DesktopNav, NestedDesktopNav, DesktopNavItem, Logo, SvgBox } from './Navbar'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const iconVariants = {
    opened: {
      rotate: 135,
    },
    closed: {
      rotate: 0,
    },
  };

  const menuVariants = {
    opened: {
      top: 0,
      transition: {
        when : "beforeChildren",
        staggerChildren: 0.05,
      },
    },
    closed: {
      top: "-100vh",
    },
  };

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
      <Header>
        <Link href="/">
          <Logo size="20" />
        </Link>
        <DesktopNav variants={menuVariants}>
          <DesktopNavItem className="align-middle"><Link href="/">Home</Link></DesktopNavItem>
          <DesktopNavItem className="align-middle">
          Site
          <NestedDesktopNav>
          <DesktopNavItem><Link href="/start">Start here</Link></DesktopNavItem>
          <DesktopNavItem><Link href="/newsletter">Join the Newsletter</Link></DesktopNavItem>
          <DesktopNavItem><Link href="/colophon">Colophon</Link></DesktopNavItem>
          </NestedDesktopNav>
          </DesktopNavItem>
          <DesktopNavItem className="align-middle">Meagan
          <NestedDesktopNav>
          <DesktopNavItem><Link href="/meagan">About</Link></DesktopNavItem>
          <DesktopNavItem><Link href="/chat">Say Hi</Link></DesktopNavItem>
          </NestedDesktopNav>
          </DesktopNavItem>
          <DesktopNavItem className="align-middle"><Link href="/blog">Blog</Link></DesktopNavItem>
          <DesktopNavItem className="align-middle"><Link href="/projects">Projects</Link></DesktopNavItem>
          <DesktopNavItem className="align-middle"><Link href="/workspace">Workspace</Link></DesktopNavItem>
        </DesktopNav>
        <SvgBox
          variants={iconVariants}
          animate={isOpen ? "opened" : "closed"}
          whileHover={{ scale: 1.4 }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5C13 4.44772 12.5523 4 12 4Z"
              fill="#fff"
            />
          </svg>
        </SvgBox>
      </Header>

      <Nav
        initial={false}
        variants={menuVariants}
        animate={isOpen ? "opened" : "closed"}
      >
        <ul>
        <NavItem onClick={() => setIsOpen(!isOpen)} variants={linkVariants} whileHover={{ scale: 1.1 }}><Link href="/">Home</Link></NavItem>
          <NavItem onClick={() => setIsOpen(!isOpen)} variants={linkVariants} whileHover={{ scale: 1.1 }}><Link href="/start">Start here</Link></NavItem>
          <NavItem onClick={() => setIsOpen(!isOpen)} variants={linkVariants} whileHover={{ scale: 1.1 }}><Link href="/newsletter">Join the Newsletter</Link></NavItem>
          <NavItem onClick={() => setIsOpen(!isOpen)} variants={linkVariants} whileHover={{ scale: 1.1 }}><Link href="/meagan">Meagan</Link></NavItem>
          <NavItem onClick={() => setIsOpen(!isOpen)} variants={linkVariants} whileHover={{ scale: 1.1 }}><Link href="/blog">Blog</Link></NavItem>
          <NavItem onClick={() => setIsOpen(!isOpen)} variants={linkVariants} whileHover={{ scale: 1.1 }}><Link href="/projects">Projects</Link></NavItem>
          <NavItem onClick={() => setIsOpen(!isOpen)} variants={linkVariants} whileHover={{ scale: 1.1 }}><Link href="/workspace">Workspace</Link></NavItem>
          <NavItem onClick={() => setIsOpen(!isOpen)} variants={linkVariants} whileHover={{ scale: 1.1 }}><Link href="/chat">Say Hi</Link></NavItem>
          <NavItem onClick={() => setIsOpen(!isOpen)} variants={linkVariants} whileHover={{ scale: 1.1 }}><Link href="/colophon">Colophon</Link></NavItem>
        </ul>
      </Nav>
    </>
  )
}

export default Navbar;



  // interface NavContainerProps {
  //   $active: boolean;
  // }
  //
  // const StyledNavbarContainer = styled.nav`
  //   box-shadow: inset 1px 1px 0 var(--index-shadow-light),
  //     inset -1px -1px 0 var(--index-shadow-dark);
  //   border-top-left-radius: 8px;
  //   border-top-right-radius: 8px;
  //   backdrop-filter: blur(4px);
  // `;
  //
  // const NavbarContainer = tw(StyledNavbarContainer)`
  //   w-full bg-toolbar flex border-b border-b-solid border-b-primary-txt justify-between rounded-t-[10px] items-center px-2.5 py-0 tablet-sm:px-10 tablet-sm:py-0 h-[32px]
  // `;
  //
  // const LogoNav = tw.div`
  //   flex items-center justify-evenly
  // `;
  //
  // const LogoContainer = tw.div`
  //   flex items-center justify-center
  // `;
  //
  // const Logo = tw(HiSparkles)`
  //   w-[25px] h-[25px] text-on-accent cursor-pointer hover:text-gradient-yellow
  // `;
  //
  // const NavContainer = tw.ul<NavContainerProps>`
  //   flex w-full h-[350px] absolute top-[80px] -left-[100%] opacity-0 transition-all duration-[0.5s] ease-[ease] flex-col gap-[0px] tablet-sm:grid tablet-sm:grid-cols-[repeat(5,auto)] tablet-sm:gap-[50px] list-none tablet-sm:pl-[25px]
  //   ${(p) => (p.$active ? "opacity-100 content-center pl-0 left-0 bg-[#9899d1] transition-all duration-[0.5s] ease-[ease]" : "")}
  // `;
  //
  // const NavOption = tw.li`
  //   hover:text-[#ffffff] transition duration-300 ease-in-out cursor-pointer
  // `;
  //
  // const MobileMenuContainer = tw.div`
  //   block tablet-sm:hidden cursor-pointer hover:text-gradient-yellow text-on-accent
  // `;
  //
  // const Navbar = () => {
  //   const [click, setClick] = useState(false);
  //   const handleClick = () => setClick(!click);
  //   const closeMobileMenu = () => setClick(false);
  //   return (
  //     <NavbarContainer>
  //       <LogoNav>
  //         <LogoContainer className="logo-container">
  //           <Link href="/">
  //             <Logo size="20" aria-label="Home page" />
  //           </Link>
  //         </LogoContainer>
  //         <NavContainer $active={click}>
  //           <NavOption className="option" onClick={closeMobileMenu}>
  //             <Link href="/site">Site</Link>
  //           </NavOption>
  //           <NavOption className="option" onClick={closeMobileMenu}>
  //             <Link href="/meagan">Meagan</Link>
  //           </NavOption>
  //           <NavOption className="option" onClick={closeMobileMenu}>
  //             <Link href="/blog">Blog</Link>
  //           </NavOption>
  //           <NavOption className="option" onClick={closeMobileMenu}>
  //             <Link href="/projects">Projects</Link>
  //           </NavOption>
  //           <NavOption className="option" onClick={closeMobileMenu}>
  //             <Link href="/workspace">Workspace</Link>
  //           </NavOption>
  //         </NavContainer>
  //         <MobileMenuContainer className="mobile-menu" onClick={handleClick}>
  //           {click ? (
  //           <RiCloseLine className="menu-icon" size="20" />
  //           ) : (
  //           <RiMenuLine className="menu-icon" size="20" />
  //           )}
  //         </MobileMenuContainer>
  //       </LogoNav>
  //     </NavbarContainer>
  //   )
  // }

