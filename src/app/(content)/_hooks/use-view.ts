import { useEffect } from 'react'
// import { useRequest } from '@/hooks/use-request'

export const useView = (slug: string) => {
  const registerView = (slug: string) => {
    fetch(`/api/views/${slug}`, {
      method: 'POST',
    })
  }

  useEffect(() => {
    registerView(slug)
  }, [slug])
}

export default useView
