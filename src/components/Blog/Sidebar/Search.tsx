'use client'

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { FiSearch } from 'react-icons/fi'

const Search = () => {
  const [query, setQuery] = useState('')
  const router = useRouter()

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    router.push(`/blog?query=${query}`)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='flex items-center rounded-lg bg-peachy-pink p-1 shadow-lg'>
          <input
            type='text'
            className='text-primary w-full border-none bg-[var(--color-transparent)] font-mono ring-0 placeholder:italic placeholder:text-deep-pink focus:border-none focus:ring-0'
            placeholder='search blog'
            value={query}
            onChange={handleInputChange}
          />
          <button type='submit' className='mr-1 text-3xl text-espresso'>
            <FiSearch className='text-deep-pink hover:text-accent-dark' />
          </button>
        </div>
      </form>
    </div>
  )
}

export default Search
