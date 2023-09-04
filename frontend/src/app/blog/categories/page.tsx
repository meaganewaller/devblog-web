'use client'

import React, { Suspense, useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Heading } from '@/components/core/heading'

import { CategoryService } from '@/lib/api'
import { convertToCategoryList } from '@/utils/blogs'
import { Category } from "@/types"

import { motion } from "framer-motion"
import tw from "twin.macro"

const CategoryIndexContainer = tw.div`
`

const CategoryContainer = tw(motion.div)`
  auto-rows-auto
  bg-background
  border-2
  border-accent
  border-t-0
  gap-2
  grid
  grid-cols-5
  lg:grid-cols-3
  md:grid-cols-3
  xl:grid-cols-4
  p-10
  rounded-b-md
  sm:p-2
  xs:p-2
  sm:grid-cols-2
  xs:grid-cols-1
  w-full
  mx-auto
  max-w-[96%]
  md:max-w-[95%]
`

const CategoryCard = tw(Link)`
`

const CategoryImage = tw(Image)`
  max-w-full
  object-contain
  rounded-t-md
`

const CategoryTitle = tw.h3`
  font-venice
  leading-tight
  mb-2.5
  p-2
  text-lg
  tracking-[1px]
`

function Categories() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    CategoryService.getAll().then((data: any) => {
      setCategories(convertToCategoryList(data).categories)
    })
  }, [])

  return (
    <CategoryIndexContainer>
      <Heading title={`All Categories`} />
      <CategoryContainer>
        {categories.map((category: Category) => (
          <CategoryCard
            href={`/blog/categories/${category.slug}`}
            key={category.slug}
          >
            <div
              className="mb-2 mt-0 w-full relative p-5 transition-[0.3s] hover:transition-[0.3s] hover:border-solid hover:border-[var(--color-deep-green)] card border font-extra hover:border hover:shadow-[0.25rem_0.25rem] hover:shadow-[var(--color-teal)]"
            >
              <div className="mt-2 md:mt-0">
                <div className="xs:hidden sm:hidden w-auto overflow-hidden">
                  <CategoryImage
                    src={category.coverImage}
                    alt={category.title}
                    width={600}
                    height={400}
                  />
                </div>
                <CategoryTitle>
                  {category.title}
                </CategoryTitle>
                <div className="mt-2 mb-10">
                  <p className="line-clamp-6 leading-normal mb-5 w-full">
                    {category.description}
                  </p>
                </div>
              </div>
              <div>
                <div></div>
              </div>
            </div>
          </CategoryCard>
        ))}
      </CategoryContainer>
    </CategoryIndexContainer>
  )
}

export default Categories

// export default async function Categories(): Promise<JSX.Element> {
//   const [categories, setCategories] = useState<Category[]>([])
//
//   useEffect(() => {
//     async function fetchCategories() {
//       const data = await CategoryService.getAll()
//       const { categories } = convertToCategoryList(data)
//       setCategories(categories)
//     }
//
//     fetchCategories()
//   }, [])
//
//   return (
//     <>
//       <Suspense fallback={<div>Loading...</div>}>
//         <Heading title={`All Categories`} />
//         <div className="mx-auto max-w-[97%] min-h-screen bg-background mb-[2em] p-[1em] border-2 border-solid border-accent border-t-0 pt-[3em] rounded-b-lg">
//           <div className="columns-[6_200px] gap-x-4">
//             {categories.map((category: Category) => (
//               <div
//                 key={category.slug}
//                 className="mb-2 mt-2 card border inline-block w-full w-[150px] ml-0 mt-0 relative transition-[0.3s] hover:border hover:shadow-[0.5rem_0.5rem] hover:shadow-[var(--color-teal)] hover:transition-[0.3s] hover:border-solid hover:border-[var(--color-deep-green)] font-extra"
//               >
//                 <Link href={`/blog/categories/${category.slug}`} className="w-auto h-[150px] overflow-hidden">
//                   <Image
//                     src={`https://placekitten.com/600/400`}
//                     alt={category.title}
//                     width={600}
//                     height={400}
//                     className="max-w-full h-auto rounded-tl-md rounded-tr-md"
//                   />
//                 </Link>
//                 <Link href={`/blog/categories/${category.slug}`}>
//                   <h3 className="pt-2 text-center w-full font-bold font-venice font-light leading-tight tracking-[1px] pb-2 text-lg">
//                     {category.title}
//                   </h3>
//                 </Link>
//                 <div className="card-content p-2 mb-10">
//                   <p className="text-base text-start leading-normal text-center break-words mb-2.5 break-words">
//                     {category.description}
//                   </p>
//                 </div>
//                 <div
//                   className="text-3xs font-extra font-bold absolute text-right z-[2] px-[0.25rem] py-[0.25rem] right-0 bottom-0"
//                 >
//                 </div>
//                 <div className="card-footer">
//                   <div className="card-footer-item"></div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </Suspense>
//     </>
//   )
// }
//
