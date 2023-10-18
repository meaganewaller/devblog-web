import { NextRequest, NextResponse } from 'next/server'
import apiClient from '@/lib/apiClient'
import { getSessionId } from '@/lib/server'
import { ReactionType } from '@/types'

interface ReactionsProps {
  params: {
    slug: string
  }
}

export const GET = async (_request: NextRequest, { params }: ReactionsProps) => {
  const slug = params.slug
  const { data } = await apiClient.get(`/reactions?reactable_type=Post&reactable_slug=${slug}`)

  return NextResponse.json({
    like_count: data.likes.length,
    love_count: data.loves.length,
    til_count: data.tils.length,
    haha_count: data.hahas.count,
    wow_count: data.wows.count,
    sparkle_count: data.sparkles.count,
  })
}

export const POST = async (request: NextRequest, { params }: ReactionsProps) => {
  try {
    const slug = params.slug
    const sessionId = getSessionId(request)
    await apiClient.post(`/reactions`, {
      reaction: {
        reactable_type: "Post",
        reactable_slug: slug,
        session_id: sessionId,
      }
    })

    return NextResponse.json({ slug })
  } catch (err) {
    return new Response("Could not post to reactions at this time. Plese try later.", { status: 500 } )
  }
}
