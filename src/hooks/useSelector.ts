import { gsap } from 'gsap'
import { useMemo, useRef } from 'react'

export const useSelector = () => {
  const ref = useRef(null)
  const q = useMemo(() => gsap.utils.selector(ref), [ref])
  return { q, ref }
}
