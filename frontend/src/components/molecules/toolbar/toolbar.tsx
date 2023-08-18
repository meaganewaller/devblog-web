'use client';

import { usePathname } from 'next/navigation';
import { useState, useCallback, useRef, useEffect } from 'react';
import { useMouse } from 'react-use';
import dynamic from 'next/dynamic';

import { HiSparkles } from 'react-icons/hi';
import { mdiMenu, mdiPlus } from '@/components/icons';
import { useHasMounted } from '@/hooks/use-has-mounted';
import { useWindowSize } from '@/hooks/use-window-size';

import { ThemeToggle, MobileMenuToggle, MobileMenuIcon } from './buttons';
import {
  HomeLink,
  ToolbarLinksContainer,
  ToolbarNavLinks,
} from './nav-links';
import { Header, Nav } from './toolbar.styles';

const Confetti = dynamic(() => import('react-confetti'));

const scrollThreshold = 40;
export function Toolbar() {
  const pathname = usePathname() || "/";
  const navRef = useRef(null);
  const { width, height } = useWindowSize();
  const { docX, docY } = useMouse(navRef);
  const [confetti, setConfetti] = useState(false);

  const [isExpanded, setExpanded] = useState(false);
  const [elevated, setElevated] = useState(false);

  const hasMounted = useHasMounted();

  const checkScrolledDistance = useCallback(() => {
    if (!hasMounted) return;
    const scrolledDistance = window.scrollY || window.pageYOffset;
    try {
      setElevated(scrolledDistance >= scrollThreshold);
    } catch (e) {}
  }, [hasMounted]);

  useEffect(() => {
    if (!hasMounted) return;
    window.addEventListener('scroll', checkScrolledDistance);
    checkScrolledDistance();
    // eslint-disable-next-line consistent-return
    return () => {
      window.removeEventListener('scroll', checkScrolledDistance);
    };
  }, [hasMounted, checkScrolledDistance]);

  useEffect(() => {
    if (!hasMounted) return;
    if (isExpanded) document.body.classList.add('overflow-hidden');
    else document.body.classList.remove('overflow-hidden');
  }, [isExpanded, hasMounted]);

  useEffect(() => {
    setExpanded(false);
  }, [pathname]);

  function triggerConfetti() {
    if (window.scrollY <= 90 && pathname === "/") {
      setConfetti(true);
      setTimeout(() => setConfetti(false), 100);
    }
  }

  return (
    <Header data-expanded={isExpanded} id={'header'}>
      <Nav $elevated={elevated}>
        <HomeLink
          href={'/'}
          title={'Home page'}
          ref={navRef}
          onClick={triggerConfetti}
        >
          <HiSparkles size="20" className='h-[32px] mr-[8px]' />
          {pathname === "/" && (
          <Confetti
            style={{ zIndex: "100", position: "fixed" }}
            numberOfPieces={confetti ? 200 : 0}
            initialVelocityY={-50}
            initialVelocityX={-150}
            ref={navRef}
            gravity={0.05}
            width={width}
            height={height}
            confettiSource={{
              x: docX,
              y: docY,
              w: 0,
              h: 0,
            }}
            recycle={confetti}
            tweenDuration={10}
          />
      )}
        </HomeLink>
        <ToolbarNavLinks pathname={pathname} />
        <ToolbarLinksContainer className={'self-start tablet-md:self-center'}>
          <li className={'self-start'}>
            <ThemeToggle />
          </li>
          <li className={'self-start'}>
            <MobileMenuToggle
              title={`${isExpanded ? 'Collapse' : 'Expand'} menu`}
              aria-expanded={isExpanded}
              aria-controls={'header'}
              onClick={() => {
                setExpanded(!isExpanded);
              }}
            >
              <MobileMenuIcon path={isExpanded ? mdiPlus : mdiMenu} size={1} />
            </MobileMenuToggle>
          </li>
        </ToolbarLinksContainer>
      </Nav>

    </Header>
  );
};
