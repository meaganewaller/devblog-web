'use client'
import Image from 'next/image'
import React from 'react'

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
  post: Blog
  category: {
    title: string
    slug: string
  }
}

export const BlogCard = ({ post, category }: Props) => {
  return (
    <button
      className='card bg-tertiary-50 border-secondary-600 hover:shadow-primary-200 hover:border-primary-300 relative mb-2 ml-0 mt-0 mt-2 inline-block w-[150px] w-full border border-solid transition-[0.3s] hover:border hover:border-solid hover:shadow-[0.5rem_0.5rem] hover:transition-[0.3s]'
      onClick={() => (window.location.href = `/blog/${post.slug}`)}
    >
      <div className='h-[150px] w-auto overflow-hidden'>
        <Image
          src={post.coverImage}
          alt={post.title}
          width={600}
          height={400}
          className='h-auto max-w-full rounded-tl-md rounded-tr-md'
        />
      </div>
      <h3 className='text-neutral-dark mb-2.5 p-2 text-lg font-bold leading-tight tracking-[1px]'>
        {post.title}
      </h3>
      <div className='card-content mb-10 p-2'>
        <p className='text-text mb-2.5 break-words text-start text-base leading-normal'>
          {post.description}
        </p>
      </div>
      <div
        data-category={category}
        className='absolute bottom-0 right-0 z-[2] px-[0.7rem] py-[0.4rem] text-center text-xs font-bold'
      >
        {category.title}
      </div>
      <div className='card-footer'>
        <div className='card-footer-item'></div>
      </div>
    </button>
  )
}
