import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const q = searchParams.get('q')
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/posts?q=${q}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const results = await res.json()

  return NextResponse.json({
    results
  })
}
