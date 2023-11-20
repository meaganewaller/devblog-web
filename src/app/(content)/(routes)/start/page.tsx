import type { Metadata } from 'next'

import { getMetadata } from '@/lib/metadata'

import PageHeader from '@/components/page-header'
import { Container } from '@/components/ui'

export const metadata: Metadata = getMetadata({
  title: 'start here',
  description: "New here? This is the place where you'll get all the information and the best posts",
  keywords: ['start', 'introduction'],
})

const StartPage = () => {
  return (
    <>
      <PageHeader title='hello, reader' centered={true} />
      <Container wide={true}>
        <p className='mb-6 text-lg'>A friendly introduction to your blog.</p>

        <h2 className='mb-4 text-2xl font-bold'>About Me</h2>
        <p className='mb-6 text-lg'>Briefly introduce yourself and your background in software development.</p>

        <h2 className='mb-4 text-2xl font-bold'>Popular Posts</h2>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
          <div className='rounded bg-accent p-6 shadow'>
            <h3 className='mb-2 text-xl font-medium text-on-accent'>Post 1</h3>
            <p className='text-on-accent'>Brief description or excerpt of the post.</p>
          </div>
          <div className='rounded bg-accent p-6 shadow'>
            <h3 className='mb-2 text-xl font-medium text-on-accent'>Post 2</h3>
            <p className='text-on-accent'>Brief description or excerpt of the post.</p>
          </div>
          <div className='rounded bg-accent p-6 shadow'>
            <h3 className='mb-2 text-xl font-medium text-on-accent'>Post 3</h3>
            <p className='text-on-accent'>Brief description or excerpt of the post.</p>
          </div>
          <div className='rounded bg-accent p-6 shadow'>
            <h3 className='mb-2 text-xl font-medium text-on-accent'>Post 4</h3>
            <p className='text-on-accent'>Brief description or excerpt of the post.</p>
          </div>
          <div className='rounded bg-accent p-6 shadow'>
            <h3 className='mb-2 text-xl font-medium text-on-accent'>Post 5</h3>
            <p className='text-on-accent'>Brief description or excerpt of the post.</p>
          </div>
          <div className='rounded bg-accent p-6 shadow'>
            <h3 className='mb-2 text-xl font-medium text-on-accent'>Post 6</h3>
            <p className='text-on-accent'>Brief description or excerpt of the post.</p>
          </div>
        </div>
        <h2 className='my-4 text-2xl font-bold'>Step-by-Step Guides</h2>
        <ul className='ml-6 list-disc'>
          <li>
            <a href='/'>Guide 1</a>
          </li>
          <li>
            <a href='/'>Guide 2</a>
          </li>
        </ul>

        <h2 className='my-4 text-2xl font-bold'>Recommended Tools/Resources</h2>
        <ul className='ml-6 list-disc'>
          <li>
            <a href='/'>Tool 1</a>
          </li>
          <li>
            <a href='/'>Tool 2</a>
          </li>
        </ul>

        <h2 className='my-4 text-2xl font-bold'>Contact</h2>
        <p className='mb-6 text-lg'>Include your contact information or a contact form here.</p>

        <h2 className='my-4 text-2xl font-bold'>FAQ</h2>
        <ul className='ml-6 list-disc'>
          <li>Question 1</li>
          <li>Question 2</li>
        </ul>

        <div className='mt-8 text-center'>
          <a href='/subscribe' className='hover:bg-gray-700 rounded bg-accent-dark px-4 py-2 text-on-accent'>
            Subscribe
          </a>
          <a href='/chat' className='hover:bg-gray-700 ml-4 rounded bg-accent-dark px-4 py-2 text-on-accent'>
            Follow on Social Media
          </a>
        </div>
      </Container>
    </>
  )
}

export default StartPage
