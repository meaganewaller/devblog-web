import { describe, it, expect } from 'vitest'
import { checkMessage } from '../../utils/check-message'

describe('checkMessage', () => {
  it('returns true when message is valid', () => {
    expect(checkMessage('Hello World')).toBe(true)
  })

  it('returns false when message is empty', () => {
    expect(checkMessage('')).toBe(false)
  })
})

