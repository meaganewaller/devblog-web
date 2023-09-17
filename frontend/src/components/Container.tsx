import { ReactNode } from 'react'

type ContainerProps = {
  children?: ReactNode
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className="h-full lg:px-0 px-10">
      <div className="flex flex-col max-w-3xl mx-auto mb-16 sm:px-0 fade-in">
        {children}
      </div>
    </div>
  )
}
