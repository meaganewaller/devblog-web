export const convertToGuestbookList = (tableData: any) => {
  const guestbookEntries = tableData.map((entry: any) => {
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
