import Link from 'next/link'
import React from 'react'
import { BlogCard } from "@/components/views/blog"

import { CategoryService, PostService } from '@/lib/api'
import { convertToPostList, convertToCategoryList } from '@/utils/blogs'

interface Category {
  title: string
  description: string
  postsCount: number
  slug: string
}

const Blog = async () => {
  const categoriesData = await CategoryService.getAll()
  const postsData = await PostService.getAll()

  const { categories } = convertToCategoryList(categoriesData)
  let { posts, tags } = convertToPostList(postsData)

  tags = tags.sort(() => .5 - Math.random()).slice(0, 5)

  return (
    <div className="w-[90%] mx-auto p-2 bg-background my-5 border-2 border-solid border-accent mt-[4rem]">
      <div className="w-full flex justify-between items-center flex-col tablet-lg:flex-row">
        <h1 className="blog-header p-0 m-0 text-3xl text-center break-words font-venice text-on-accent mb-10">
          The Web Log
        </h1>
        <ul className="grid grid-cols-[repeat(auto-fit,minmax(150px, 1fr))] tablet-lg:grid-cols-[repeat(5,max-content)] tablet-md:grid-cols-[repeat(3,max-content)] tablet-sm:grid-cols-[repeat(4,max-content)] desktop:grid-cols-[repeat(6,max-content)] gap-x-2">
          {categories.map((category: Category) => (
            <li
              key={category.title}
              className="col-auto border border-black bg-tertiary-200 overflow-hidden rounded-[10px] border-solid hover:bg-tertiary-300 mb-2"
            >
              <Link
                href={`/blog/categories/${category.slug}`}
                className="block text-center border-l-white border-t-white font-bold text-black text-[0.8rem] uppercase px-3 py-0.5 rounded-[10px] border-l-2 border-t-2 border-solid"
              >
                {category.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={`banner h-[35px] max-w-[1230px] w-full bg-accent mx-auto border-t-2 border-x-2 border-solid border-accent relative grid grid-cols-[70px_1fr_150px] items-center px-[2em] py-0 border-2 before:content-[""] before:absolute before:block before:w-[1.25rem] before:h-[1.25rem] before:bg-accent-dark before:-z-1 before:-left-[0.5rem] before:-top-[1.25rem] after:content-[""] after:absolute afer:block after:w-[1.25rem] after:h-[1.25rem] after:bg-accent-dark after:-z-1 after:-right-[0.5rem] after:-top-[1.25rem]`}>
        <h4 className="uppercase text-[0.85rem] text-black">tags:</h4>
        <ul className={`font-extra w-full grid grid-cols-[repeat(5,max-content)] gap-x-[1em] list-none`}>
          {tags.map((tag: string) => (
            <li key={tag} className="text-[0.9rem] font-normal text-black pb-[0.5px] hover:cursor-pointer hover:underline-offset-[3px]">
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
          {posts.map((post: any) => (
            <BlogCard key={post.slug} post={post} category={post.category} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blog
