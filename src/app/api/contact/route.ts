import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import apiClient from '@/lib/apiClient'

import { checkEmail, checkMessage, checkName } from '@/utils'

export const POST = async (request: NextRequest) => {
  try {
    const { name, email, subject, message } = await request.json()

    if (!(checkEmail(email) && checkMessage(message) && checkMessage(subject) && checkName(name))) {
      return NextResponse.json({
        message: 'Email, message, subject, or name not valid',
        success: false,
      })
    }

    await apiClient
      .post('/contact', {
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
        }),
      })
      .then(() => {
        return NextResponse.json({ message: 'Message sent', success: true })
      })
      .catch((err) => {
        return NextResponse.json({ message: err, success: false })
      })
  } catch (error) {
    return new Response('Could not submit contact form at this time. Please try later', { status: 500 })
  }
}
