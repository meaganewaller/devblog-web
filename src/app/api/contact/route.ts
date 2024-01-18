import { NextResponse } from 'next/server'

import apiClient from '@/lib/apiClient'

export const POST = async (req: Request) => {
  try {
    const { name = '', email = '', subject = '', message = '' } = await req.json()
    await apiClient.post('/contact', {
      contact: {
        name,
        email,
        subject,
        message,
      },
    })
    return NextResponse.json({ message: 'ok' }, { status: 200 })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      {
        message: 'Could not submit contact form at this time. Please try later',
      },
      { status: 500 },
    )
  }
}
