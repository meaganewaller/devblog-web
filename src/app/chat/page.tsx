'use client'
import React, { useState } from "react";
import tw, { styled } from 'twin.macro'

const StyledSection = styled.div`
  &:before,
  &:after {
    content: '';
    height: 15px;
    display: block;
    width: 100%;
    background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHJhZGlhbEdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY3g9IjUwJSIgY3k9IjUwJSIgcj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2NjY2NjYyIvPjxzdG9wIG9mZnNldD0iNjUlIiBzdG9wLWNvbG9yPSIjY2NjY2NjIi8+PHN0b3Agb2Zmc2V0PSI3MCUiIHN0b3AtY29sb3I9IiMwMDAwMDAiIHN0b3Atb3BhY2l0eT0iMC4wIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMDAwMDAwIiBzdG9wLW9wYWNpdHk9IjAuMCIvPjwvcmFkaWFsR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JhZCkiIC8+PC9zdmc+IA==');
    background-size: 100%;
    background-image: -moz-radial-gradient(var(--color-background), var(--color-background) 65%, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 0));
    background-image: -webkit-radial-gradient(var(--color-background), var(--color-background) 65%, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 0));
    background-image: radial-gradient(var(--color-background), var(--color-background) 65%, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 0));
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
  background-image: -moz-radial-gradient(var(--color-background), var(--color-background) 65%, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 0));
  background-image: -webkit-radial-gradient(var(--color-background), var(--color-background) 65%, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 0));
  background-image: radial-gradient(var(--color-background), var(--color-background) 65%, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 0));
  background-size: 15px 15px;
  background-repeat: repeat-y;
}
`
const Section = tw(StyledSection)`
  w-[95%] max-w-[1300px] p-[50px] mx-auto font-extra my-[4em] bg-background relative
`

const fields = {
  name: {
    key: "name-field",
    type: "text",
    valType: "string",
    label: "Your name",
    placeholder: "Your name e.g. Darlene Alderson",
    minLength: 2,
    maxLength: 128
  },
  email: {
    key: "email-field",
    type: "email",
    valType: "string",
    label: "Your email:",
    placeholder: "Your email e.g. dolores.haze@virtualrealty.com",
    minLength: 5,
    maxLength: 256
  },
  subject: {
    key: "subject-field",
    type: "text",
    valType: "string",
    label: "Message subject:",
    placeholder: "Message subject e.g. General Inquiry",
    minLength: 2,
    maxLength: 64
  },
  message: {
    key: "message-field",
    type: "textarea",
    valType: "string",
    label: "Message:",
    placeholder: "Your message",
    minLength: 1,
    maxLength: 256
  }
}

const fieldKeys = Object.keys(fields)

const handleSubmit = async (e, pending, setPending, setMessage) => {
  e.preventDefault()
  if (pending) return

  let data = {}
  const els = []
  let incomplete = false

  for (const key of fieldKeys) {
    let el = document.querySelector(`form #${key}`)
    els.push(el)
    data[key] = (el.value || "").trim()
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
    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })

    if (!res.ok) {
      const { message } = await res.json()
      setMessage(message)
    } else {
      setMessage("Message sent!")
    }
  } catch (error) {
    console.error("Error:", error.message, error)
    setMessage("Error occured sending message.")
  }
  setPending(false)
}

const ChatPage = () => {
  const [message, setMessage] = useState(null)
  const [pending, setPending] = useState(false)

  return (
    <Section>
      <InnerSection>
        <div className="p-2">
          <div className="mx-auto my-0 relative w-full">
            <h2 className="text-accent-dark text-3xl w-full text-center font-light font-venice">
              Send a message
            </h2>
            <div className="p-[2em] pt-[1.25em]">
              <p className="text-primary-txt text-justify font-light font-extra">
                Hey there!{" "}
                I'm thrilled that you want to get in touch. Whether you have questions, ideas, or just want to say hi, I'd love to hear from you.
              </p>
              <h3 className="mt-[1.5em]">Have a Question?</h3>
              <p className="text-primary-txt text-justify font-light font-extra">
                If you're curious about anything--from my journey in the tech world to the latest blog post--feel free to ask. No question is too big or small, and I'll do my best to (eventually) provide an insightful answer.
              </p>
              <h3 className="mt-[1.5em]">Share Your Ideas</h3>
              <p className="text-primary-txt text-justify font-light font-extra">
                Got an idea for a blog post topic? Or maybe a suggestion on how I can make your reading experience even better? I'm all ear! Your input helps shape the content I prioritize and create.
              </p>
              <h3 className="mt-[1.5em]">Let's Connect</h3>
              <p className="text-primary-txt text-justify font-light font-extra">
                I'm not just a software developer; I'm also a puzzle lover, reality TV aficionado, and more. Share your interests and hobbies, and let's find common ground.
              </p>
              <h3 className="mt-[1.5em]">Get Involved</h3>
              <p className="text-primary-txt text-justify font-light font-extra">
                Want to collaborate, guest post, or share your own journey? I'm always excited to connect with fellow bloggers, tech enthusiasts, and curious minds.
              </p>
              <h3 className="mt-[1.5em]">Stay Social</h3>
              <p className="text-primary-txt text-justify font-light font-extra">
                Connect on social media for the latest updates, behind-the-scenes peeks, and some of my favorite memes. Let's keep the convo going!
              </p>
              <p className="text-primary-txt text-justify font-light font-extra mb-[2em]">
                Fill out the form below, and I'll get back to you as soon as I can. Remember, this is a judgment-free zone, so don't hesitate to reach out.
              </p>
              <hr className="border-solid border-accent mb-[1.5em]" />
            <form
              className="w-full leading-5 break-words text-primary-txt"
              onSubmit={(e) =>
                handleSubmit(e, pending, setPending, setMessage)
              }
            >
              {fieldKeys.map((key) => {
                const field = fields[key]
                return (
                  <fieldset
                    className="p-4 leading-5 break-words text-primary-txt"
                    key={key}
                  >
                    <div className="overflow-auto break-words" key={key}>
                      <label
                        className="block w-full text-sm cursor-pointer font-mono uppercase"
                        htmlFor={key}
                      >
                        {field.label}
                      </label>
                      {React.createElement(
                        field.type === "textarea" ? "textarea" : "input",
                        {
                          id: key,
                          type: field.type,
                          className:
                          "overflow-visible py-3 px-2 m-0 w-full font-mono text-md bg-background rounded-none border border-solid appearance-none cursor-text border-accent focus:appearance-none",
                          minLength: field.minLength,
                          maxLength: field.maxLength,
                          placeholder: field.placeholder,
                        },
                      )}
                    </div>
                  </fieldset>
                );
              })}
              {message && <p>{message}</p>}
              <div className="mb-2 p-4 leading-5">
                <button
                  type="submit"
                  className="inline-flex overflow-visible relative justify-center items-center py-3 px-8 m-0 text-center border-2 border-accent border-solid cursor-pointer select-none uppercase font-mono"
                >
                  {pending ? <div className="spinner" /> : "Send"}
                </button>
              </div>
            </form>
            </div>
          </div>
        </div>
      </InnerSection>
    </Section>
  )
}

export default ChatPage
