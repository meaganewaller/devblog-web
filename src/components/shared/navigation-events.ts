'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

import analytics from '@/utils/analytics'

export function NavigationEvents() {
  const pathname = usePathname()

  useEffect(() => {
    analytics.trackEvent('pageview', { path: pathname })
  }, [pathname])
}
