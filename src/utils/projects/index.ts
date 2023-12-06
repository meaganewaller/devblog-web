import { Project, ProjectResponse } from '@/types'
import { transformMarkdown } from '../markdown-to-html'

export const convertProject = async (project: ProjectResponse) => {
  const content = await transformMarkdown(project.content)

  return {
    content: content,
    contributors: project.contributors,
    coverImage: 'https://placekitten.com/800/600',
    creationDate: project.creation_date,
    demoScreenshotUrls: project.demo_screenshot_urls,
    description: project.description,
    difficultyLevel: project.difficulty_level,
    documentationUrl: project.documentation_url,
    featured: project.featured,
    framework: project.framework,
    homepageUrl: project.homepage_url,
    language: project.language,
    lastUpdate: project.last_update,
    license: project.license,
    openIssues: project.open_issues,
    pullRequests: project.pull_requests,
    repositoryUrl: project.repository_url,
    repositories: project.repository_links,
    slug: project.slug,
    status: project.status,
    tags: [],
    title: project.title,
  } as Project
}

export const convertProjectList = async (tableData: ProjectResponse[]) => {
  const projects: Project[] = []

  tableData.forEach((project: ProjectResponse) => {
    const converted = convertProject(project).then((project) => {
      return project.result
    })

    projects.push(converted)
  })

  return { projects }
}
