'use client'

import { useState } from 'react'
import { HiCheckCircle, HiExclamationCircle, HiX } from 'react-icons/hi'
import tw, { styled } from 'twin.macro'

import PageHeader from '@/components/page-header'

const StyledSection = styled.div`
  &:before,
  &:after {
    content: '';
    height: 15px;
    display: block;
    width: 100%;
    background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHJhZGlhbEdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY3g9IjUwJSIgY3k9IjUwJSIgcj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2NjY2NjYyIvPjxzdG9wIG9mZnNldD0iNjUlIiBzdG9wLWNvbG9yPSIjY2NjY2NjIi8+PHN0b3Agb2Zmc2V0PSI3MCUiIHN0b3AtY29sb3I9IiMwMDAwMDAiIHN0b3Atb3BhY2l0eT0iMC4wIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMDAwMDAwIiBzdG9wLW9wYWNpdHk9IjAuMCIvPjwvcmFkaWFsR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JhZCkiIC8+PC9zdmc+IA==');
    background-size: 100%;
    background-image: -moz-radial-gradient(
      var(--color-background),
      var(--color-background) 65%,
      rgba(0, 0, 0, 0) 70%,
      rgba(0, 0, 0, 0)
    );
    background-image: -webkit-radial-gradient(
      var(--color-background),
      var(--color-background) 65%,
      rgba(0, 0, 0, 0) 70%,
      rgba(0, 0, 0, 0)
    );
    background-image: radial-gradient(
      var(--color-background),
      var(--color-background) 65%,
      rgba(0, 0, 0, 0) 70%,
      rgba(0, 0, 0, 0)
    );
    background-size: 15px 15px;
    background-size: 15px 15px;
    background-repeat: repeat-x;
    background-position: 0 0;
    position: absolute;
  }

  &:before {
    left: 0;
    top: -7px;
    -moz-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }

  &:after {
    bottom: -7px;
    left: 0;
  }
`

const InnerSection = styled.div`
  &:before {
    left: -7px;
    top: 0;
    -moz-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }

  &:after {
    right: -7px;
    top: 0;
  }

  &:before,
  &:after {
    position: absolute;
    content: '';
    height: 100%;
    display: block;
    width: 15px;
    background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHJhZGlhbEdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY3g9IjUwJSIgY3k9IjUwJSIgcj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2NjY2NjYyIvPjxzdG9wIG9mZnNldD0iNjUlIiBzdG9wLWNvbG9yPSIjY2NjY2NjIi8+PHN0b3Agb2Zmc2V0PSI3MCUiIHN0b3AtY29sb3I9IiMwMDAwMDAiIHN0b3Atb3BhY2l0eT0iMC4wIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMDAwMDAwIiBzdG9wLW9wYWNpdHk9IjAuMCIvPjwvcmFkaWFsR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JhZCkiIC8+PC9zdmc+IA==');
    background-size: 100%;
    background-image: -moz-radial-gradient(
      var(--color-background),
      var(--color-background) 65%,
      rgba(0, 0, 0, 0) 70%,
      rgba(0, 0, 0, 0)
    );
    background-image: -webkit-radial-gradient(
      var(--color-background),
      var(--color-background) 65%,
      rgba(0, 0, 0, 0) 70%,
      rgba(0, 0, 0, 0)
    );
    background-image: radial-gradient(
      var(--color-background),
      var(--color-background) 65%,
      rgba(0, 0, 0, 0) 70%,
      rgba(0, 0, 0, 0)
    );
    background-size: 15px 15px;
    background-repeat: repeat-y;
  }
`

const Section = tw(StyledSection)`
 w-[95%] max-w-[1300px] p-[50px] mx-auto font-extra mt-2 mb-10 bg-background relative
`

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
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
    <Section>
      <InnerSection>
        <PageHeader title="let's keep the convo going" centered={true} />
        <div>
          <p className='mx-auto mb-10 w-5/6 text-justify'>
            Hey there! Got questions, ideas, or just wanna chat? Whether you're curious about tech, have blog
            suggestions, or share common interests, I'm all ears. Connect on social for updates, drop your deets below,
            and let's keep the convo rollin'! 🚀
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
                className='justify-center rounded-md border border-transparent bg-blush bg-raspberry-pink px-4 py-2 text-sm font-medium text-vanilla shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2'
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </InnerSection>
    </Section>
  )
}
