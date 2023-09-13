import * as React from 'react'
import Giscus from '@giscus/react'
import { giscusConfig } from '@/config/giscus'

const Comment = () => {
  return (
    <div id="comment" className="mx-auto mx-w-prose py-6">
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
        lang="en"
        loading="eager"
      />
    </div>
  )
}

export default Comment
