'use client'

import { FormEventHandler, useCallback, useRef, useState } from 'react'

type FormState = 'initial' | 'loading' | 'success' | 'error'
type Form = {
  state: FormState
  message?: string
}

export default function NewsletterForm({ title = ['Subscribe to the Newsletter'], subtitle = '' }) {
  const [form, setForm] = useState<Form>({ state: 'initial' })
  const emailInputEl = useRef<HTMLInputElement>(null)

  const onSubmit: FormEventHandler<HTMLFormElement> = useCallback(async (event) => {
    event.preventDefault()
    setForm({ state: 'loading' })

    const target = event.target as HTMLFormElement
    const data = new FormData(target)
    const email = data.get('email')

    const body = JSON.stringify({
      email,
    })

    const headers = new Headers({
      'Content-Type': 'application/json; charset=utf-8',
    })

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        headers,
        body,
      })
      const { error } = await response.json()

      if (error) {
        setForm({
          state: 'error',
          message: error?.message ?? 'Something went wrong. Please try again.',
        })
        return
      }

      // if (process.env.NODE_ENV === 'production') {
      //   window.plausible('Newsletter Subscription', { props: { email } })
      // }

      setForm({
        state: 'success',
        message: 'Success! 🎉 You are now subscribed.',
      })

      if (emailInputEl.current) {
        emailInputEl.current.value = ''
      }
    } catch (error) {
      setForm({
        state: 'error',
        message: 'Something went wrong. Please try again.',
      })
    }
  }, [])

  return (
    <section className='flex items-center justify-center'>
      <p className='my-4 text-3xl font-normal tracking-tight text-primary md:text-5xl lg:text-6xl'>
        {title}
      </p>

      <p className='my-1 max-w-4xl text-lg text-gray-800'>
        {subtitle}
      </p>

      <form className='relative my-4 grid max-w-xl grid-cols-1 gap-4 md:grid-cols-3' onSubmit={onSubmit}>
        <input
          ref={emailInputEl}
          type='email'
          name='email'
          aria-label='email'
          placeholder='Your email address'
          autoComplete='email'
          required
          className='px-4 py-2 text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-primary'
          disabled={form.state === 'loading'}
        />
        <input
          type='submit'
          value='Subscribe'
          className='px-4 py-2 text-white bg-primary rounded-md shadow-sm cursor-pointer hover:bg-primary-dark focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-primary'
          disabled={
            form.state === 'loading' || form.state === 'success' || form.state === 'error' || emailInputEl.current?.value.length === 0
          }
        />
      </form>
    </section>
  )
}
