'use client'

import { usePathname } from 'next/navigation'
import { useRef } from 'react'
import type { IReadTimeResults } from 'reading-time'

import { Clock, Eye } from '@/components/icons'
import PageHeader from '@/components/page-header'
import { BackButton, Container } from '@/components/ui'
import { tw } from '@/utils/tw'
import { formatDate } from '@/utils/date'

import useView from '../_hooks/use-view'
import StickyTitle from './sticky-title'

interface ContentMetaProps {
  title: string
  description?: string
  timestamp: string
  readingTime: IReadTimeResults | null
  slug: string
}

const ContentMeta = ({
  title,
  description,
  timestamp,
  readingTime,
  slug,
}: ContentMetaProps) => {
  const publishedDate = formatDate(timestamp)
  const { views } = useView({ slug, trackView: true })

  const pageHeaderRef = useRef<HTMLDivElement | null>(null)
  const pathname = usePathname()
  const segments = pathname.split('/')

  return (
    <>
      <PageHeader title={title} description={description} ref={pageHeaderRef} />
      <StickyTitle title={title} elementRef={pageHeaderRef} />
      <Container className={tw('mb-8')}>
        <BackButton href={`/${segments[1]}`} />
        <div
          className={tw(
            'flex flex-col sm:flex-row gap-2 justify-between text-muted-foreground text-sm font-medium',
          )}
        >
          <div>
            Published on
            <time dateTime={publishedDate} className={tw('px-1')}>
              {publishedDate}
            </time>
          </div>
          <div className={tw('flex items-center gap-4')}>
            <div className={tw('flex gap-1 items-center')}>
              <Clock />
              <span title="Estimated read time">{readingTime?.text}</span>
            </div>
            <div className={tw('flex gap-1 items-center')}>
              <Eye />
              <span title="Number of view(s)">{views?.total ?? '-'} views</span>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default ContentMeta
