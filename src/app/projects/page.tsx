'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { Suspense, useEffect, useState } from 'react'

import { ProjectService } from '@/lib/api'

import { Heading } from '@/components/core/heading'

import { convertToProjectList } from '@/utils/projects'

import { Project } from '@/types'

const Projects = async () => {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    async function fetchProjects() {
      const data = await ProjectService.getAll()
      const { projects } = convertToProjectList(data)
      setProjects(projects)
    }

    fetchProjects()
  }, [])

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Heading title={'The Project Log'} />
      <div className='mx-auto mb-[2em] max-w-[97%] rounded-b-lg border-2 border-t-0 border-solid border-accent bg-background p-[1em] pt-[3em]'>
        <div className='columns-[6_200px] gap-x-4'>
          {projects.map((project: Project) => (
            <div
              key={project.slug}
              className='card relative mb-2 ml-0 mt-0 mt-2 inline-block w-[150px] w-full border font-extra transition-[0.3s] hover:border hover:border-solid hover:border-[var(--color-deep-green)] hover:shadow-[0.5rem_0.5rem] hover:shadow-[var(--color-teal)] hover:transition-[0.3s]'
            >
              <Link href={`/projects/${project.slug}`} className='h-[150px] w-auto overflow-hidden'>
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  width={600}
                  height={400}
                  className='h-auto max-w-full rounded-tl-md rounded-tr-md'
                />
              </Link>

              <Link href={`/projects/${project.slug}`}>
                <h3 className='my-2.5 w-full px-2 text-center font-venice text-lg font-bold font-light leading-tight tracking-[1px]'>
                  {project.title}
                </h3>
              </Link>
              <div className='card-content mb-10 p-2'>
                <p className='mb-2.5 break-words break-words text-start text-base leading-normal'>
                  {project.description}
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
    </Suspense>
  )
}

export default Projects
