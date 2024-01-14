import { useState } from 'react'
import { tw } from '@/utils/tw'
import { LiaClipboard, LiaClipboardCheckSolid } from 'react-icons/lia'

const buttonClasses = 'flex items-center text-xs font-medium text-accent rounded'

export function CopyButton({ text, className }) {
  const [isCopied, setIsCopied] = useState(false)

  const copy = async () => {
    await navigator.clipboard.writeText(text)
    setIsCopied(true)

    setTimeout(() => {
      setIsCopied(false)
    }, 2500)
  }

  const Icon = isCopied ? LiaClipboardCheckSolid : LiaClipboard

  return (
    <button
      disabled={isCopied}
    onClick={copy}
    className={tw(buttonClasses, className)}
    >
      <Icon className="mr-1 h-4 w-4" />
      <span>{isCopied ? 'Copied!' : 'Copy'}</span>
    </button>
  )
}
