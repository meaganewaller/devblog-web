'use client'

import { useState } from 'react'
import { HiCheckCircle, HiExclamationCircle, HiX } from 'react-icons/hi'

import PageHeader from '@/components/page-header'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    e.preventDefault()
    const data = {
      name,
      email,
      subject,
      message,
    }

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) {
        setSuccess(true)
        setError(false)
        setName('')
        setEmail('')
        setSubject('')
        setMessage('')
      } else {
        setError(true)
      }
    })
  }

  return (
    <>
      <PageHeader title="let's keep the convo going" centered={true} />
      <div>
        <p className='mx-auto mb-10 w-5/6 text-justify'>
          Hey there! Got questions, ideas, or just wanna chat? Whether you're curious about tech, have blog suggestions,
          or share common interests, I'm all ears. Connect on social for updates, drop your deets below, and let's keep
          the convo rollin'! 🚀
        </p>
        {success && (
          <div
            className='mb-4 flex items-center border-l-4 border-vibrant-green bg-light-mint p-4 text-sm text-vibrant-green'
            role='alert'
          >
            <HiCheckCircle className='mr-2 h-5 w-5 text-vibrant-green' aria-hidden='true' />
            <span className='sr-only'>Success</span>
            <div>
              <span className='font-medium'>Success!</span> Your message has been sent, I will get back to you soon!
            </div>
            <HiX
              className='ml-auto h-5 w-5 text-vibrant-green hover:cursor-pointer hover:text-vibrant-green/50'
              aria-hidden='true'
              onClick={() => setSuccess(false)}
            />
          </div>
        )}
        {error && (
          <div
            className='mb-4 flex items-center border-l-4 border-raspberry-pink bg-soft-rose/40 p-4 text-sm text-raspberry-pink'
            role='alert'
          >
            <HiExclamationCircle className='mr-2 h-5 w-5 text-raspberry-pink' aria-hidden='true' />
            <span className='sr-only'>Error</span>
            <div>
              <span className='font-medium'>Error!</span> Your message could not be sent, please try again later.
            </div>
            <HiX
              className='ml-auto h-5 w-5 text-raspberry-pink hover:cursor-pointer hover:text-raspberry-pink/50'
              aria-hidden='true'
              onClick={() => setError(false)}
            />
          </div>
        )}
      </div>

      <div>
        <form>
          <div className='mb-4'>
            <div className='flex justify-between'>
              <label htmlFor='email' className='block text-sm font-medium'>
                Name
              </label>
            </div>
            <div className='mt-1'>
              <input
                type='text'
                name='name'
                id='name'
                onChange={(e) => {
                  setName(e.target.value)
                }}
                className='block w-full rounded-md border-blush bg-background text-espresso sm:text-sm'
                placeholder='Darlene Alderson'
                aria-describedby='name-optional'
              />
            </div>
          </div>
          <div className='mb-4'>
            <div className='flex justify-between'>
              <label htmlFor='email' className='block text-sm font-medium'>
                Email
              </label>
            </div>
            <div className='mt-1'>
              <input
                type='email'
                name='email'
                id='email'
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
                className='block w-full rounded-md border-blush bg-background text-espresso sm:text-sm'
                placeholder='dolores.haze@virtualrealty.com'
                aria-describedby='email-optional'
              />
            </div>
          </div>
          <div className='mb-4'>
            <div className='flex justify-between'>
              <label htmlFor='subject' className='block text-sm font-medium'>
                Subject
              </label>
            </div>
            <div className='mt-1'>
              <select
                id='subject'
                name='subject'
                className='block w-full rounded-md border-blush bg-background text-espresso sm:text-sm'
              >
                <option></option>
                <option>General Inquiry</option>
                <option>Tech-related Question</option>
                <option>Blog Post Ideas</option>
                <option>Collaboration Opportunity</option>
                <option>Guest Post Submission</option>
                <option>Social Media Connection</option>
                <option>Other</option>
              </select>
            </div>
          </div>
          <div className='mb-4'>
            <label htmlFor='comment' className='block text-sm font-medium'>
              What would you like to talk about?
            </label>
            <div className='mt-1'>
              <textarea
                rows={4}
                name='comment'
                id='comment'
                onChange={(e) => {
                  setMessage(e.target.value)
                }}
                className='block w-full rounded-md border-blush bg-background text-espresso sm:text-sm'
                placeholder='Lets talk, it could be about anything'
                defaultValue={''}
              />
            </div>
          </div>
          <div>
            <button
              type='submit'
              onClick={(e) => {
                handleSubmit(e)
              }}
              className='justify-center rounded-md border border-transparent bg-raspberry-pink px-4 py-2 text-sm font-medium text-vanilla shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2'
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
