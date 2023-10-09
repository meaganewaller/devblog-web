'use client'
import Giscus from '@giscus/react'

import { giscusConfig } from '@/config/giscus'

export const Comments = () => (
  <div className="pt-4 max-w-prose mx-auto py-6" id="comments">
    <div className="mx-auto">
      <Giscus
        repo={giscusConfig.repo}
        repoId={giscusConfig.repoId}
        category={giscusConfig.category}
        categoryId={giscusConfig.categoryId}
        mapping={giscusConfig.mapping}
        reactionsEnabled={giscusConfig.reactionsEnabled}
        emitMetadata={giscusConfig.emitMetadata}
        inputPosition={giscusConfig.inputPosition}
        theme={'light'}
        lang='en'
        loading='eager'
      />
    </div>
  </div>
)
