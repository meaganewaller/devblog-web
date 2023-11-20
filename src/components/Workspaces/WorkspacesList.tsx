import { useMemo } from 'react'

import Pagination from '@/components/Layout/Pagination'

import { WorkspaceLink } from './WorkspaceLink'

import { Workspace } from '@/types'

export interface WorkspaceTimelineProps {
  workspaces: Workspace[]
  page?: number
  totalPages?: number
  url: string
  previousWorkspaceUrl?: string
  pagination: string[]
}

export const WorkspacesList = ({
  workspaces,
  page = 1,
  totalPages = 1,
  url,
  previousWorkspaceUrl,
  pagination
}: WorkspaceTimelineProps) => {
  return (
    <div>
      {workspace.length === 0 && (
        <p>no workspaces found :(</p>
      )}
      {workspaces.length > 0 && workspaces.map((workspace: Workspace, index: number) => (
        <div key={`${workspace.id}-${workspace.title}`}>
          <WorkspaceLink workspace={workspace} />
          <p>{workspace.description}</p>
        </div>
      ))}

      {page && totalPages && (
        <Pagination series={pagination} page={page} totalPages={totalPages} url={url} previousWorkspaceUrl={previousWorkspaceUrl} />
      )}
    </div>
  )
}

