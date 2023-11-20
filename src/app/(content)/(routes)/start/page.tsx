import type { Metadata } from 'next'
import Image from 'next/image'

import PageHeader from '@/components/page-header'
import { Container, Link } from '@/components/ui'
import { tw } from '@/utils/tw'
import { defaultMetadata, getMetadata } from '@/lib/metadata'

export const metadata: Metadata = getMetadata({
  title: "start here",
  description: "New here? This is the place where you'll get all the information and the best posts",
  keywords: [ "start", "introduction" ],
})

const StartPage = () => {
  return (
    <>
      <PageHeader title="hello, reader" centered={true} />
      <Container wide={true}>
        <p className="text-lg mb-6">A friendly introduction to your blog.</p>

        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="text-lg mb-6">Briefly introduce yourself and your background in software development.</p>

        <h2 className="text-2xl font-bold mb-4">Popular Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-accent p-6 shadow rounded">
            <h3 className="text-xl text-on-accent font-medium mb-2">Post 1</h3>
            <p className="text-on-accent">Brief description or excerpt of the post.</p>
          </div>
          <div className="bg-accent p-6 shadow rounded">
            <h3 className="text-xl text-on-accent font-medium mb-2">Post 2</h3>
            <p className="text-on-accent">Brief description or excerpt of the post.</p>
          </div>
          <div className="bg-accent p-6 shadow rounded">
            <h3 className="text-xl text-on-accent font-medium mb-2">Post 3</h3>
            <p className="text-on-accent">Brief description or excerpt of the post.</p>
          </div>
          <div className="bg-accent p-6 shadow rounded">
            <h3 className="text-xl text-on-accent font-medium mb-2">Post 4</h3>
            <p className="text-on-accent">Brief description or excerpt of the post.</p>
          </div>
          <div className="bg-accent p-6 shadow rounded">
            <h3 className="text-xl text-on-accent font-medium mb-2">Post 5</h3>
            <p className="text-on-accent">Brief description or excerpt of the post.</p>
          </div>
          <div className="bg-accent p-6 shadow rounded">
            <h3 className="text-xl text-on-accent font-medium mb-2">Post 6</h3>
            <p className="text-on-accent">Brief description or excerpt of the post.</p>
          </div>
        </div>
        <h2 className="text-2xl font-bold my-4">Step-by-Step Guides</h2>
        <ul className="list-disc ml-6">
          <li><a href="#">Guide 1</a></li>
          <li><a href="#">Guide 2</a></li>
        </ul>

        <h2 className="text-2xl font-bold my-4">Recommended Tools/Resources</h2>
        <ul className="list-disc ml-6">
          <li><a href="#">Tool 1</a></li>
          <li><a href="#">Tool 2</a></li>
        </ul>

        <h2 className="text-2xl font-bold my-4">Contact</h2>
        <p className="text-lg mb-6">Include your contact information or a contact form here.</p>

        <h2 className="text-2xl font-bold my-4">FAQ</h2>
        <ul className="list-disc ml-6">
          <li>Question 1</li>
          <li>Question 2</li>
        </ul>

        <div className="mt-8 text-center">
          <a href="#" className="bg-accent-dark text-on-accent px-4 py-2 rounded hover:bg-gray-700">Subscribe</a>
          <a href="#" className="bg-accent-dark text-on-accent px-4 py-2 rounded hover:bg-gray-700 ml-4">Follow on Social Media</a>
        </div>
      </Container>
    </>
  )
}

export default StartPage
