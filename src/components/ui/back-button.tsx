'use client'

import { useRouter } from 'next/navigation'

import { tw } from '@/utils/tw'

import { ArrowLeftCircle } from '../icons'
import Link from './link'

interface BackButtonProps {
  href?: string
}

const BackButton = ({ href }: BackButtonProps) => {
  const router = useRouter()

  const className =
    'flex gap-2 w-max hover:gap-3 items-center mb-4 transition-all duration-200 font-medium cursor-pointer'

  return (
    <div className={tw('w-fit')}>
      {href ? (
        <Link
          href={href}
          passHref
          showExternalLinkIcon={false}
          className={tw(className)}
        >
          <ArrowLeftCircle />
          <span>Back</span>
        </Link>
      ) : (
        <div className={tw(className)} onClick={() => router.back()}>
          <ArrowLeftCircle />
          <span>Back</span>
        </div>
      )}
    </div>
  )
}

export default BackButton
