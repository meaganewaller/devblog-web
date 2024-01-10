import { describe, it, expect } from 'vitest'
import { checkEmail } from '../../utils/check-email'

describe('checkEmail', () => {
  it('returns true when email is valid', () => {
    expect(checkEmail('test@test.com')).toBe(true)
  })

  it('returns false when email is invalid', () => {
    expect(checkEmail('test@test')).toBe(false)
  })

  it('returns false when email is empty', () => {
    expect(checkEmail('')).toBe(false)
  })
})
