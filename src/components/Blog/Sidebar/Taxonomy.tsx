'use client'

import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'
import React from 'react'

import apiClient from '@/lib/apiClient'

import { tw } from '@/utils/tw'

import { Category } from '@/types'

const useCategories = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: () => fetchCategories(),
  })
}

const fetchCategories = async () => {
  const response = await apiClient.get('/categories?published_only=true')
  return response.data
}

export default function Taxonomy() {
  const searchParams = useSearchParams()
  const currentCategory = searchParams.get('category')
  const { data, isFetching } = useCategories()

  return (
    <div>
      <div className='mx-5 mb-14 w-full'>
        <p className='mb-4 font-venice text-4xl text-deep-sky-blue underline decoration-robins-egg-blue underline-offset-4'>
          Categories
        </p>
        {isFetching ? (
          <div>Loading categories...</div>
        ) : (
          <ul className='list-outside pb-2 pl-0 pr-5 pt-2'>
            {data.length > 0 &&
              data.map((category: Category) => (
                <li
                  className={tw(
                    'my-1 rounded-full border-2 border-creamy-white bg-sunshine-yellow p-1 shadow-inner shadow-goldenrod hover:border-purple hover:bg-lilac hover:shadow-lavender',
                    currentCategory === category.slug &&
                      'border-purple bg-lilac shadow-lavender hover:border-blush hover:bg-light-peach hover:shadow-peachy-pink',
                  )}
                  key={`${category.slug}`}
                >
                  <button
                    className='px-1 text-justify font-extra text-sm lowercase text-secondary-txt'
                    onClick={() => {
                      window.location.href = `/blog?category=${category.slug}`
                    }}
                  >
                    {category.title}
                  </button>
                </li>
              ))}
          </ul>
        )}
      </div>
    </div>
  )
}
