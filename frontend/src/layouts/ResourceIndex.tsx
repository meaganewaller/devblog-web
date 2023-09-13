'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Heading } from '@/components/core/heading'
import { motion } from 'framer-motion'
import tw from 'twin.macro'
import { useRouter } from 'next/navigation'

import { Category } from '@/types'

const ResourceIndexContainer = tw.div`
`

  // lg:grid-cols-3
  // md:grid-cols-3
  // xl:grid-cols-4
  // sm:p-2
  // xs:p-2
  // sm:grid-cols-2
  // xs:grid-cols-1

const ResourceContainer = tw(motion.div)`
  auto-rows-auto
  bg-background
  border-2
  border-accent
  border-t-0
  gap-2
  grid
  grid-cols-5
  p-10
  rounded-b-md
  w-full
  mx-auto
  max-w-[96%]
`

const ResourceCard = tw.div`
`

const ResourceImage = tw(Image)`
  max-w-full
  object-contain
  rounded-t-md
`

const ResourceTitle = tw.h3`
  font-venice
  leading-tight
  mb-2.5
  p-2
  text-lg
  tracking-[1px]
`

type ResourceIndexProps = {
  headingTitle: string
  categories?: Category[]
  resources: any[]
  onSearch?: (value: string) => void
}

function ResourceIndex({ headingTitle, categories, resources, onSearch }: ResourceIndexProps) {
  const router = useRouter()

  return (
    <ResourceIndexContainer>
      <Heading title={headingTitle} categories={categories} onSearch={onSearch} />
      <ResourceContainer>
        {resources.map((resource: any) => (
          <ResourceCard
            onClick={() => router.push(`/blog/${resource.slug}`)}
            key={resource.slug}>
            <div
              className="mb-2 mt-0 w-full relative p-5 transition-[0.3s] hover:transition-[0.3s] hover:border-solid hover:border-[var(--color-deep-green)] card border font-extra hover:border hover:shadow-[0.25rem_0.25rem] hover:shadow-[var(--color-teal)]"
            >
              <div
                data-category={resource.category.title}
                className="rounded-br-lg rounded-tl-lg text-xs font-extra font-bold absolute text-right z-[2] px-2 py-1 right-0 bottom-0 max-w-2/3"
              >
                <Link href={`/blog/category/${resource.category.slug}`}>
                  {resource.category.title}
                </Link>
              </div>
              <div className="mt-2 md:mt-0">
                <div className="xs:hidden sm:hidden w-auto overflow-hidden">
                  <ResourceImage
                    src={resource.coverImage}
                    alt={resource.title}
                    width={600}
                    height={400}
                  />
                </div>
                <ResourceTitle>
                  {resource.title}
                </ResourceTitle>
                <div className="mt-2 mb-10">
                  <p className="line-clamp-6 leading-normal mb-5">
                    {resource.description}
                  </p>
                </div>
              </div>
              <div>
                <div></div>
              </div>
            </div>
          </ResourceCard>
        ))}
      </ResourceContainer>
    </ResourceIndexContainer>
  )
}

export default ResourceIndex
