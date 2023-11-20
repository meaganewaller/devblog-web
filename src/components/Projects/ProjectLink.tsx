import clsx from 'clsx'

import { Link } from '@/components/Layout/Link'

import { Project } from '@/types'

export interface ProjectLinkProps {
  project: Project
}

export const ProjectLink = ({ project }: ProjectLinkProps) => {
  return (
    <div className={clsx('my-2 flex justify-between p-1')}>
      <div className='flex flex-col'>
        <div className='flex flex-row items-center space-x-4'>
          <Link href={`/projects/${project.slug}`} className='link--blue flex-grow text-lg font-semibold'>
            <span>{project.title}</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
