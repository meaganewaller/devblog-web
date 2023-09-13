'use client'

import Link from 'next/link'
import Image from 'next/image'
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
      title: "femputer",
      description: "my personal development machine",
      slug: "femputer",
      coverImage: "https://placekitten.com/600/400"
    }
  ]

  return (
    <>
      <Heading title={`My Workspaces`} />
      <div className="rounded-b-lg mx-auto max-w-[97%] bg-background mb-[2em] p-[1em] border-2 border-solid border-accent border-t-0 pt-[3em]">
        <div className="columns-[6_200px] gap-x-4">
          {workspaces.map((workspace: Workspace) => (
            <div
              key={workspace.slug}
              className="mb-2 mt-2 card border inline-block w-full w-[150px] ml-0 mt-0 relative transition-[0.3s] hover:border hover:shadow-[0.5rem_0.5rem] hover:shadow-[var(--color-teal)] hover:transition-[0.3s] hover:border-solid hover:border-[var(--color-deep-green)] font-extra"
            >
              <Link className="w-auto h-[150px] overflow-hidden" href={`/workspace/${workspace.slug}`}>
                <Image
                  src={workspace.coverImage}
                  alt={workspace.title}
                  width={600}
                  height={400}
                  className="max-w-full h-auto rounded-tl-md rounded-tr-md"
                />
              </Link>
              <Link href={`/workspace/${workspace.slug}`}>
                <h3 className="font-bold font-venice font-light leading-tight tracking-[1px] mb-2.5 px-2 text-left text-lg">
                  {workspace.title}
                </h3>
              </Link>
              <div className="card-content p-2 mb-10">
                <p className="text-base text-start leading-normal text-center break-words mb-2.5 break-words">
                  {workspace.description}
                </p>
              </div>
              <div
                className="text-xs font-extra font-bold absolute text-right z-[2] px-[0.25rem] py-[0.25rem] right-0 bottom-0"
              >
              </div>
              <div className="card-footer">
                <div className="card-footer-item"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </>
  )
}

export default WorkspacesPage
