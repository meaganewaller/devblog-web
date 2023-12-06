'use client'

import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'
import React from 'react'

import apiClient from '@/lib/apiClient'

import { ProjectsList } from '@/components/Projects/ProjectsList'

interface ProjectProps {
  limit: number
  page: number
}

function useProjects(params: ProjectProps) {
  const { limit, page } = params
  return useQuery({
    queryKey: ['projects', limit, page],
    queryFn: () => fetchProjects({ limit, page }),
  })
}

const fetchProjects = async (params: ProjectProps) => {
  const { limit, page } = params
  const urlParams = `?page=${page}&count=${limit}`

  const response = await apiClient.get(`/projects${urlParams}`)
  return response.data
}

export default function ProjectsPage() {
  const searchParams = useSearchParams()
  const page = searchParams.get('page')
  const currentPage = parseInt(page as string, 10) || 1

  const { data, isFetching } = useProjects({ limit: 3, page: currentPage })

  const projectUrl = `/projects?page=${currentPage}`
  const previousProjectUrl = `/projects?page=${currentPage - 1}`

  if (isFetching) return <p>Loading...</p>
  if (!data) return <p>Something went wrong</p>

  return (
    <div>
      <h1 className='mb-2 font-venice text-6xl text-accent'>the projects</h1>
      {isFetching ? (
        <div>Loading...</div>
      ) : (
        <ProjectsList
          page={currentPage}
          pagination={data.pagy.series}
          previousProjectUrl={previousProjectUrl}
          projects={data?.projects}
          totalPages={data.pagy.pages}
          url={projectUrl}
        />
      )}
    </div>
  )
}
