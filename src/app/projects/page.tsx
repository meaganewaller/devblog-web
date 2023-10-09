'use client'

import { useSearchParams } from 'next/navigation'
import { ProjectService } from '@/lib/api'
import { ProjectsList } from "@/components/Projects/ProjectsList"

import { Project } from "@/types"
import { convertToProjectList } from "@/utils/projects"

export default async function ProjectsPage() {
  const searchParams = useSearchParams()

  const page = searchParams.get('page')
  const tag = searchParams.get('tag') || undefined
  const search = searchParams.get('query') || undefined

  const currentPage = parseInt(page as string, 10) || 1

  const { projects, pagy } = await ProjectService.getAll({ count: 1000, page: currentPage, tag, search })
  const convertedProjects = convertToProjectList(projects).projects

  let projectUrl = `/projects?page=${currentPage}`
  let previousProjectUrl = `/projects?page=${currentPage - 1}`

  if (tag) {
    postUrl += `&tag=${tag}`
  }

  if (search) {
    postUrl += `&query=${search}`
  }

  return (
    <>
      <h1 className="font-venice text-6xl text-accent mb-2">my projects</h1>
      <ProjectsList
        projects={convertedProjects}
        url={projectUrl}
        pagination={pagy.series}
        page={currentPage}
        previousPostUrl={previousProjectUrl}
        totalPages={pagy.pages}
      />
    </>
  )
}
