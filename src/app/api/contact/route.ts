import { NextResponse } from 'next/server'

import apiClient from '@/lib/apiClient'

export const POST = async (req: any, res: any) => {
  try {
    const { name = '', email = '', subject = '', message = '' }: any = await req.json()
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
      { message: 'Could not submit contact form at this time. Please try later' },
      { status: 500 },
    )
  }
}
// import type { NextRequest } from 'next/server'
// import { NextResponse } from 'next/server'

// import apiClient from '@/lib/apiClient'

// import { checkEmail, checkMessage, checkName } from '@/utils'

// export const POST = async (request: NextRequest) => {
//   try {
//     const { name, email, subject, message } = await request.json()

//     if (!(checkEmail(email) && checkMessage(message) && checkMessage(subject) && checkName(name))) {
//       return NextResponse.json({
//         message: 'Email, message, subject, or name not valid',
//         success: false,
//       })
//     }

//     const resp = await apiClient
//       .post('/contact', {
//         contact: {
//           name,
//           email,
//           subject,
//           message,
//         },
//       })
//       .then(() => {
//         return NextResponse.json({ message: 'Message sent', success: true })
//       })
//       .catch((err) => {
//         return NextResponse.json({ message: err, success: false })
//       })
//   } catch (error) {
//     return new Response('Could not submit contact form at this time. Please try later', { status: 500 })
//   }

//   return new Response('Submitted', { status: 200 })
// }
