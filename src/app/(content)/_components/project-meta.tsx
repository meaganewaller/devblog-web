'use client'

import { usePathname } from 'next/navigation'
import { useRef } from 'react'

import { GitHub, ExternalLink } from '@/components/icons'
import PageHeader from '@/components/page-header'
import { BackButton, Container } from '@/components/ui'

import { tw } from '@/utils/tw'

import StickyTitle from './sticky-title'

import { Repository  } from "@/types"

interface ProjectMetaProps {
  title: string
  description?: string
  slug: string
  githubLinks?: Repository[]
  demoLink?: string
}

const ProjectMeta = ({ title, description, slug, githubLinks, demoLink }: ProjectMetaProps) => {
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
          className={tw('text-muted-foreground flex flex-col justify-between gap-2 text-sm font-medium sm:flex-row')}
        >
          {githubLinks && (
            <div className={tw('flex items-center gap-4')}>
              {githubLinks.map((githubLink) => (
                <a key={githubLink.name} href={githubLink.website} target='_blank' rel='noreferrer' className={tw('flex items-center gap-1')}>
                  <GitHub />
                  <span>{githubLink.name} repo</span>
                </a>
              ))}
            </div>
          )}
        </div>
      </Container>
    </>
  )
}

export default ProjectMeta
