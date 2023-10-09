import type { ShareType } from '@/types'
import { useRequest } from '@/hooks/use-request'

const useShare = (slug: string) => {
  const { data, mutate, loading } = useRequest<{ total: number }>(
    `/api/shares/${slug}`,
  )

  const addShare = (type: ShareType) => {
    mutate(
      {
        ...data,
        total: (data?.total ?? 0) + 1,
      },
      false,
    )
    fetch(`/api/shares/${slug}`, {
      method: 'POST',
      body: JSON.stringify({ type }),
    })
  }

  return { shares: data, addShare, loading }
}

export default useShare
