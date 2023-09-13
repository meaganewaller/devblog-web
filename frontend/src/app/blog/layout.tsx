// 'use client'

// import { motion } from 'framer-motion'
// import tw, { styled } from 'twin.macro'

import PageLayout from '@/app/pageLayout'
import { Container } from '@/components/Layout/Container'
import PostSidebar from '@/components/Blog/Sidebar'

const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <PageLayout>
      <Container className="grid grid-cols-12 mx-auto md:space-x-4">
        <PostSidebar />
        <div className="col-span-12 md:col-span-9 xl:col-span-10 p-2 md:p-0">
          {children}
        </div>
      </Container>
    </PageLayout>
  )
}

export default BlogLayout

// export default function BlogLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//     >
//       {children}
//     </motion.div>
//   )
// }
