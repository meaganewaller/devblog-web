'use client'
import tw from 'twin.macro'

const H1 = tw.h1`text-5xl font-bold text-raspberry-pink`
const H2 = tw.h2`text-3xl font-bold text-blush`
const HighlightBox = tw.div`
  bg-lilac p-5 my-5 mx-0 rounded-lg shadow-inner shadow-purple border-2 border-vanilla text-justify
`
const Button = tw.p`
  bg-tropical-orange py-3 px-5 text-vanilla decoration-0 font-bold rounded-md inline-block mt-5
`

export default function WelcomePage() {
  return (
    <div className='container mx-auto mb-5 bg-pale-pink p-5 text-center font-extra text-espresso'>
      <H1>Hi, I'm Meagan</H1>

      <HighlightBox>
        <p>hello placeholder text</p>
        <p>bio placeholder text</p>
      </HighlightBox>

      <H2>🚀 What You'll Find Here:</H2>
      <HighlightBox>
        <p className='m-3'>
          <strong>1. Categories and Topics:&nbsp;</strong>
          Explore a variety of topics, including coding tutorials, development best practices, software design
          principles, and more. Check out our categories to find the content that suits your interests.
        </p>
        <p className='m-3'>
          <strong>2. Featured Content:&nbsp;</strong>
          Dive into some of our most popular and valuable posts. These handpicked articles cover fundamental concepts
          and provide a solid foundation for your coding journey.
        </p>
        <p className='m-3'>
          <strong>3. Join the Community:&nbsp;</strong>
          Connect with fellow developers by subscribing to our newsletter or following us on social media. Your input is
          valued, and we encourage discussions, questions, and shared experiences.
        </p>
      </HighlightBox>

      <H2>🌟 Start Exploring:</H2>

      <p className='m-3 text-justify'>
        🔍 <a href='#'>Explore Our Blog</a>: Discover a wealth of knowledge within our diverse range of articles.
      </p>
      <p className='m-3 text-justify'>
        📚 <a href='#'>Featured Tutorials</a>: Begin with our recommended tutorials and guides designed for beginners.
      </p>
      <p className='m-3 text-justify'>
        🎓 <a href='#'>Resource Library</a>: Access downloadable cheat sheets, templates, and other valuable resources
        in our library.
      </p>

      <HighlightBox>
        <p>Thank you for joining our community of developers! Together, let's code, learn, and inspire. 🚀</p>
      </HighlightBox>

      <Button>
        <a href='#'>Get Started Now!</a>
      </Button>
    </div>
  )
}
