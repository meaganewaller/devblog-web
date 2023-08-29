'use client'
import React from 'react'
import Image from 'next/image'

type Blog = {
  title: string
  slug: string
  tags: string[]
  coverImage: string
  description: string
  publishedDate?: any
  lastUpdatedDate?: any
  metaKeywords?: string
  metaDescription?: string
}

type Props = Blog & {
  post: Blog,
  category: {
    title: string
    slug: string
  }
}

export const BlogCard = ({ post, category }: Props) => {
  return (
      <button className="mb-2 mt-2 card bg-tertiary-50 border inline-block w-full w-[150px] ml-0 mt-0 relative transition-[0.3s] border-solid border-secondary-600 hover:border hover:shadow-[0.5rem_0.5rem] hover:shadow-primary-200 hover:transition-[0.3s] hover:border-solid hover:border-primary-300" onClick={() => window.location.href = `/blog/${post.slug}`}>
      <div className="w-auto h-[150px] overflow-hidden">
        <Image src={post.coverImage} alt={post.title} width={600} height={400} className="max-w-full h-auto rounded-tl-md rounded-tr-md" />
      </div>
      <h3 className="text-neutral-dark font-bold leading-tight tracking-[1px] mb-2.5 p-2 text-lg">
        {post.title}
      </h3>
      <div className="card-content p-2 mb-10">
        <p className="text-base text-start leading-normal mb-2.5 text-text break-words">
          {post.description}
        </p>
      </div>
      <div data-category={category} className="text-xs font-bold absolute text-center z-[2] px-[0.7rem] py-[0.4rem] right-0 bottom-0">
        {category.title}
      </div>
      <div className="card-footer">
        <div className="card-footer-item">
        </div>
      </div>
    </button>
  )
}

