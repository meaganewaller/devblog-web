'use client'

import React, { Suspense, useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Heading } from '@/components/core/heading'

import { ProjectService } from '@/lib/api'
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
      <Heading title={`The Project Log`} />
      <div className="rounded-b-lg mx-auto max-w-[97%] bg-background mb-[2em] p-[1em] border-2 border-solid border-accent border-t-0 pt-[3em]">
        <div className="columns-[6_200px] gap-x-4">
          {projects.map((project: Project) => (
            <div key={project.slug} className="mb-2 mt-2 card border inline-block w-full w-[150px] ml-0 mt-0 relative transition-[0.3s] hover:border hover:shadow-[0.5rem_0.5rem] hover:shadow-[var(--color-teal)] hover:transition-[0.3s] hover:border-solid hover:border-[var(--color-deep-green)] font-extra">
              <Link href={`/projects/${project.slug}`} className="w-auto h-[150px] overflow-hidden">
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="max-w-full h-auto rounded-tl-md rounded-tr-md"
                />
              </Link>

              <Link href={`/projects/${project.slug}`}>
                <h3 className="w-full text-center font-bold font-venice font-light leading-tight tracking-[1px] my-2.5 px-2 text-lg">
                  {project.title}
                </h3>
              </Link>
              <div className="card-content p-2 mb-10">
                <p className="text-base text-start leading-normal break-words mb-2.5 break-words">
                  {project.description}
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
    </Suspense>
  )
}

export default Projects
