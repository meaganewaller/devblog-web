import { format, formatDistanceToNow } from 'date-fns'
import { enUS } from 'date-fns/locale'
import { match, P } from 'ts-pattern'

export const getDateISO = () => new Date().toISOString()
export const formatDateToISO = (date: Date) => date.toISOString()

const getActualDate = (date: string | Date) => {
  return match(date)
    .with(P.string, (value) => new Date(value))
    .with(P.instanceOf(Date), (value) => value)
    .exhaustive()
}

export const formatDate = (date: string | Date, type?: 'full' | 'day-month' | 'month-year') => {
  const token = match(type)
    .with('month-year', () => 'MMMM yyyy')
    .with('day-month', () => 'dd MMMM')
    .otherwise(() => 'eeee, MMMM dd, yyyy')

  const actualDate = getActualDate(date)
  return format(actualDate, token, { locale: enUS })
}

export const formatDistance = (date: string | Date) => {
  const actualDate = getActualDate(date)
  return formatDistanceToNow(actualDate, { locale: enUS })
}
