import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { checkEmail, checkMessage, checkName } from '@/utils'

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    if (
      !(
        checkEmail(email) &&
        checkMessage(message) &&
        checkMessage(subject) &&
        checkName(name)
      )
    ) {
      return NextResponse.json({
        message: 'Email, message, subject, or name not valid',
        success: false,
      })
    }

    await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/contact`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
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
    return NextResponse.json({ message: error, success: false })
  }
}
