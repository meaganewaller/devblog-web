import { useMemo } from 'react'

import Pagination from '@/components/Layout/Pagination'

import { ProjectLink } from './ProjectLink'

import { Project } from '@/types'

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
          <ProjectLink project={project} />
          <p>{project.description}</p>
        </div>
      ))}

      {page && totalPages && (
        <Pagination series={pagination} page={page} totalPages={totalPages} url={url} previousProjectUrl={previousProjectUrl} />
      )}
    </div>
  )
}
