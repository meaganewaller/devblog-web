import Giscus from '@giscus/react'
import * as React from 'react'

import { giscusConfig } from '@/config/giscus'

const Comment = () => {
  return (
    <div id='comment' className='mx-w-prose mx-auto py-6'>
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
  )
}

export default Comment
