import { cx } from 'classix'
import type { ComponentProps, ElementType } from 'react'
import Balancer from 'react-wrap-balancer'
import tw from 'twin.macro'

import type { RainbowColor } from '@/types/gradient'

const StyledHeading = tw.h1`
  inline-block
  self-start
  [--text-shadow-color:var(--color-transparent)]
  [text-shadow:0.125rem_0.125rem_0_var(--text-shadow-color)]
  dark:[text-shadow:none]
  dark:bg-gradient-to-r
  dark:from-primary-txt
  dark:to-primary-txt
  dark:bg-clip-text
  dark:saturate-150
`

interface HeadingProps {
  $as?: ElementType
  balancerRatio?: number
  shadow?: RainbowColor
  from?: RainbowColor
  to?: RainbowColor
}

export const Heading = (
  props: ComponentProps<typeof StyledHeading> & HeadingProps,
) => {
  const {
    $as: asElement,
    children,
    balancerRatio,
    shadow,
    from,
    to,
    ...rest
  } = props
  return (
    <StyledHeading
      {...rest}
      $as={asElement}
      className={cx(
        rest.className,
        from ? `dark:from-gradient-${from}` : null,
        to ? `dark:to-gradient-${to}` : null,
      )}
      style={{
        ...rest.style,
        ...(shadow
          ? { '--text-shadow-color': `var(--color-shadow-${shadow})` }
          : {}),
      }}
    >
      <Balancer ratio={balancerRatio}>{children}</Balancer>
    </StyledHeading>
  )
}
