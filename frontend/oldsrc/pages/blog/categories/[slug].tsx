import Layout from '@/components/layout/Layout'
import { GetServerSideProps, NextPage } from 'next'
import { convertToPostList } from '@/lib/utils/blog'
import { Article } from '@/types'
import PostService from '@/services/PostService'
import Image from 'next/image'
import BlogCard from '@/components/BlogCard';

const CategoryPage: NextPage<{ posts: Article[], categorySlug: string, tags: string[] }> = ({ posts, categorySlug, tags }) => {
  return (
    <Layout hideNavbar={false} hideFooter={true}>
      <div className="container mx-auto p-2 sm:p-4 md:p-8 lg:p-10 bg-primary-50 my-5 sm:my-12 rounded-lg border-2 border-solid border-primary-200">
        <div className="max-w-[95%] w-full flex justify-between items-center flex-col lg:flex-row">
          <h1 className="blog-header p-0 m-0 text-6xl font-normal text-center text-secondary-300 break-words font-venice hover:text-tertiary-300 mb-10">
            <span className="text-3xl">The Web Log:</span> {categorySlug}
          </h1>
        </div>
        <div className={`hidden md:grid banner h-[35px] w-full bg-secondary-200 mx-auto border-t-2 border-x-2 border-solid border-secondary-300 relative grid grid-cols-[70px_1fr_150px] items-center px-[2em] py-0 border-2 before:content-[""] before:absolute before:block before:w-5 before:h-5 before:bg-secondary-200 before:-z-1 before:-left-0.5 before:-top-5 after:content-[""] after:absolute afer:block after:w-5 after:h-5 after:bg-primary-200 after:-z-1 after:-right-0.5 after:-top-5`}>
          <h4 className="uppercase text-[0.85rem] text-black">tags:</h4>
          <ul className={`font-extra w-full grid grid-cols-[repeat(5,max-content)] gap-x-[1em] list-none`}>
            {tags.map((tag: string, i: number) => (
              <li key={i} className="text-[0.9rem] font-normal text-black pb-0.5 hover:cursor-pointer hover:underline-offset-[3px]">
                {tag}
              </li>
            ))}
          </ul>
          <div className="grid grid-cols-[120px_1fr] gap-x-[5px] items-center">
            <input type="text" placeholder="search..." className="border border-black h-[23px] px-2 py-[3px] rounded-lg border-solid" />
            <button className="w-[30px] h-[22px] text-[0.85rem] uppercase border border-black bg-tertiary-300 relative overflow-hidden cursor-pointer text-black grid place-items-center rounded-lg border-solid before:content-[''] before:absolute before:w-full before:h-full before:border-l-white before:border-t-white before:rounded-lg before:border-l before:border-solid before:border-t before:left-px before:top-px hover:bg-white/50">go</button>
          </div>
        </div>
        <div className="w-full bg-primary-50 mb-[2em] p-[1em]">
          <div className="columns-[6_200px] gap-x-4">
            {posts.map((post: Article, i: number) => (
              <BlogCard key={i} post={post} category={post.category} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const getServerSideProps = async ({ params }) => {
  const categorySlug = params?.slug ? params.slug : undefined;

  if (!categorySlug) { return { notFound: true } }

  const postsData = await PostService.getAll(categorySlug)
  const { posts, tags } = convertToPostList(postsData)
  let tagsSample = tags.sort(() => .5 - Math.random()).slice(0, 5)
  return {
    props: {
      posts,
      tags: tagsSample,
      categorySlug,
    },
  }
}

export default CategoryPage;
