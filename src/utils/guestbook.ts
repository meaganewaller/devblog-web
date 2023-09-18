import { GuestbookResponse } from '@/types'

export const convertToGuestbookList = (tableData: GuestbookResponse[]) => {
  const guestbookEntries = tableData.map((entry: GuestbookResponse) => {
    return {
      id: entry.id,
      name: entry.name,
      email: entry.email,
      date: entry.published_date,
      message: entry.message,
    }
  })

  return { guestbookEntries }
}
