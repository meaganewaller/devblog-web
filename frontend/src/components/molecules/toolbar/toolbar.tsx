'use client';
import {
  ContainerMobile,
  Content,
  Nav,
  NavItem,
  NavItemLink,
  NavMobile,
  NavMobileItem,
  NavMobileItemLink,
} from '@/components/molecules/toolbar/toolbar.styles';

import { NavProps } from "@/types/header";
import Link from "next/link";
import { ToggleButton } from "@/components/molecules/toolbar/buttons/toggle";
import { useToolbar } from "@/hooks/useToolbar";
import { List } from "@/components/List";
import { ListItem } from "@/components/ListItem";

export const Toolbar = ({ items }: NavProps) => {
  const {isOpenMenu, handleToggleMenu } = useToolbar();
  return (
    <>
    <Nav>
      <List>
        {
          items.map((item, index) => {
            return (
              <ListItem key={index}>
                <Link href={item.link}>{item.title}</Link>
              </ListItem>
            )
          })
        }
      </List>
    </Nav>
    <Content>
      <ToggleButton isOpenMenu={isOpenMenu} handleToggleMenu={handleToggleMenu} />
    </Content>
    {
                isOpenMenu && (
                    <ContainerMobile>
                        <NavMobile>
                            <NavMobileItem>
                                {
                                    items.map((item, index) => {
                                        return (
                                            <NavMobileItemLink key={index}>
                                                <Link href={item.link}>{item.title}</Link>
                                            </NavMobileItemLink>
                                        )
                                    })
                                }
                            </NavMobileItem>
                        </NavMobile>
                    </ContainerMobile>
                )
            }
    </>
  )
}


// import { usePathname } from 'next/navigation';
// import { useState, useCallback, useRef, useEffect } from 'react';
// import { useMouse } from 'react-use';
// import dynamic from 'next/dynamic';

// import { HiSparkles } from 'react-icons/hi';
// import { mdiMenu, mdiPlus } from '@/components/icons';
// import { useHasMounted } from '@/hooks/use-has-mounted';
// import { useWindowSize } from '@/hooks/use-window-size';

// import { ThemeToggle, MobileMenuToggle, MobileMenuIcon } from './buttons';
// import {
//   HomeLink,
//   ToolbarLinksContainer,
//   ToolbarNavLinks,
// } from './nav-links';
// import { Header, Nav } from './toolbar.styles';

// const Confetti = dynamic(() => import('react-confetti'));

// const scrollThreshold = 40;
// export function Toolbar() {
//   const pathname = usePathname() || "/";
//   const navRef = useRef(null);
//   const { width, height } = useWindowSize();
//   const { docX, docY } = useMouse(navRef);
//   const [confetti, setConfetti] = useState(false);

//   const [isExpanded, setExpanded] = useState(false);
//   const [elevated, setElevated] = useState(false);

//   const hasMounted = useHasMounted();

//   const checkScrolledDistance = useCallback(() => {
//     if (!hasMounted) return;
//     const scrolledDistance = window.scrollY || window.pageYOffset;
//     try {
//       setElevated(scrolledDistance >= scrollThreshold);
//     } catch (e) {}
//   }, [hasMounted]);

//   useEffect(() => {
//     if (!hasMounted) return;
//     window.addEventListener('scroll', checkScrolledDistance);
//     checkScrolledDistance();
//     // eslint-disable-next-line consistent-return
//     return () => {
//       window.removeEventListener('scroll', checkScrolledDistance);
//     };
//   }, [hasMounted, checkScrolledDistance]);

//   useEffect(() => {
//     if (!hasMounted) return;
//     if (isExpanded) document.body.classList.add('overflow-hidden');
//     else document.body.classList.remove('overflow-hidden');
//   }, [isExpanded, hasMounted]);

//   useEffect(() => {
//     setExpanded(false);
//   }, [pathname]);

//   function triggerConfetti() {
//     if (window.scrollY <= 90 && pathname === "/") {
//       setConfetti(true);
//       setTimeout(() => setConfetti(false), 100);
//     }
//   }

//   return (
//     <Header data-expanded={isExpanded} id={'header'}>
//       <Nav $elevated={elevated}>
//         <HomeLink
//           href={'/'}
//           title={'Home page'}
//           ref={navRef}
//           onClick={triggerConfetti}
//         >
//           <HiSparkles size="20" className='h-[32px] mr-[8px]' />
//           {pathname === "/" && (
//           <Confetti
//             style={{ zIndex: "100", position: "fixed" }}
//             numberOfPieces={confetti ? 200 : 0}
//             initialVelocityY={-50}
//             initialVelocityX={-150}
//             ref={navRef}
//             gravity={0.05}
//             width={width}
//             height={height}
//             confettiSource={{
//               x: docX,
//               y: docY,
//               w: 0,
//               h: 0,
//             }}
//             recycle={confetti}
//             tweenDuration={10}
//           />
//       )}
//         </HomeLink>
//         <ToolbarNavLinks pathname={pathname} />
//         <ToolbarLinksContainer className={'self-start tablet-md:self-center'}>
//           <li className={'self-start'}>
//             <ThemeToggle />
//           </li>
//           <li className={'self-start'}>
//             <MobileMenuToggle
//               title={`${isExpanded ? 'Collapse' : 'Expand'} menu`}
//               aria-expanded={isExpanded}
//               aria-controls={'header'}
//               onClick={() => {
//                 setExpanded(!isExpanded);
//               }}
//             >
//               <MobileMenuIcon path={isExpanded ? mdiPlus : mdiMenu} size={1} />
//             </MobileMenuToggle>
//           </li>
//         </ToolbarLinksContainer>
//       </Nav>

//     </Header>
//   );
// };
