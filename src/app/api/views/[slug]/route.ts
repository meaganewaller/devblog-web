import { NextRequest, NextResponse } from 'next/server'

import apiClient from '@/lib/apiClient'

interface ViewsProp {
  params: {
    slug: string
    sessionId: string
  }
}

export const GET = async (_request: NextRequest, { params }: ViewsProp) => {
  const slug = params.slug
  const { data } = await apiClient.get(`/views?viewable_type=Post&viewable_slug=${slug}`)

  return NextResponse.json({
    count: data.views_count,
  })
}

export const POST = async (req: Request) => {
  const request = await req.json()

  if (!request?.name || !request?.email || !request?.subject || !request?.message) {
    return NextResponse.json(
      { error: { message: 'Missing email, name, subject or message' } },
      {
        status: 400,
      },
    )
  }

  await apiClient.post('/contact', {
    body: JSON.stringify({
      contact: {
        name: request.name,
        email: request.email,
        subject: request.subject,
        message: request.message,
      },
    }),
  })
}
