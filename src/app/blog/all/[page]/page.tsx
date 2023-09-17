import range from 'lodash/range'
import { PostService } from '@/lib/api'
import Page from '../page'

export default Page

const PER_PAGE = Number(process.env.NEXT_PUBLIC_POSTS_PER_PAGE)

export async function generateStaticParams() {
  const { totalPages } = await PostService.getAll()
}
