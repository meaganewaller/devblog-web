import Giscus from '@giscus/react'
import { useTheme } from 'next-themes'

export default function BlogComments() {
  const { resolvedTheme } = useTheme()
  const theme = resolvedTheme === 'dark' ? 'dark' : 'light'

  return (
    <Giscus
      id='comments'
      repo='meaganwaller/developer-blog'
      repoId='R_kgDOKEhjGA'
      category='Announcements'
      categoryId='DIC_kwDOKEhjGA4CQDk'
      mapping='og:title'
      reactionsEnabled='0'
      emitMetadata='1'
      inputPosition='bottom'
      theme={theme}
      strict='1'
      lang='en'
    />
  )
}
