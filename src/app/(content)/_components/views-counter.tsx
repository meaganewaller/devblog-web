import { Suspense } from 'react'

import LoadingSpinner from '@/app/loading'

import ViewsFetcher from './views-fetcher'
interface ViewsCounterProps {
  slug: string
}

const ViewsCounter = ({ slug }: ViewsCounterProps) => {
  return (
    <Suspense
      fallback={
        <>
          <LoadingSpinner />
        </>
      }
    >
      <ViewsFetcher slug={slug} />
    </Suspense>
  )
}

export default ViewsCounter
