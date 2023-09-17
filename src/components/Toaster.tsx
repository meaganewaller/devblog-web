'use client'

import { Toaster as ReactHotToast } from 'react-hot-toast'

const Toaster = () => {
  return (
    <ReactHotToast
      position='bottom-right'
      toastOptions={{
        className: '!bg-accent !text-on-accent !border !border-accent-dark',
      }}
    />
  )
}

export default Toaster
