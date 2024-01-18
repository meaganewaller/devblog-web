'use client'

import Link from 'next/link'
import React from 'react'

import PageHeader from '@/components/page-header'

export default function NowPage() {
  return (
    <>
      <PageHeader
        title='now'
        centered={true}
        description="a snapshot of what i'm up to right now, inspired by <a href='https://nownownow.com/about' class='text-raspberry-pink hover:text-purple' target='_blank' rel='noreferrer'>nownownow</a>. <br/> last updated: 2024-01-14"
      />
      <ul>
        <li>
          <strong>Location:</strong> Jacksonville, FL
        </li>
        <li>
          <strong>Work:</strong> Senior Dev Consultant @ <Link href='https://testdouble.com'>Test Double</Link>
        </li>
        <li>
          <strong>Interests:</strong> Personal Knowledge Management, Pilates, and Taylor Swift are occupying my brain.
        </li>
        <li>
          <strong>Family:</strong> Getting married in 2024!
        </li>
        <li>
          <strong>Reading:</strong> Not much right now. I'm in a bit of a reading slump.
        </li>
        <li>
          <strong>Watching:</strong> The Challenge: All Stars, RuPaul's Drag Race, and Survivor is about to start back
          up!
        </li>
        <li>
          <strong>Listening:</strong> Putting{' '}
          <Link href='https://music.apple.com/us/playlist/girlhood/pl.u-kv9lGZ5TX1DmAx'>this playlist</Link> on
          frequently.
        </li>
        <li>
          <strong>Personal Projects:</strong> Wedding planning, <Link href='/blog'>blogging</Link>, and not much else!
        </li>
      </ul>
    </>
  )
}
