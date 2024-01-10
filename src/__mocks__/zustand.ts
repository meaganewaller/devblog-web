import actualCreate from 'zustand'
import { vi } from 'vitest'

const create = vi.fn((createState) => {
  const store = actualCreate(createState)
  return store
})

export default create
