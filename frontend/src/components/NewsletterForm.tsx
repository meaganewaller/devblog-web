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
        className='rounded-xl border-accent grid min-w-[500px] grid-rows-[1fr_1fr_auto] gap-4 border-2 border-solid p-8 shadow-[0_0_var(--color-sunshine-yellow),0_0_var(--color-sunshine-yellow),2px_2px_var(--color-sunshine-yellow)]'
        onSubmit={subscribe}
      >
        <h1>
          {title}
        </h1>
        {subtitle && (
          <p>
            {subtitle}
          </p>
        )}
        <div className='grid grid-cols-[1fr_auto] gap-2'>
          <div className='grid gap-2'>
            <label className='text-sm font-extra' htmlFor='email-input'>
              Email address
            </label>
            <input
              autoComplete='email'
              className='font-extra rounded-md border-accent border-2 text-accent focus:bg-background border-solid p-2 shadow-[0_0_var(--color-sunshine-yellow),0_0_var(--color-sunshine-yellow),2px_2px_var(--color-sunshine-yellow)] focus:outline-none'
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
            className='border-accent bg-background text-accent-dark font-extra rounded-md focus:bg-[var(--color-sunshine-yellow)] hover:bg-[var(--color-sunshine-yellow)] cursor-pointer justify-self-end border border-solid p-2 shadow-[0_0_var(--color-sunshine-yellow),0_0_var(--color-sunshine-yellow),2px_2px_var(--color-sunshine-yellow)]'
            type='submit'
            style={{ alignSelf: 'end' }}
            disabled={subscribed}
          />
        </div>
        <p
          className='text-accent justify-self-end text-sm italic'
          style={{ alignSelf: 'end' }}
        >
          No spam. We'll never sell your email address.
        </p>
      </form>
      {error && (
        <div className='text-[var(--color-deep-pink)] pt-2 text-sm'>
          {message}
        </div>
      )}
    </div>
  )
}

export function BlogNewsletterForm({ title, subtitle }: { title: string, subtitle: string }) {
  <div className='flex items-center justify-center'>
    <div className='bg-background sm:px-14 sm:py-8 p-6'>
      <NewsletterForm title={title} subtitle={subtitle} />
    </div>
  </div>
}
