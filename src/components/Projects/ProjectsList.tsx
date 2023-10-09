import { useMemo } from 'react'

import Pagination from '@/components/Layout/Pagination'

import { ProjectLink } from './ProjectLink'

import { Project } from '@/types'

interface ProjectsCountProps {
  projects: Project[]
}

export const ProjectsCount = ({ projects, year }: ProjectsCountProps) => {
  const count = useMemo(() => {
    return projects.filter((a) => new Date(a.publishedDate).getFullYear() === year)
      .length
  }, [projects])

  return (
    <span className='block text-sm font-semibold text-accent'>
      {count} post{count === 1 ? '' : 's'}
    </span>
  )
}

export interface ProjectTimelineProps {
  projects: Project[]
  page?: number
  totalPages?: number
  url: string
  previousProjectUrl?: string
  pagination: string[]
}

export const ProjectsList = ({
  projects,
  page = 1,
  totalPages = 1,
  url,
  previousProjectUrl,
  pagination
}: ProjectTimelineProps) => {
  return (
    <div>
      {projects.length === 0 && (
        <p>no projects found :(</p>
      )}
      {projects.length > 0 && projects.map((project: Project, index: number) => (
        <div key={`${project.id}-${project.title}`}>
          <ProjectLink post={project} />
        </div>
      ))}

      {page && totalPages && (
        <Pagination series={pagination} page={page} totalPages={totalPages} url={url} previousProjectUrl={previousProjectUrl} />
      )}
    </div>
  )
}
