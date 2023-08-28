import { TbCalendarEvent } from 'react-icons/tb'

import { formatReadableData, formatToISO } from '@/utils/date'
type Props = {
  publishedAt: string
  iconSize?: number
}

export const PostPublishedLabel = (props: Props) => {
  const ISOdate = formatToISO(props.publishedAt)
  return (
    <span className='flex items-center text-sm'>
      <TbCalendarEvent size={props?.iconSize ?? 14} />

      <time className='ml-1' dateTime={ISOdate}>
        {formatReadableData(props.publishedAt)}
      </time>
    </span>
  )
}
