import { HTMLAttributes } from 'react'

import { Container } from '@/components/List/styles'

type ListProps = HTMLAttributes<HTMLUListElement> & {
  children: React.ReactNode
}

export const List = ({ children, ...rest }: ListProps) => {
  return (
    <>
      <Container {...rest}>{children}</Container>
    </>
  )
}
