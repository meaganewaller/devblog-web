'use client'
import React, { useRef, useState } from 'react'

export function NewsletterForm({
  title = 'Subscribe to the Newsletter',
  subtitle = '',
}) {
  const inputEl = useRef<HTMLInputElement>(null)
  const [error, setError] = useState(false)
  const [message, setMessage] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const subscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const res = await fetch('/api/convertkit', {
      body: JSON.stringify({ email: inputEl.current.value }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    const { error } = await res.json()
    if (error) {
      setError(true)
      setMessage(
        'Your e-mail address is invalid or you are already subscribed!',
      )
      return
    }

    inputEl.current.value = ''
    setError(false)
    setSubscribed(true)
    setMessage('Successful! 🎉 You are now subscribed.')
  }

  return (
    <div>
      <form
        className='rounded-xl border-primary-500 grid min-w-[500px] grid-rows-[1fr_1fr_auto] gap-4 border-2 border-solid p-8 shadow-[0_0_#0000,0_0_#000,2px_2px_#0000]'
        onSubmit={subscribe}
      >
        <h1 className='text-primary-500 self-center justify-self-center text-[1.375rem]'>
          {title}
        </h1>
        {subtitle && (
          <p className='text-primary-400 self-center justify-self-center text-sm'>
            {' '}
            {subtitle}{' '}
          </p>
        )}
        <div className='grid grid-cols-[1fr_auto] gap-2'>
          <div className='grid gap-2'>
            <label className='text-primary-400 text-sm' htmlFor='email-input'>
              Email address
            </label>
            <input
              autoComplete='email'
              className='rounded-md border-primary-400 text-primary-500 focus:bg-primary-lightest-100 border border-solid p-2 shadow-[0_0_#0000,0_0_#0000,2px_2px_#0000] focus:outline-none'
              id='email-input'
              name='email'
              placeholder={
                subscribed ? "You're subscribed !  🎉" : 'Enter your email'
              }
              ref={inputEl}
              required
              type='email'
              disabled={subscribed}
            />
          </div>
          <input
            className='border-primary-400 bg-white text-primary-500 focus:bg-primary-lightest-100 hover:bg-primary-lightest-100 cursor-pointer justify-self-end border border-solid p-2 shadow-[0_0_#0000,0_0_#0000,2px_2px_#0000]'
            type='submit'
            style={{ alignSelf: 'end' }}
            disabled={subscribed}
          />
        </div>
        <p
          className='text-primary-300 justify-self-end text-sm italic'
          style={{ alignSelf: 'end' }}
        >
          No spam. We'll never sell your email address.
        </p>
      </form>
      {error && (
        <div className='text-red-500 dark:text-red-400 pt-2 text-sm'>
          {message}
        </div>
      )}
    </div>
  )
}

export function BlogNewsletterForm({ title, subtitle }) {
  ;<div className='flex items-center justify-center'>
    <div className='bg-gray-100 dark:bg-gray-800 sm:px-14 sm:py-8 p-6'>
      <NewsletterForm title={title} subtitle={subtitle} />
    </div>
  </div>
}
