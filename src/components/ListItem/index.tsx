import { HTMLAttributes } from 'react'

import { Container } from '@/components/ListItem/styles'

type ListItemProps = HTMLAttributes<HTMLLIElement> & {
  children: React.ReactNode
}
export const ListItem = ({ children, ...rest }: ListItemProps) => (
  <Container {...rest}>{children}</Container>
)
