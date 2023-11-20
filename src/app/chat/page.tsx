'use client'
import React, { useState } from 'react'
import tw, { styled } from 'twin.macro'
import PageHeader from "@/components/page-header"

const fields = {
  name: {
    key: 'name-field',
    type: 'text',
    valType: 'string',
    label: 'Your name',
    placeholder: 'Your name e.g. Darlene Alderson',
    minLength: 2,
    maxLength: 128,
  },
  email: {
    key: 'email-field',
    type: 'email',
    valType: 'string',
    label: 'Your email:',
    placeholder: 'Your email e.g. dolores.haze@virtualrealty.com',
    minLength: 5,
    maxLength: 256,
  },
  subject: {
    key: 'subject-field',
    type: 'text',
    valType: 'string',
    label: 'Message subject:',
    placeholder: 'Message subject e.g. General Inquiry',
    minLength: 2,
    maxLength: 64,
  },
  message: {
    key: 'message-field',
    type: 'textarea',
    valType: 'string',
    label: 'Message:',
    placeholder: 'Your message',
    minLength: 1,
    maxLength: 256,
  },
}

const fieldKeys = Object.keys(fields)

const handleSubmit = async (e, pending, setPending, setMessage) => {
  e.preventDefault()
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

  // els.forEach((el) => {
  //   // el.value = ""
  // })

  try {
    const res = await fetch('/api/contact', {
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
      setMessage('Message sent!')
    }
  } catch (error) {
    console.error('Error:', error.message, error)
    setMessage('Error occured sending message.')
  }
  setPending(false)
}

const ChatPage = () => {
  const [message, setMessage] = useState(null)
  const [pending, setPending] = useState(false)

  return (
    <div className="max-w-full mx-auto">
      <PageHeader title="Get in touch" centered={true} />
        <div className='p-2'>
          <div className='relative mx-auto my-0 w-full'>
            <div className='p-[2em] pt-[1.25em]'>
              <p className='text-justify font-extra font-light text-primary-txt'>
                Hey there! I'm thrilled that you want to get in touch. Whether
                you have questions, ideas, or just want to say hi, I'd love to
                hear from you.
              </p>
              <h3 className='mt-[1.5em]'>Have a Question?</h3>
              <p className='text-justify font-extra font-light text-primary-txt'>
                If you're curious about anything--from my journey in the tech
                world to the latest blog post--feel free to ask. No question is
                too big or small, and I'll do my best to (eventually) provide an
                insightful answer.
              </p>
              <h3 className='mt-[1.5em]'>Share Your Ideas</h3>
              <p className='text-justify font-extra font-light text-primary-txt'>
                Got an idea for a blog post topic? Or maybe a suggestion on how
                I can make your reading experience even better? I'm all ears!
                Your input helps shape the content I prioritize and create.
              </p>
              <h3 className='mt-[1.5em]'>Let's Connect</h3>
              <p className='text-justify font-extra font-light text-primary-txt'>
                I'm not just a software developer; I'm also a puzzle lover,
                reality TV aficionado, and more. Share your interests and
                hobbies, and let's find common ground.
              </p>
              <h3 className='mt-[1.5em]'>Get Involved</h3>
              <p className='text-justify font-extra font-light text-primary-txt'>
                Want to collaborate, guest post, or share your own journey? I'm
                always excited to connect with fellow bloggers, tech
                enthusiasts, and curious minds.
              </p>
              <h3 className='mt-[1.5em]'>Stay Social</h3>
              <p className='text-justify font-extra font-light text-primary-txt'>
                Connect on social media for the latest updates,
                behind-the-scenes peeks, and some of my favorite memes. Let's
                keep the convo going!
              </p>
              <p className='my-[2em] text-justify font-extra font-light text-primary-txt'>
                Fill out the form below, and I'll get back to you as soon as I
                can. Remember, this is a judgment-free zone, so don't hesitate
                to reach out.
              </p>
              <hr className='mb-[1.5em] border-solid border-accent' />
              <form
                className='w-full break-words leading-5 text-primary-txt'
                onSubmit={(e) =>
                  handleSubmit(e, pending, setPending, setMessage)
                }
              >
                {fieldKeys.map((key) => {
                  const field = fields[key]
                  return (
                    <fieldset
                      className='break-words p-4 leading-5 text-primary-txt'
                      key={key}
                    >
                      <div className='overflow-auto break-words' key={key}>
                        <label
                          className='block w-full cursor-pointer font-mono text-sm uppercase'
                          htmlFor={key}
                        >
                          {field.label}
                        </label>
                        {React.createElement(
                          field.type === 'textarea' ? 'textarea' : 'input',
                          {
                            id: key,
                            type: field.type,
                            className:
                              'overflow-visible py-3 px-2 m-0 w-full font-mono text-md bg-background rounded-none border border-solid appearance-none cursor-text border-accent focus:appearance-none',
                            minLength: field.minLength,
                            maxLength: field.maxLength,
                            placeholder: field.placeholder,
                          },
                        )}
                      </div>
                    </fieldset>
                  )
                })}
                {message && <p>{message}</p>}
                <div className='mb-2 p-4 leading-5'>
                  <button
                    type='submit'
                    className='relative m-0 inline-flex cursor-pointer select-none items-center justify-center overflow-visible border-2 border-solid border-accent px-8 py-3 text-center font-mono uppercase bg-bubblegum text-primary-txt'
                  >
                    {pending ? <div className='spinner' /> : 'Send'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
  )
}

export default ChatPage
