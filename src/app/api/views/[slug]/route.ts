import { NextRequest, NextResponse } from 'next/server'

import apiClient from '@/lib/apiClient'
import { getSessionId } from '@/lib/server'

interface ViewsProps {
  params: {
    slug: string
    sessionId: string
  }
}

export const GET = async (_req: NextRequest, { params }: ViewsProps) => {
  const slug = params.slug

  const { data } = await apiClient.get(`/views?viewable_type=Post&viewable_slug=${slug}`)

  return NextResponse.json({
    views: data.views_count ?? 0,
  })
}

export const POST = async (req: NextRequest, { params }: ViewsProps) => {
  try {
    const slug = params.slug
    const sessionId = getSessionId(req)
    await apiClient.post('/views', {
      view: {
        viewable_type: 'Post',
        viewable_slug: slug,
        session_id: sessionId,
      },
    })

    const { data } = await apiClient.get(`/views?viewable_type=Post&viewable_slug=${slug}`)

    return NextResponse.json({
      count: data.views_count ?? 0,
    })
  } catch (error) {
    return new Response('Could not post to views at this time. Please try later', { status: 500 })
  }
}
