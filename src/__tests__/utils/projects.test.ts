import { describe, it, expect } from 'vitest'
import { convertProject, convertProjectList } from '../../utils/projects'

describe('convertProject', () => {
  it('returns converted project', async () => {
    const project = {
      content: 'Project 1',
      cover_image: 'cover_image_url_1',
      creation_date: '2021-05-02T04:00:00.000Z',
      description: 'Description 1',
      featured: true,
      homepage_url: 'https://homepage_url_1.com',
      id: 'project-abc-123',
      last_update: '2021-05-02T04:00:00.000Z',
      slug: 'project-1',
      tags: ['Tag 1', 'Tag 2', 'Tag 3'],
      title: 'Project 1',
    }

    const result = await convertProject(project)

    expect(result).toEqual({
      content: '\n<p>Project 1</p>\n',
      coverImage: 'cover_image_url_1',
      creationDate: 'May 2021',
      description: 'Description 1',
      featured: true,
      homepageUrl: 'https://homepage_url_1.com',
      lastUpdate: 'May 2021',
      slug: 'project-1',
      tags: [
        {
          name: 'Tag 1',
          href: '/projects?tag=tag-1',
        },
        {
          name: 'Tag 2',
          href: '/projects?tag=tag-2',
        },
        {
          name: 'Tag 3',
          href: '/projects?tag=tag-3',
        },
      ],
      title: 'Project 1',
    })
  })
})

describe('convertProjectList', () => {
  it('returns converted project list', async () => {
    const projectList = [
      {
        content: 'Project 1',
        cover_image: 'cover_image_url_1',
        creation_date: '2021-05-02T04:00:00.000Z',
        description: 'Description 1',
        featured: true,
        homepage_url: 'https://homepage_url_1.com',
        id: 'project-abc-123',
        last_update: '2021-05-02T04:00:00.000Z',
        slug: 'project-1',
        tags: ['Tag 1', 'Tag 2', 'Tag 3'],
        title: 'Project 1',
      },
      {
        content: 'Project 2',
        cover_image: 'cover_image_url_2',
        creation_date: '2021-05-02T04:00:00.000Z',
        description: 'Description 2',
        featured: true,
        homepage_url: 'https://homepage_url_2.com',
        id: 'project-abc-456',
        last_update: '2021-05-02T04:00:00.000Z',
        slug: 'project-2',
        tags: ['Tag 1', 'Tag 2', 'Tag 3'],
        title: 'Project 2',
      },
    ]

    const result = await convertProjectList(projectList)

    expect(result).toEqual([
      {
        content: '\n<p>Project 1</p>\n',
        coverImage: 'cover_image_url_1',
        creationDate: 'May 2021',
        description: 'Description 1',
        featured: true,
        homepageUrl: 'https://homepage_url_1.com',
        lastUpdate: 'May 2021',
        slug: 'project-1',
        tags: [
          {
            name: 'Tag 1',
            href: '/projects?tag=tag-1',
          },
          {
            name: 'Tag 2',
            href: '/projects?tag=tag-2',
          },
          {
            name: 'Tag 3',
            href: '/projects?tag=tag-3',
          },
        ],
        title: 'Project 1',
      },
      {
        content: '\n<p>Project 2</p>\n',
        coverImage: 'cover_image_url_2',
        creationDate: 'May 2021',
        description: 'Description 2',
        featured: true,
        homepageUrl: 'https://homepage_url_2.com',
        lastUpdate: 'May 2021',
        slug: 'project-2',
        tags: [
          {
            name: 'Tag 1',
            href: '/projects?tag=tag-1',
          },
          {
            name: 'Tag 2',
            href: '/projects?tag=tag-2',
          },
          {
            name: 'Tag 3',
            href: '/projects?tag=tag-3',
          },
        ],
        title: 'Project 2',
      },
    ])
  })
})
