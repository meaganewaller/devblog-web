import { formatDate } from './date'
import { transformMarkdown } from './markdown-to-html'

import { Project, ProjectResponse } from '@/types'

export const convertProject = async (project: ProjectResponse) => {
  const content = await transformMarkdown(project.content)

  const tagList = project.tags || []
  const tags = tagList.map((tag: string) => {
    return {
      name: tag,
      href: `/projects?tag=${tag.toLowerCase().replace(/ /g, '-')}`,
    }
  })

  return {
    content: content,
    coverImage: project.cover_image || 'https://placekitten.com/800/600',
    creationDate: formatDate(project.creation_date, 'month-year'),
    description: project.description,
    featured: project.featured,
    homepageUrl: project.homepage_url,
    lastUpdate: formatDate(project.last_update, 'month-year'),
    slug: project.slug,
    tags,
    title: project.title,
  } as Project
}

export const convertProjectList = async (tableData: ProjectResponse[]) => {
  const projects: Project[] = []

  for (const project of tableData) {
    projects.push(await convertProject(project))
  }

  return projects
}
