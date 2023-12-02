import { useQuery } from '@tanstack/react-query'

import apiClient from '@/lib/apiClient'

import { convertProject } from '@/utils/projects'

import { ProjectResponse } from '@/types'

async function fetchProjectDetail(slug: string) {
  const { data, status } = await apiClient.get<ProjectResponse>(`/projects/${slug}`)

  if (status !== 200) {
    throw new Error('Failed to fetch project detail')
  }

  const converted = await convertProject(data)

  return converted
}

export function useFetchProjectDetail(slug: string) {
  return useQuery(['projectDetail', slug], () => fetchProjectDetail(slug))
}

