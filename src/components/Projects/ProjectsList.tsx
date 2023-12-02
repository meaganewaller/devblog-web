import Pagination from '@/components/Layout/Pagination'

import { ProjectLink } from './ProjectLink'
import Image from 'next/image'

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
  pagination,
}: ProjectTimelineProps) => {
  return (
    <div className="w-[500px] h-[550px] shadow-[inset_6px_6px_14px_0px_rgb(53_31_3_/_70%)] m-auto border-l-[#e4ba89] border-r-[#d4a977] border-t-[#e8c295] border-b-[#bf9d75] border-[30px] border-solid bg-cork">
      <div className="w-[500px] min-h-[500px] relative">
        {projects.length === 0 && <p>no projects found :(</p>}
        {projects.length > 0 &&
          projects.map((project: Project, index: number) => (
            <div key={project.slug}
            >
              <Image src={project.coverImage} alt={project.title} width={500} height={500} className="w-[500px] h-[500px] object-cover" />
              <h1>{project.title}</h1>
            </div>
          ))}
      </div>

      {page && totalPages && (
        <Pagination
          series={pagination}
          page={page}
          totalPages={totalPages}
          url={url}
          previousProjectUrl={previousProjectUrl}
        />
      )}
    </div>
  )
}
