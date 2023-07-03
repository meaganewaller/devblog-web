import React from 'react'
import Layout from '@/components/layout/Layout'
import Window from '@/components/layout/Window'
import { useWindowSize } from '@/hooks/useWindowSize'

export default function Newsletter() {
  const size = useWindowSize()

  return (
    <Layout>
      <div className="flex w-11/12 mx-auto mt-20">
        <Window title="join the newsletter"
          x={size.width / 20 + 310 }
          y={size.height / 10 }
          zIndex="2"
          width={`${size.width / 1.15 - 300}px`}
          height="400px"
        >
          <div className="flex place-content-center flex-col">
            <div className="flex place-content-center pb-4">
            </div>
          </div>
        </Window>

        <Window
          title="past issues"
          x={size.width / 20}
          y={size.height / 10}
          zIndex="3"
          width="300px"
          height="400px"
        >
          <div className="flex p-5 place-content-center flex-col">
            <div className="flex place-content-center pb-4">
            </div>
          </div>
        </Window>

        <Window
          title="what readers are saying"
          x={size.width / 20}
          y={size.height / 10 + 410}
          zIndex="3"
          width={`${size.width / 1.14}px`}
          height="300px"
        >
          <div className="flex place-content-center flex-col h-full">
            <div className="flex place-content-center">
              <div className="inline-block px-3">
                <div className="relative w-56 animate-bounce">
                  <div className="bg-secondary-300 dark:bg-accent-first-700 p-3 rounded-2xl">
                    <p className="text-secondary-700 dark:text-accent-first-200 p-1">It&apos;s certaintly a newsletter that arrives in my e-mail inbox!</p>
                  </div>
                  <div className="w-0 h-0 border-[20px] border-solid border-transparent border-t-[35px] border-t-secondary-300 dark:border-t-accent-first-700 relative -z-1 -top-3 left-40 rotate-[22deg]" />
                </div>
              </div>
              <div className="inline-block px-3">
                <div className="relative w-56 animate-bounce">
                  <div className="bg-secondary-300 dark:bg-accent-first-700 p-3 rounded-2xl">
                    <p className="text-secondary-700 dark:text-accent-first-200 p-1">Published so infrequently you&apos;ll forget you&apos;re subscribed to it.</p>
                  </div>
                  <div className="w-0 h-0 border-[20px] border-solid border-transparent border-t-[35px] border-t-secondary-300 dark:border-t-accent-first-700 relative -z-1 -top-3 left-40 rotate-[22deg]" />
                </div>
              </div>
              <div className="inline-block px-3">
                <div className="relative w-56 animate-bounce">
                  <div className="bg-secondary-300 dark:bg-accent-first-700 p-3 rounded-2xl">
                    <p className="text-secondary-700 dark:text-accent-first-200 p-1">Is this the form to submit typos I found on your website?</p>
                  </div>
                  <div className="w-0 h-0 border-[20px] border-solid border-transparent border-t-[35px] border-t-secondary-300 dark:border-t-accent-first-700 relative -z-1 -top-3 left-40 rotate-[22deg]" />
                </div>
              </div>
            </div>
          </div>
        </Window>
      </div>
    </Layout>
  )
}
