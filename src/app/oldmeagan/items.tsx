'use client'

import React from 'react'
import useSWR from 'swr'

import fetcher from '@/lib/fetcher'

import { WakatimeData } from '@/types'

const Items = () => {
  const { data: wakaData } = useSWR<WakatimeData>('/api/wakatime', fetcher)

  return (
    <>
      <div className='mx-auto my-0 mt-[2em] max-w-[30em] border-[0.25em] border-solid border-accent bg-background p-[1em] shadow-accent'>
        <h1 className='w-full max-w-full overflow-hidden overflow-ellipsis text-center font-venice text-3xl font-light capitalize tracking-wide'>
          Coding Stats - {wakaData?.range}
        </h1>
        {wakaData &&
          wakaData.languages.slice(0, 5).map((item, i) => (
            <div key={i} className='font-extra'>
              <span>
                {item.name} &middot; {item.text}
              </span>
              <div className='mb-[1em] flex w-full border-2 border-solid border-accent bg-[#fff]'>
                <div
                  className='w-full bg-accent px-0 py-[1em] transition-all duration-150 ease-in'
                  style={{ flexBasis: `${item.percent}%` }}
                />
              </div>
            </div>
          ))}
      </div>
    </>
  )
}

export default Items
