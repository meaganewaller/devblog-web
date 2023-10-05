'use client';

import React, { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { useRouter } from 'next/navigation'

const Search = () => {
  const [query, setQuery] = useState('')
  const router = useRouter()

  const handleInputChange = (event) => {
    setQuery(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    router.push(`/blog?query=${query}`)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center bg-[var(--color-shadow-yellow)] shadow-lg rounded-lg p-1">
          <input
            type="text"
            className="bg-[var(--color-transparent)] text-primary w-full ring-0 border-none focus:ring-0 focus:border-none placeholder:text-[var(--color-gradient-orange)] placeholder:italic font-mono"
            placeholder="search blog"
            value={query}
            onChange={handleInputChange}
          />
          <button type="submit" className="text-3xl text-accent-dark mr-1">
            <FiSearch />
          </button>
        </div>
      </form>
    </div>
  )
}

export default Search
