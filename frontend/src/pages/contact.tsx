import React, { useState } from 'react'
import Layout from '@/components/layout/Layout'
import Window from '@/components/layout/Window'
import { useWindowSize } from '@/hooks/useWindowSize'
import { Input } from "@/components/common/input"
import { Label } from "@/components/common/label"

export default function Contact() {
  const size = useWindowSize()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    let isValidForm = handleValidation()

    const res = await fetch("/api/contact", {
      body: JSON.stringify({
        name: name,
        email: email,
        subject: subject,
        message: message
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })

    const { error } = await res.json()
    if (error) {
      console.error(error)
      return
    }

    console.log(name, email, subject, message)
  }

  return (
    <Layout>
      <Window
        title="Let&apos;s Connect"
        x={size.width * .5 / 2}
        y={size.height / 10}
        zIndex="1"
        width={`${size.width / 2 }px`}
      >
        <div className="p-3">
          <div className="border-solid border-3 border-primary-500 mx-auto my-0 max-w-[650px] max-h-[650px] relative w-full">
            <h2 className="text-primary-500 text-5xl text-center font-regular font-venice">Send a message</h2>
            <form className="rounded-lg shadow-xl flex flex-col p-8 bg-white-200 dark:bg-accent-first-600" onSubmit={handleSubmit}>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="name">Name</Label>
                <Input type="name" id="name" placeholder="Elliot Alderson" />
              </div>
            </form>
          </div>
        </div>
      </Window>
    </Layout>
  )
}
