export const convertToProjectList = (tableData: any) => {
  const projects = tableData.map((project: any) => {
    return {
      contributors: project.contributors,
      creationDate: project.creation_date,
      demoScreenshotUrls: project.demo_screenshot_urls,
      description: project.description,
      difficulty: project.difficulty_level,
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
      status: project.status,
      tags: project.tags,
      title: project.title,
      slug: project.id,
      coverImage: 'https://placekitten.com/800/600',
    }
  })

  return { projects }
}
