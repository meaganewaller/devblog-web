import { cx } from 'classix';
import type { Route } from 'next';

import type { GradientClass } from '@/types/gradient';

import { ToolbarLink, PageLinkSpan } from './link.styles';
import { PagesLinksContainer, LinkItem, ChildToolbarLinksContainer } from './links-container.styles';

interface ToolbarLinkItem {
  title: string;
  href: string;
  className?: GradientClass;
  children?: ToolbarLinkItem[];
}

const toolbarLinksList: Array<ToolbarLinkItem> = [
  {
    title: 'Site',
    href: '#',
    className: 'from-gradient-green to-gradient-purple',
    children: [
      { title: 'Join the Newsletter', href: '#newsletter' },
      { title: 'Colophon', href: '/colophon' },
    ]
  },
  {
    title: 'Meagan',
    href: '#',
    className: 'from-gradient-blue to-gradient-green',
    children: [
    { title: 'About Me', href: '/about' },
    { title: "Let's Chat", href: '/contact' },
    ]
  },
  {
    title: 'Blog',
    href: '/blog',
    className: 'from-gradient-yellow to-gradient-orange',
  },
  {
    title: 'Projects',
    href: '/projects',
    className: 'from-gradient-red to-gradient-purple',
  },
  {
    title: 'Workspace',
    href: '/workspace',
    className: 'from-gradient-brand to-gradient-blue',
  },
  {
    title: 'Guestbook',
    href: '/guestbook',
    className: 'from-gradient-brand to-gradient-blue',
  },

];

export const ToolbarNavLinks = (props: { pathname?: string }) => {
  const { pathname } = props;
  return (
    <PagesLinksContainer>
      {toolbarLinksList.map((link: ToolbarLinkItem, index: number) => {
        return (
          <LinkItem key={`page-link-${index}`}>
            <ToolbarLink
              title={`${link.title} page`}
              href={link.href as Route}
              aria-current={
                pathname?.startsWith(link.href) ? 'page' : undefined
              }
              className={'group/link'}
            >
              <PageLinkSpan
                className={cx(
                  (link.className || '')
                    .split(' ')
                    .map(
                      (it) =>
                        `group-hocus/link:${it} [[aria-current="page"]_&]:${it}`,
                    )
                    .join(' ') as string,
                )}
              >
                {link.title}
              </PageLinkSpan>
            </ToolbarLink>
            {link.children && (
              <ChildToolbarLinksContainer>
                {link.children.map((child, childIndex: number) => (
                  <LinkItem key={`child-${childIndex}`}>
                    <ToolbarLink title={`${child.title} page`} href={child.href as Route} aria-current={pathname?.startsWith(child.href) ? 'page' : undefined } className={'group/link'}>
                    <PageLinkSpan
                    className={cx(
                        (child.className || '')
                        .split(' ')
                        .map(
                          (it) =>
                          `group-hocus/link:${it} [[aria-current="page"]_&]:${it}`,
                          )
                        .join(' ') as string,
                        )}
                    >
                    {child.title}
                    </PageLinkSpan>
                    </ToolbarLink>
                  </LinkItem>
                ))}
              </ChildToolbarLinksContainer>
            )}
          </LinkItem>
        );
      })}
    </PagesLinksContainer>
  );
};
