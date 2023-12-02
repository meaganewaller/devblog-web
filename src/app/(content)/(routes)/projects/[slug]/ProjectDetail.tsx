import Image from 'next/image'
import '@/styles/prism-shades-of-purple.css'

import { Container } from '@/components/ui'

import ProjectMeta from '@/app/(content)/_components/project-meta'
import { ProjectFooter } from '@/app/(content)/_components/project-footer'
import TagLink from '@/app/(content)/_components/tag'
import { useDetailStore } from '@/store/project.store'
import tw from '@/utils/tw'

export default function ProjectDetail() {
  const { project } = useDetailStore()

  return (
    <div>
      {project && (
        <>
          <aside data-referer data-slug={project.slug} data-title={project.title}></aside>
          <Container>
            <ProjectMeta title={project.title} description={project.description} slug={project.slug} githubLinks={project.repositories} />
            <div className='my-5 self-center'>
              <div id='image-cover self-center'>
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  priority
                  className={tw('object-cover')}
                  width='800'
                  height='600'
                />
              </div>
            </div>
            <div
              className={tw('my-10 max-w-[95%] self-center', 'dark:prose-dark')}
              dangerouslySetInnerHTML={{ __html: project.content }}
            />

            {project.tags.length > 0 && (
              <div className={tw('mt-16 flex items-center gap-1 font-mono text-md')}>
                Tags:
                <div className={tw('flex flex-wrap gap-1')}>
                  {project.tags?.map((tag) => (
                    <span key={tag.name}>
                      <TagLink tag={tag} />
                    </span>
                  ))}
                </div>
              </div>
            )}
            <ProjectFooter />
          </Container>
        </>
      )}
    </div>
  )
}
