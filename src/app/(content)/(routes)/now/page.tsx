'use client'

import React from 'react'

import PageHeader from '@/components/page-header'

export default function NowPage() {
  return (
    <div className='mx-auto max-w-full'>
      <PageHeader title='/now' centered={true} />
      <div className='my-4 flex flex-wrap justify-center gap-3 px-4 md:my-8 md:px-8'>
        <div className='pt-12'>
          <h3 className='md:leading-14 text-xl font-extrabold leading-9 tracking-tight text-accent dark:text-accent-dark sm:text-2xl sm:leading-10 md:text-4xl'>
            Currently
          </h3>
        </div>
      </div>
    </div>
  )
}
