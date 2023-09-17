'use client'

import React, { Suspense, useEffect, useState } from 'react'
import tw, { styled } from 'twin.macro'

import { GuestbookService } from '@/lib/api'

import { formatDate } from '@/utils'
import { convertToGuestbookList } from '@/utils/guestbook'

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
  w-[95%] max-w-[1300px] p-[50px] mx-auto font-extra my-[4em] bg-background relative
`

const SectionTitle = tw.h1`
  w-full text-center text-5xl font-bold text-accent font-venice font-light
`

const fields = {
  name: {
    key: 'name-field',
    type: 'text',
    valType: 'string',
    label: 'Your name',
    placeholder: 'Your name e.g. Jo March',
    minLength: 2,
    maxLength: 128,
  },
  message: {
    key: 'message-field',
    type: 'textarea',
    valType: 'string',
    label: 'Your message',
    placeholder: "Your message (this is public so please don't share any personal information)",
    minLength: 2,
    maxLength: 2048,
  },
}

const fieldKeys = Object.keys(fields)

const handleSubmit = async (event, pending, setPending, setMessage) => {
  event.preventDefault()
  if (pending) return

  const data = {}
  const els = []
  let incomplete = false

  for (const key of fieldKeys) {
    const el = document.querySelector(`form #${key}`)
    els.push(el)
    data[key] = (el.value || '').trim()
    incomplete |= data[key].length === 0
  }

  if (incomplete) {
    return
  }

  setPending(true)
  setMessage(null)

  try {
    const res = await fetch('/api/guestbook', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!res.ok) {
      const { message } = await res.json()
      setMessage(message)
    } else {
      setMessage('Success! Your message has been added to the guestbook.')
    }
  } catch (err) {
    console.error('Error:', err.message, err)
    setMessage('Something went wrong. Please try again later.')
  }
  setPending(false)
}

export async function GuestbookPage() {
  const [guestbookEntries, setGuestbookEntries] = useState([])
  const [pending, setPending] = useState(false)
  const [message, setMessage] = useState(null)

  useEffect(() => {
    async function fetchGuestbookEntries() {
      const data = await GuestbookService.getAll()
      const { guestbookEntries } = convertToGuestbookList(data)
      setGuestbookEntries(guestbookEntries)
    }

    fetchGuestbookEntries()
  }, [])

  return (
    <Section>
      <InnerSection>
        <SectionTitle>Guestbook</SectionTitle>
        <Suspense fallback={<div>Loading...</div>}>
          {guestbookEntries.map((entry: { name: string; date: string; message: string }) => (
            <>
              <h1>{entry.name}</h1>
              <h4>{formatDate(entry.date)}</h4>
              <p>{entry.message}</p>
            </>
          ))}
        </Suspense>

        <hr className='my-8' />
        <form
          className='w-full break-words leading-5 text-primary-txt'
          onSubmit={(e) => handleSubmit(e, pending, setPending, setMessage)}
        >
          {fieldKeys.map((key) => {
            const field = fields[key]
            return (
              <fieldset className='break-words p-4 leading-5 text-primary-txt' key={key}>
                <div className='overflow-auto break-words' key={key}>
                  <label className='block w-full cursor-pointer font-mono text-sm uppercase' htmlFor={key}>
                    {field.label}
                  </label>
                  {React.createElement(field.type === 'textarea' ? 'textarea' : 'input', {
                    id: key,
                    type: field.type,
                    className:
                      'overflow-visible py-3 px-2 m-0 w-full font-mono text-md bg-background rounded-none border border-solid appearance-none cursor-text border-accent focus:appearance-none',
                    minLength: field.minLength,
                    maxLength: field.maxLength,
                    placeholder: field.placeholder,
                  })}
                </div>
              </fieldset>
            )
          })}
          {message && <p>{message}</p>}
          <div className='mb-2 p-4 leading-5'>
            <button
              type='submit'
              className='relative m-0 inline-flex cursor-pointer select-none items-center justify-center overflow-visible border-2 border-solid border-accent px-8 py-3 text-center font-mono uppercase'
            >
              {pending ? <div className='spinner' /> : 'Send'}
            </button>
          </div>
        </form>
      </InnerSection>
    </Section>
  )
}

export default GuestbookPage
