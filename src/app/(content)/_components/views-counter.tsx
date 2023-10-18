import { Suspense } from 'react'
import ViewsFetcher from './views-fetcher'
import LoadingSpinner from '@/app/loading'
interface ViewsCounterProps {
  slug: string
}

const ViewsCounter = ({ slug }: ViewsCounterProps) => {
  return (
    <Suspense fallback={
      <><LoadingSpinner /></>
    }
    >
      <ViewsFetcher slug={slug} />
    </Suspense>
  )
}

export default ViewsCounter

