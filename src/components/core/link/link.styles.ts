import NextLink from 'next/link'
import tw from 'twin.macro'

export const StyledLink = tw(NextLink)`
  inline-block
  font-medium
  text-accent
  self-start
  transition-colors
  hocus:text-accent-dark
  hocus:underline
  hocus:underline-offset-2
  hocus:decoration-wavy
`
