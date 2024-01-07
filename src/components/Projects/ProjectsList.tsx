import { Link } from '@/components/Layout/Link'

import { ProjectResponse } from '@/types'

export interface ProjectListProps {
  projects: ProjectResponse[]
  page?: number
  totalPages?: number
  url: string
  previousProjectUrl: string
  pagination: string[]
}

export const ProjectsList = ({
  projects,
  page = 1,
  totalPages = 1,
  url,
  previousProjectUrl,
  pagination,
}: ProjectListProps) => {
  return (
    <div>
      {projects.length === 0 && <p>No Projects Found :(</p>}
      {projects.length > 0 &&
        projects.map((project: ProjectResponse) => (
          <div key={`${project.slug}-${project.title}`}>
            <div className='p1 my-2 flex justify-between'>
              <div className='flex flex-col'>
                <div className='flex flex-row items-center space-x-4'>
                  <Link href={`/projects/${project.slug}`} className='decoration-none font-seimbold flex-grow text-lg'>
                    <span>{project.title}</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}
