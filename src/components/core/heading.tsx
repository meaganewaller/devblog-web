'use client'

import clsx from 'clsx'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import tw from 'twin.macro'

import SearchInput from './SearchInput'

import { Category } from '@/types'

interface PageHeaderProps {
  title: string
  categories?: Category[]
  onSearch?: (searchData: string) => void
}

const HeadingWrapper = tw(motion.div)`
  bg-background
  border-accent
  border-solid
  border-t-2
  border-x-2
  flex
  items-center
  justify-between
  mt-12
  mx-auto
  px-2
  py-4
  rounded-t-lg
  max-w-[96%]
  w-full
  xs:flex-col
  sm:flex-col
`

const HeadingTitle = tw.h1`
  font-venice
  text-4xl
  md:text-5xl
  lg:text-6xl
  w-full
  text-center
  text-shadow-yellow
`
// className={`xs:hidden sm:grid banner h-[35px] max-w-full bg-[var(--color-baby-pink)] mx-auto border-t-2 border-x-2 border-solid border-[var(--color-cotton-candy)] relative grid grid-cols-[70px_1fr_150px] items-center px-[2em] py-0 border-2 before:content-[""] before:absolute before:block before:w-5 before:h-5 before:bg-accent before:-z-1 before:-left-0.5 before:-top-5 after:content-[""] after:absolute afer:block after:w-5 after:h-5 after:bg-accent after:-z-1 after:-right-0.5 after:-top-5`}>
const TagsWrapper = tw(motion.div)`
  xs:hidden
  sm:hidden
  grid
  h-[35px]
  w-full
  md:max-w-full
  lg:max-w-[99%]
  bg-[var(--color-baby-pink)]
  mx-auto
  border-t-2
  border-x-2
  border-solid
  border-[var(--color-cotton-candy)]
  relative
  grid
  grid-cols-[70px_1fr_150px]
  items-center
  px-[2em]
  py-0
  border-2
  z-[1]
`
const CategoryNav = tw(motion.ul)`
  gap-x-2
  grid
  grid-cols-[repeat(2,max-content)]
  mt-2
  xs:hidden
`
const CategoryNavItem = tw(motion.li)`
  bg-[var(--color-soft-blue)]
  border
  border-[var(--color-deep-sky-blue)]
  col-auto
  font-extra
  hover:bg-[var(--color-fresh-green)]
  hover:border-[var(--color-vibrant-green)]
  mb-2
  rounded-[10px]
`

const CategoryNavItemLink = tw(Link)`
  block
  border-l-2
  border-l-[#fff]
  border-solid
  border-t-2
  border-t-[#fff]
  px-3
  py-0.5
  rounded-[10px]
  text-xs
  text-center
  uppercase
`

export function Heading({ title, categories, onSearch }: PageHeaderProps) {
  const resource = usePathname().split('/')[1]

  const generateCategoryUrl = (categorySlug: string) => {
    return `${resource}/categories/${categorySlug}`
  }

  return (
    <>
      <HeadingWrapper>
        <HeadingTitle
          className={clsx(
            'blog-header',
            categories ? '' : 'w-full text-center',
          )}
        >
          {title}
        </HeadingTitle>
        {categories && (
          <CategoryNav>
            {categories.map((category: Category) => (
              <CategoryNavItem key={category.slug}>
                <CategoryNavItemLink href={generateCategoryUrl(category.slug)}>
                  {category.title}
                </CategoryNavItemLink>
              </CategoryNavItem>
            ))}
          </CategoryNav>
        )}
      </HeadingWrapper>
      <TagsWrapper className='banner'>
        <>
          {onSearch !== undefined && (
            <div className='w-full'>
              <SearchInput onSearch={onSearch} />
            </div>
          )}
        </>
      </TagsWrapper>
    </>
  )
}
