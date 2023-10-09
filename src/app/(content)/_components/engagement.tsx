import { tw } from '@/utils/tw'

import Reactions from './reactions'
import ShareButton from './share-button'

interface EngagementProps {
  slug: string
}

const Engagement = ({ slug }: EngagementProps) => {
  return (
    <div className={tw('mt-16 flex mx-auto w-full max-w-sm', 'sm:max-w-md')}>
      <div
        className={tw('relative flex justify-between items-center w-full gap-4 p-4 rounded-lg bg-card')}
      >
        <Reactions slug={slug} />
        <ShareButton slug={slug} />
      </div>
    </div>

  )
}

export default Engagement
