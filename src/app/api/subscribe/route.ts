import { NextResponse } from 'next/server'

const API_KEY = process.env.CONVERTKIT_API_KEY
const BASE_URL = `https://api.convertkit.com/v3`
const CONVERTKIT_FORM_ID = process.env.CONVERTKIT_FORM_ID

function subscribeToForm(params: { email: string }) {
  const url = `${BASE_URL}/forms/${CONVERTKIT_FORM_ID}/subscribe`

  const headers = new Headers({
    'Content-Type': 'application/json; charset=utf-8',
  })

  try {
    return fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        api_key: API_KEY,
        email: params.email,
      }),
    })
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error(error)
    }
  }
}

export async function POST(req: Request) {
  const request = await req.json()
  if (!request?.name || !request?.email) {
    return NextResponse.json(
      { error: { message: 'Missing email' } },
      {
        status: 400,
      },
    )
  }

  await subscribeToForm({ email: request.email })

  return NextResponse.json(
    { success: true },
    {
      status: 201,
    },
  )
}
