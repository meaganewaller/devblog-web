import Link from 'next/link'
import React from 'react'

import { CategoryService } from '@/lib/api'

const Blog = async () => {
  const categories = await CategoryService.getAll()

  return (
    <div className="min-h-screen container mx-auto p-2 tablet-sm:p-4 tablet-md:p-8 tablet-lg:p-10 bg-background my-5 tablet-sm:my-12 rounded-lg border-2 border-solid border-accent mt-[4em]">
      <div className="max-w-[95%] w-full flex justify-between items-center flex-col lg:flex-row">
        <h1 className="blog-header p-0 m-0 text-6xl font-normal text-center text-accent break-words font-venice hover:text-accent-dark mb-10">
          The Web Log
        </h1>
        <ul className="grid grid-cols-[repeat(auto-fit,minmax(150px, 1fr))] tablet-lg:grid-cols-[repeat(5,max-content)] tablet-md:grid-cols-[repeat(3,max-content)] tablet-sm:grid-cols-[repeat(4,max-content)] desktop:grid-cols-[repeat(6,max-content)] gap-x-2">
          {categories.map((category) => (
            <li
              key={category.name}
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
    </div>
  )
}

export default Blog
