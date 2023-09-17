import { NextResponse } from 'next/server'

import { WakatimeRes } from '@/types'

export const dynamic = 'force-dynamic'

export const GET = async () => {
  const res = await fetch(
    'https://wakatime.com/api/v1/users/current/stats/last_7_days',
    {
      headers: {
        Authorization: `Basic ${Buffer.from(
          process.env.WAKATIME_API_KEY as string,
        ).toString('base64')}`,
      },
    },
  )

  const data: WakatimeRes = await res.json()

  return NextResponse.json({
    languages: data.data.languages,
    range: data.data.human_readable_range,
  })
}
