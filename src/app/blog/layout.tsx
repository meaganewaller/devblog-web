import PostSidebar from '@/components/Blog/Sidebar'
import { Container } from '@/components/Layout/Container'

import PageLayout from '@/app/pageLayout'

const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <PageLayout>
      <Container className='mx-auto grid grid-cols-12 md:space-x-4'>
        <PostSidebar />
        <div className='col-span-12 p-2 md:col-span-9 md:p-0 xl:col-span-10'>
          {children}
        </div>
      </Container>
    </PageLayout>
  )
}

export default BlogLayout
