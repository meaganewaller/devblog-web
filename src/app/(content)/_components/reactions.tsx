'use client'

import type { ReactionType } from '@/types'
import { m, useAnimationControls } from 'framer-motion'
import { useEffect } from 'react'

import { Counter } from '@/components/ui'
import { MAX_REACTIONS_PER_SESSION } from '../_constants/reactions'
import { useReactions } from '../_hooks/use-reactions'
import EmojiReaction from './emoji-reaction'
import { tw } from '@/utils/tw'

interface ReactionsProps {
  slug: string
}

const Reactions = ({ slug }: ReactionsProps) => {
  const { reactions, addReaction, loading } = useReactions(slug)
  const controls = useAnimationControls()
  useEffect(() => {
    if (!loading) {
      controls.start({
        y: 0,
        opacity: 1,
        pointerEvents: 'auto',
        transition: {
          delay: 0.2,
          duration: 0.15,
        },
      })
    }
  }, [controls, loading])

  const userReactions = reactions?.user?.reactions
  const contentReactions = reactions?.content?.reactions

  const {
    LIKED = 0,
    LAUGHED = 0,
    LOVED = 0,
    LEARNED = 0,
  } = contentReactions ?? {}

  const getRemainingQuota = (type: ReactionType) => {
    return MAX_REACTIONS_PER_SESSION - (userReactions?.[type] ?? 0)
  }

  const reachMaximumQuota = (type: ReactionType) => {
    return getRemainingQuota(type) <= 0
  }

  return (
    <m.div
      className={tw('relative pointer-events-auto flex items-center z-[50]')}
      initial={{
        y: 16,
        opacity: 0,
        pointerEvents: 'none',
      }}
      animate={controls}
    >
      <div className={tw('flex items-center gap-4')}>
        <div className={tw('flex flex-col items-center gap-2')}>
          <EmojiReaction
            title="Like"
            defaultEmoji="/static/images/emojis/like.svg"
            animatedEmoji="/static/images/emojis/like.svg"
            disabledEmoji="/static/images/emojis/like.svg"
            disabled={reachMaximumQuota('LIKED')}
            onClick={() => {
              addReaction('LIKED')
            }}
          />
          <Counter count={LIKED} />
        </div>

        <div className={tw('flex flex-col items-center gap-2')}>
          <EmojiReaction
            title="Laughed"
            defaultEmoji="/static/images/emojis/haha.svg"
            animatedEmoji="/static/images/emojis/haha.svg"
            disabledEmoji="/static/images/emojis/haha.svg"
            disabled={reachMaximumQuota('LAUGHED')}
            onClick={() => {
              addReaction('LAUGHED')
            }}
          />
          <Counter count={LAUGHED} />
        </div>

        <div className={tw('flex flex-col items-center gap-2')}>
          <EmojiReaction
            title="Love"
            defaultEmoji="/static/images/emojis/love.svg"
            animatedEmoji="/static/images/emojis/love.svg"
            disabledEmoji="/static/images/emojis/love.svg"
            disabled={reachMaximumQuota('LOVED')}
            onClick={() => {
              addReaction('LOVED')
            }}
          />
          <Counter count={LOVED} />
        </div>

        <div className={tw('flex flex-col items-center gap-2')}>
          <EmojiReaction
            title="Think"
            defaultEmoji="/static/images/emojis/learned.svg"
            animatedEmoji="/static/images/emojis/learned.svg"
            disabledEmoji="/static/images/emojis/learned.svg"
            disabled={reachMaximumQuota('LEARNED')}
            onClick={() => {
              addReaction('LEARNED')
            }}
          />
          <Counter count={LEARNED} />
        </div>
      </div>
    </m.div>
  )
}

export default Reactions

