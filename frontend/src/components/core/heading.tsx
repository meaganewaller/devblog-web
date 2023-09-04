'use client'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import { Category } from "@/types"
import tw from 'twin.macro'
import { motion } from 'framer-motion'
import SearchInput from './SearchInput'

import clsx from 'clsx'

interface PageHeaderProps {
  title: string
  categories?: Category[]
  tags?: string[]
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
  md:max-w-[95%]
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
  text-3xs
  text-center
  uppercase
`

const TagItem = tw(motion.li)`
  text-3xs text-accent hover:underline-offset-[3px] hover:underline hover:cursor-pointer
`

export function Heading({ title, categories, tags, onSearch }: PageHeaderProps) {
  const resource = usePathname().split("/")[1]

  const generateCategoryUrl = (categorySlug: string) => {
    return `${resource}/categories/${categorySlug}`
  }

  const generateTagUrl = (tag: string) => {
    return `${resource}/tags/${tag}`
  }

  return (
    <>
      <HeadingWrapper>
        <HeadingTitle className={clsx("blog-header", categories ? "" : "w-full text-center")}>
          {title}
        </HeadingTitle>
        {categories && (
          <CategoryNav>
          {/* <ul className="w-[90%] lg:w-1/2 mx-auto grid grid-cols-[repeat(auto-fit,minmax(100px, 1fr))] xl:grid-cols-[repeat(5,max-content)] lg:grid-cols-[repeat(4,max-content)] md:grid-cols-[repeat(4,max-content)] 2xl:grid-cols-[repeat(6,max-content)] gap-x-2"> */}
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
      <TagsWrapper className="banner">
        {tags && (
          <>
            <h4 className="leading-relaxed font-extra uppercase text-[0.85rem] text-accent-dark bg-on-accent text-center rounded-lg mr-2">tags:</h4>
            <ul className={`font-extra w-full grid grid-cols-[repeat(5,max-content)] gap-x-[1em] list-none`}>
              {tags.map((tag: string) => (
                <TagItem key={tag}>
                  <Link href={generateTagUrl(tag.toLowerCase().replace(/\s/g, "-"))}>
                    {tag}
                  </Link>
                </TagItem>
              ))}
            </ul>
            <div className="grid grid-cols-[120px_1fr] gap-x-[5px] items-center">
              <SearchInput onSearch={onSearch} />
            </div>
          </>
         )}
      </TagsWrapper>
    </>
  )
}
