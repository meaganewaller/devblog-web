'use client'
import React from 'react'
import { useSearchParams } from 'next/navigation'
import { ProjectsList } from "@/components/Projects/ProjectsList"
import { useQuery } from '@tanstack/react-query'
import apiClient from '@/lib/apiClient'

const useProjects = (limit, page, tag, category, search) => {
  return useQuery({
    queryKey: ['projects', limit, page, tag, category, search],
    queryFn: () => fetchProjects(limit, page, tag, category, search),
  })
}

const fetchProjects = async (limit = 10, page = 1, tag, category, search) => {
  let urlParams = `?page=${page}&count=${limit}`
  if (tag) { urlParams += `&tag=${tag}` }
  if (category) { urlParams += `&category=${category}` }
  if (search) { urlParams += `&query=${search}` }

  const response = await apiClient.get(`/projects${urlParams}`)
  return response.data
}


export default function ProjectsPage() {
  const searchParams = useSearchParams()
  const page = searchParams.get('page')
  const tag = searchParams.get('tag') || undefined
  const search = searchParams.get('query') || undefined
  const currentPage = parseInt(page as string, 10) || 1
  const category = searchParams.get('category') || undefined

  const {
    data,
    isPending,
    isFetching
  } = useProjects(10, currentPage, tag, category, search)

  let projectUrl = `/projects?page=${currentPage}`
  let previousProjectUrl = `/projects?page=${currentPage - 1}`

  if (tag) {
    projectUrl += `&tag=${tag}`
  }

  if (search) {
    projectUrl += `&query=${search}`
  }

  if (category) {
    projectUrl += `&category=${category}`
  }

  if (isPending) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <h1 className="font-venice text-6xl text-accent mb-2">the projects</h1>
      {(isPending || isFetching) ? (<div>Loading...</div>) :
      (
        <ProjectsList
          projects={data?.projects}
          page={currentPage}
          totalPages={data.pagy.pages}
          url={projectUrl}
          previousProjectUrl={previousProjectUrl}
          pagination={data.pagy.series}
        />
      )}
    </div>
  )
}
