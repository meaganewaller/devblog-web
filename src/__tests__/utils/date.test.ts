import { describe, expect, it, vi } from 'vitest'

import * as date from '../../utils/date'

describe('getDateISO', () => {
  it('returns ISO date', () => {
    vi.useFakeTimers().setSystemTime(new Date('05-02-2021').getTime())

    expect(date.getDateISO()).toBe('2021-05-02T04:00:00.000Z')
  })
})

describe('formatDateToISO', () => {
  it('returns ISO date', () => {
    const testDate = new Date('05-02-2021')
    expect(date.formatDateToISO(testDate)).toBe('2021-05-02T04:00:00.000Z')
  })
})

describe('formatDate', () => {
  it('returns formatted date', () => {
    expect(date.formatDate('03-02-2021')).toBe('Tuesday, March 02, 2021')
  })
})

describe('formatDistance', () => {
  it('returns formatted distance', () => {
    vi.useFakeTimers().setSystemTime(new Date('05-02-2021').getTime())

    expect(date.formatDistance('03-02-2021')).toBe('2 months')
  })
})
