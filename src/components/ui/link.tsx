import type { LinkProps as NextLinkProps } from 'next/link'
import NextLink from 'next/link'
import { forwardRef } from 'react'

import { tw } from '@/utils/tw'

import { ExternalLink } from '../icons'

type LinkProps = {
  href: string
  children: React.ReactNode
  showExternalLinkIcon?: boolean
} & React.ComponentPropsWithoutRef<'a'> &
  NextLinkProps

const Link = forwardRef<any, LinkProps>(
  (
    { href, children, className, showExternalLinkIcon = true, ...rest },
    ref,
  ) => {
    const isExternal =
      href && (href.startsWith('https') || href.startsWith('http'))

    return (
      <NextLink
        href={href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener' : undefined}
        ref={ref}
        className={tw(
          'transition-all duration-200',
          showExternalLinkIcon && isExternal ? 'inline-flex items-center' : '',
          className,
        )}
        {...rest}
      >
        {children}
        {showExternalLinkIcon && isExternal && (
          <ExternalLink className={tw('w-3 h-3 inline-block ml-0.5')} />
        )}
      </NextLink>
    )
  },
)

export default Link
