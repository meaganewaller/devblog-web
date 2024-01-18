import { describe, expect, it } from 'vitest'

import { convertPost, convertPostList, convertToCategoryList, convertToTagList } from '../../utils/blogs'

describe('covertToCategoryList converts CategoryResponse[] to Category[]', () => {
  const tableData = [
    {
      id: 'category-abc-123',
      title: 'Category 1',
      description: 'Description 1',
      slug: 'category-1',
      cover_image: 'cover_image_url_1',
    },
    {
      id: 'category-def-456',
      title: 'Category 2',
      description: 'Description 2',
      slug: 'category-2',
      cover_image: 'cover_image_url_2',
    },
  ]

  const result = convertToCategoryList(tableData)

  it('has length of 2', () => {
    expect(result.categories).toHaveLength(2)
  })

  it('has correct title', () => {
    expect(result.categories[0].title).toBe('Category 1')
  })

  it('has correct description', () => {
    expect(result.categories[0].description).toBe('Description 1')
  })

  it('has correct slug', () => {
    expect(result.categories[0].slug).toBe('category-1')
  })

  it('has correct coverImage', () => {
    expect(result.categories[0].coverImage).toBe('cover_image_url_1')
  })

  it('has correct href', () => {
    expect(result.categories[0].href).toBe('/blog/categories/category-1')
  })
})

describe('convertToTagList converts string[] to Tag[]', () => {
  const stringTags = ['Tag 1', 'Tag 2', 'Tag 3']

  const result = convertToTagList(stringTags)

  it('has length of 3', () => {
    expect(result).toHaveLength(3)
  })

  it('has correct name', () => {
    expect(result[0].name).toBe('Tag 1')
  })

  it('has correct href', () => {
    expect(result[0].href).toBe('/blog?tag=Tag%201')
  })
})

describe('convertPost converts PostResponse to Post', async () => {
  const postResponse = {
    id: 'post-abc-123',
    title: 'Post 1',
    description: 'Description 1',
    slug: 'post-1',
    cover_image: 'cover_image_url_1',
    content: 'content 1',
    notion_id: 'notion_id_1',
    notion_updated_at: '2021-01-01',
    published: true,
    published_date: '2021-01-01',
    comment_count: '10',
    meta_description: 'meta_description 1',
    category: {
      id: 'category-abc-123',
      title: 'Category 1',
      description: 'Description 1',
      slug: 'category-1',
      cover_image: 'cover_image_url_1',
    },
    tags: ['Tag 1', 'Tag 2', 'Tag 3'],
    views: '5',
  }

  const result = await convertPost(postResponse)

  it('has correct category', () => {
    expect(result.category.title).toBe('Category 1')
  })

  it('has correct content', () => {
    expect(result.content).toBe('\n<p>content 1</p>\n')
  })

  it('has correct commentCount', () => {
    expect(result.commentCount).toBe(10)
  })

  it('has correct coverImage', () => {
    expect(result.coverImage).toBe('cover_image_url_1')
  })

  it('has correct description', () => {
    expect(result.description).toBe('Description 1')
  })

  it('has correct external', () => {
    expect(result.external).toBe(false)
  })

  it('has correct href', () => {
    expect(result.href).toBe('/blog/post-1')
  })

  it('has correct id', () => {
    expect(result.id).toBe('post-abc-123')
  })

  it('has correct isPublic', () => {
    expect(result.isPublic).toBe(true)
  })

  it('has correct lastEdited', () => {
    expect(result.lastEdited).toBe('2021-01-01')
  })

  it('has correct metaDescription', () => {
    expect(result.metaDescription).toBe('meta_description 1')
  })

  it('has correct notionId', () => {
    expect(result.notionId).toBe('notion_id_1')
  })

  it('has correct published', () => {
    expect(result.published).toBe(true)
  })

  it('has correct publishedDate', () => {
    expect(result.publishedDate).toBe('2021-01-01')
  })

  it('has correct readingTime', () => {
    expect(result.readingTime).toEqual({
      text: '1 min read',
      minutes: 0.01,
      time: 600,
      words: 2,
    })
  })

  it('has correct slug', () => {
    expect(result.slug).toBe('post-1')
  })

  it('has correct tags', () => {
    expect(result.tags).toEqual([
      {
        name: 'Tag 1',
        href: '/blog?tag=Tag%201',
      },
      {
        name: 'Tag 2',
        href: '/blog?tag=Tag%202',
      },
      {
        name: 'Tag 3',
        href: '/blog?tag=Tag%203',
      },
    ])
  })

  it('has correct title', () => {
    expect(result.title).toBe('Post 1')
  })

  it('has correct views', () => {
    expect(result.views).toBe(5)
  })
})

