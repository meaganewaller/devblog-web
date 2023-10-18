'use client'

import { m, useAnimationControls } from 'framer-motion'
import { useEffect } from 'react'

import { Counter } from '@/components/ui'
import { useReactionDetail } from '../_hooks/use-reactions'
import EmojiReaction from './emoji-reaction'
import tw from '@/utils/tw'

interface ReactionsProps {
  slug: string
}

const Reactions = ({ slug }: ReactionsProps) => {
  const { data } = useReactionDetail(slug)
  const controls = useAnimationControls()
  useEffect(() => {
    console.log("DATA IS:", data)
    if (data) {
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
  }, [controls, data])

  const contentReactions = data?.map((r) => r.kind)

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
            onClick={() => {
            }}
          />
          {contentReactions && (
            <Counter count={contentReactions.filter((r) => r.kind === "like").length} />
          )}
        </div>

        <div className={tw('flex flex-col items-center gap-2')}>
          <EmojiReaction
            title="Laughed"
            defaultEmoji="/static/images/emojis/haha.svg"
            animatedEmoji="/static/images/emojis/haha.svg"
            disabledEmoji="/static/images/emojis/haha.svg"
            onClick={() => {
            }}
          />
          <Counter count={0} />
        </div>

        <div className={tw('flex flex-col items-center gap-2')}>
          <EmojiReaction
            title="Love"
            defaultEmoji="/static/images/emojis/love.svg"
            animatedEmoji="/static/images/emojis/love.svg"
            disabledEmoji="/static/images/emojis/love.svg"
            onClick={() => {
            }}
          />
          <Counter count={0} />
        </div>

        <div className={tw('flex flex-col items-center gap-2')}>
          <EmojiReaction
            title="Think"
            defaultEmoji="/static/images/emojis/learned.svg"
            animatedEmoji="/static/images/emojis/learned.svg"
            disabledEmoji="/static/images/emojis/learned.svg"
            onClick={() => {
            }}
          />
          <Counter count={0} />
        </div>
      </div>
    </m.div>
  )
}

export default Reactions

