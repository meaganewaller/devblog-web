'use client';

import { usePathname } from 'next/navigation';
import { useState, useCallback, useEffect } from 'react';

import { LogoAnimoji } from '@/components/core/logo-animoji';
import { mdiMenu, mdiPlus } from '@/components/icons';
import { useHasMounted } from '@/hooks/use-has-mounted';

import { ThemeToggle, MobileMenuToggle, MobileMenuIcon } from './buttons';
import {
  HomeLink,
  HomeLinkSpan,
  ToolbarLinksContainer,
  ToolbarNavLinks,
} from './nav-links';
import { Header, Nav } from './toolbar.styles';

const scrollThreshold = 40; //px
export const Toolbar = () => {
  const pathname = usePathname();
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

  return (
    <Header data-expanded={isExpanded} id={'header'}>
      <Nav $elevated={elevated}>
        <HomeLink href={'/'} title={'Home page'} className={'group/animoji'}>
          <LogoAnimoji />
          <HomeLinkSpan>Jahir Fiquitiva</HomeLinkSpan>
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
