import { CopyButton } from './copy-button'
import { tw } from '@/utils/tw'

export function Pre({
  children,
  raw,
  buttonClasses = 'absolute top-3 right-3 bg-accent-dark',
  ...props
}) {
  return (
    <pre {...props} className={clsx('relative', props.className)}>
      {children}
      <CopyButton text={raw} className={buttonClasses} />
    </pre>
  )
}
