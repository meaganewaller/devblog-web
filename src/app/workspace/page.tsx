'use client'

import Image from 'next/image'
import Link from 'next/link'

import { Heading } from '@/components/core/heading'

interface Workspace {
  title: string
  description: string
  slug: string
  coverImage: string
}

const WorkspacesPage = async () => {
  const workspaces: Workspace[] = [
    {
      title: 'femputer',
      description: 'my personal development machine',
      slug: 'femputer',
      coverImage: 'https://placekitten.com/600/400',
    },
  ]

  return (
    <>
      <Heading title={'My Workspaces'} />
      <div className='mx-auto mb-[2em] max-w-[97%] rounded-b-lg border-2 border-t-0 border-solid border-accent bg-background p-[1em] pt-[3em]'>
        <div className='columns-[6_200px] gap-x-4'>
          {workspaces.map((workspace: Workspace) => (
            <div
              key={workspace.slug}
              className='card relative mb-2 ml-0 mt-0 mt-2 inline-block w-[150px] w-full border font-extra transition-[0.3s] hover:border hover:border-solid hover:border-[var(--color-deep-green)] hover:shadow-[0.5rem_0.5rem] hover:shadow-[var(--color-teal)] hover:transition-[0.3s]'
            >
              <Link
                className='h-[150px] w-auto overflow-hidden'
                href={`/workspace/${workspace.slug}`}
              >
                <Image
                  src={workspace.coverImage}
                  alt={workspace.title}
                  width={600}
                  height={400}
                  className='h-auto max-w-full rounded-tl-md rounded-tr-md'
                />
              </Link>
              <Link href={`/workspace/${workspace.slug}`}>
                <h3 className='mb-2.5 px-2 text-left font-venice text-lg font-bold font-light leading-tight tracking-[1px]'>
                  {workspace.title}
                </h3>
              </Link>
              <div className='card-content mb-10 p-2'>
                <p className='mb-2.5 break-words break-words text-center text-start text-base leading-normal'>
                  {workspace.description}
                </p>
              </div>
              <div className='absolute bottom-0 right-0 z-[2] px-[0.25rem] py-[0.25rem] text-right font-extra text-xs font-bold'></div>
              <div className='card-footer'>
                <div className='card-footer-item'></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default WorkspacesPage
