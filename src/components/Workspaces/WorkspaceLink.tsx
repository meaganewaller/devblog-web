import clsx from 'clsx'

import { Link } from '@/components/Layout/Link'

import { Workspace } from '@/types'

export interface WorkspaceLinkProps {
  workspace: Workspace
}

export const WorkspaceLink = ({ workspace }: WorkspaceLinkProps) => {
  return (
    <div className={clsx('my-2 flex justify-between p-1')}>
      <div className='flex flex-col'>
        <div className='flex flex-row items-center space-x-4'>
          <Link href={`/workspaces/${workspace.slug}`} className='link--blue flex-grow text-lg font-semibold'>
            <span>{workspace.title}</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
