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
    <section className='flex flex-col items-center justify-center'>
      <p className='text-primary my-4 text-3xl font-normal tracking-tight md:text-5xl lg:text-6xl'>{title}</p>

      <p className='text-gray-800 my-1 max-w-4xl text-lg'>{subtitle}</p>

      <form className='relative my-4 grid max-w-3xl grid-cols-1 gap-4 md:grid-cols-2' onSubmit={onSubmit}>
        <input
          ref={emailInputEl}
          type='email'
          name='email'
          aria-label='email'
          placeholder='Your email address'
          autoComplete='email'
          required
          className='appearance-none rounded-none border-x-0 border-b-2 border-t-0 border-b-accent bg-background px-4 py-2 text-electric-purple placeholder-electric-purple/50 shadow-sm focus:border-b-0 focus:outline-none focus:ring-1 focus:ring-accent focus:ring-offset-2'
          disabled={form.state === 'loading'}
        />
        <input
          type='submit'
          value='Subscribe'
          className='bg-primary hover:bg-primary-dark focus:ring-primary cursor-pointer rounded-md px-4 py-2 text-accent shadow-sm focus:outline-none focus:ring-1 focus:ring-offset-2'
          disabled={
            form.state === 'loading' ||
            form.state === 'success' ||
            form.state === 'error' ||
            emailInputEl.current?.value.length === 0
          }
        />
      </form>
    </section>
  )
}
