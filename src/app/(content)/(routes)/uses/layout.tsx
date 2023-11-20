'use client'

import { Container } from '@/components/Layout/Container'
import { usePathname } from 'next/navigation'

import PageLayout from '../../../../app/pageLayout'

const UsesLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname()

  return (
    <PageLayout>
      <Container>
        <div className='col-span-12 p-2 md:p-0'>
          {children}
        </div>
      </Container>
    </PageLayout>
  )
}

export default UsesLayout
