import { useQuery } from '@tanstack/react-query'

function PostsList() {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchP
  })
}