describe('convertPostList converts PostResponse[] to Post[]', async () => {
  const postResponse = [
    {
      id: 'post-abc-123',
      title: 'Post 1',
      description: 'Description 1',
      slug: 'post-1',
      cover_image: 'cover_image_url_1',
      content: 'content 1',
      notion_id: 'notion_id_1',
      notion_updated_at: '2021-01-01',
      published: true,
      published_date: '2021-01-01',
      comment_count: '10',
      meta_description: 'meta_description 1',
      category: {
        id: 'category-abc-123',
        title: 'Category 1',
        description: 'Description 1',
        slug: 'category-1',
        cover_image: 'cover_image_url_1',
      },
      tags: ['Tag 1', 'Tag 2', 'Tag 3'],
      views: '5',
    },
    {
      id: 'post-def-456',
      title: 'Post 2',
      description: 'Description 2',
      slug: 'post-2',
      cover_image: 'cover_image_url_2',
      content: 'content 2',
      notion_id: 'notion_id_2',
      notion_updated_at: '2021-01-02',
      published: true,
      published_date: '2021-01-02',
      comment_count: '20',
      meta_description: 'meta_description 2',
      category: {
        id: 'category-def-456',
        title: 'Category 2',
        description: 'Description 2',
        slug: 'category-2',
        cover_image: 'cover_image_url_2',
      },
      tags: ['Tag 4', 'Tag 5', 'Tag 6'],
      views: '10',
    },
  ]

  const result = await convertPostList(postResponse)

  it('has length of 2', () => {
    expect(result).toHaveLength(2)
  })

  it('has correct category', () => {
    expect(result[0].category.title).toBe('Category 1')
    expect(result[1].category.title).toBe('Category 2')
  })

  it('has correct content', () => {
    expect(result[0].content).toBe('\n<p>content 1</p>\n')
    expect(result[1].content).toBe('\n<p>content 2</p>\n')
  })

  it('has correct commentCount', () => {
    expect(result[0].commentCount).toBe(10)
    expect(result[1].commentCount).toBe(20)
  })

  it('has correct coverImage', () => {
    expect(result[0].coverImage).toBe('cover_image_url_1')
    expect(result[1].coverImage).toBe('cover_image_url_2')
  })

  it('has correct description', () => {
    expect(result[0].description).toBe('Description 1')
    expect(result[1].description).toBe('Description 2')
  })

  it('has correct external', () => {
    expect(result[0].external).toBe(false)
    expect(result[1].external).toBe(false)
  })

  it('has correct href', () => {
    expect(result[0].href).toBe('/blog/post-1')
    expect(result[1].href).toBe('/blog/post-2')
  })

  it('has correct id', () => {
    expect(result[0].id).toBe('post-abc-123')
    expect(result[1].id).toBe('post-def-456')
  })

  it('has correct isPublic', () => {
    expect(result[0].isPublic).toBe(true)
    expect(result[1].isPublic).toBe(true)
  })

  it('has correct lastEdited', () => {
    expect(result[0].lastEdited).toBe('2021-01-01')
    expect(result[1].lastEdited).toBe('2021-01-02')
  })

  it('has correct metaDescription', () => {
    expect(result[0].metaDescription).toBe('meta_description 1')
    expect(result[1].metaDescription).toBe('meta_description 2')
  })

  it('has correct notionId', () => {
    expect(result[0].notionId).toBe('notion_id_1')
    expect(result[1].notionId).toBe('notion_id_2')
  })

  it('has correct published', () => {
    expect(result[0].published).toBe(true)
    expect(result[1].published).toBe(true)
  })

  it('has correct publishedDate', () => {
    expect(result[0].publishedDate).toBe('2021-01-01')
    expect(result[1].publishedDate).toBe('2021-01-02')
  })

  it('has correct readingTime', () => {
    expect(result[0].readingTime).toEqual({
      text: '1 min read',
      minutes: 0.01,
      time: 600,
      words: 2,
    })
    expect(result[1].readingTime).toEqual({
      text: '1 min read',
      minutes: 0.01,
      time: 600,
      words: 2,
    })
  })

  it('has correct slug', () => {
    expect(result[0].slug).toBe('post-1')
    expect(result[1].slug).toBe('post-2')
  })

  it('has correct tags', () => {
    expect(result[0].tags).toEqual([
      {
        name: 'Tag 1',
        href: '/blog?tag=Tag%201',
      },
      {
        name: 'Tag 2',
        href: '/blog?tag=Tag%202',
      },
      {
        name: 'Tag 3',
        href: '/blog?tag=Tag%203',
      },
    ])
    expect(result[1].tags).toEqual([
      {
        name: 'Tag 4',
        href: '/blog?tag=Tag%204',
      },
      {
        name: 'Tag 5',
        href: '/blog?tag=Tag%205',
      },
      {
        name: 'Tag 6',
        href: '/blog?tag=Tag%206',
      },
    ])
  })

  it('has correct title', () => {
    expect(result[0].title).toBe('Post 1')
    expect(result[1].title).toBe('Post 2')
  })

  it('has correct views', () => {
    expect(result[0].views).toBe(5)
    expect(result[1].views).toBe(10)
  })
})
