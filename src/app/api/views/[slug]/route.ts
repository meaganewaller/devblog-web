import { NextRequest, NextResponse } from 'next/server'
import apiClient from "@/lib/apiClient"
import { getSessionId } from "@/lib/server"

interface ViewsProp {
  params: {
    slug: string,
    sessionId: string
  }
}

export const GET = async (_request: NextRequest, { params }: ViewsProp) => {
  const slug = params.slug
  const { data } = await apiClient.get(`/views?viewable_type=Post&viewable_slug=${slug}`)

  return NextResponse.json({
    count: data.views.length
  })
}

export const POST = async (request: NextRequest, { params }: ViewsProp) => {
  try {
    const slug = params.slug
    const sessionId = getSessionId(request)
    await apiClient.post(`/views`, {
      view: {
        viewable_type: "Post",
        viewable_slug: slug,
        session_id: sessionId,
      }
    })

    return NextResponse.json({ slug })
  } catch (error) {
    return new Response("Could not post to views at this time. Please try later", { status: 500 })
  }
}
