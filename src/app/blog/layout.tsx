'use client'
import { usePathname } from 'next/navigation'

import Sidebar from '@/components/Blog/Sidebar'
import { Container } from '@/components/Layout/Container'

import PageLayout from '../../app/pageLayout'

const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname()

  return (
    <PageLayout>
      <Container className='mx-auto grid grid-cols-12 md:space-x-4'>
        {pathname.split('/').length === 2 && <Sidebar />}
        <div className='col-span-12 p-2 md:col-span-9 md:p-0 xl:col-span-10'>{children}</div>
      </Container>
    </PageLayout>
  )
}

export default BlogLayout
