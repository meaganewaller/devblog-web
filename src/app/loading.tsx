import { Ring } from '@/components/core/loaders'

const Loading = () => {
  return (
    <div className={'mt-12 flex w-full flex-1 flex-col items-center justify-center bg-transparent'}>
      <Ring size={48} lineWeight={6} speed={2} color={'var(--color-accent, #88a4e6)'} />
    </div>
  )
}

export default Loading
