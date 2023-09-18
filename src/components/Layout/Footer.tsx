import Link from 'next/link'
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai'
import { BiLogoMastodon } from 'react-icons/bi'
import { MdAlternateEmail } from 'react-icons/md'

const navigation = {
  social: [
    {
      name: 'Github',
      href: 'https://github.com/meaganewaller',
      icon: AiFillGithub,
    },
    {
      name: 'Mastodon',
      href: 'https://mastodon.social/@meaganewaller',
      icon: BiLogoMastodon,
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/meaganewaller',
      icon: AiOutlineTwitter,
    },
    {
      name: 'Email',
      href: 'mailto:3Tg9z@example.com',
      icon: MdAlternateEmail,
    },
  ],
}

export const Footer = () => {
  return (
    <footer className='bg-background pt-4' aria-labelledby='footer-heading'>
      <h2 id='footer-heading' className='sr-only'>
        Footer
      </h2>

      <div className='relative z-10 bg-[#78ab5e]'>
        <div className='mx-auto max-w-7xl px-6 pb-8 lg:px-8'>
          <div className='md:flex md:items-center md:justify-between'>
            <div>
              <div className='mb-4'>
                <h3 className='text-gray-900 text-sm font-semibold leading-6'>
                  Subscribe to new posts
                </h3>
                <p className='text-gray-800 text-sm leading-6'>
                  Twice a month on average. Seriously, that's it.
                </p>
              </div>
              <form
                className='mt-6 sm:flex sm:max-w-md lg:mt-0'
                action='https://sendy.minafi.com/subscribe'
                method='POST'
                acceptCharset='utf-8'
              >
                <input
                  type='hidden'
                  name='list'
                  value='892UVTIMgB51H8qkY76305YU2A'
                />
                <input type='hidden' name='subform' value='yes' />
                <div className='hidden'>
                  <label htmlFor='hp'>
                    HP <input type='text' name='hp' id='hp' />
                  </label>
                </div>
                <label htmlFor='email' className='sr-only'>
                  Email address
                </label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  autoComplete='email'
                  required
                  className='text-gray-900 w-full min-w-0 appearance-none rounded-md border-transparent bg-[#9fca75] px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 placeholder-[#274928] shadow-sm  sm:w-56 sm:text-sm sm:leading-6'
                  placeholder='Enter your email'
                />
                <div className='mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0'>
                  <button
                    type='submit'
                    className='text-yellow-800 hover:bg-orange-300 focus-visible:outline-yellow-600 flex w-full items-center justify-center rounded-md bg-[#f3ce84] px-3 py-1.5 text-base font-semibold leading-7 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:text-sm sm:leading-6'
                  >
                    Subscribe
                  </button>
                </div>
              </form>

              <a
                className='text-yellow-800 hover:bg-orange-300 focus-visible:outline-yellow-600 mt-8 flex w-full items-center justify-center space-x-4 rounded-md bg-[#f3ce84] px-3 py-1.5 text-base font-semibold leading-7 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:text-sm sm:leading-6'
                href='https://feeds.feedburner.com/adamfortuna'
                target='_blank'
                rel='noreferrer'
              >
                <span>Subscribe to RSS</span>
              </a>
            </div>
            <div className='mt-4 flex flex-row justify-center space-x-4 text-right text-xl font-semibold md:mt-0 md:flex-col md:justify-end md:space-x-0'>
              <Link
                href='/about'
                className='hover:text-green-900 hover:border-green-900 flex-shrink rounded-lg border-2 border-transparent p-1'
              >
                About
              </Link>
              <Link
                href='/projects'
                className='hover:text-green-900 hover:border-green-900 flex-shrink rounded-lg border-2 border-transparent p-1'
              >
                Projects
              </Link>
              <Link
                href='/blog'
                className='hover:text-green-900 hover:border-green-900 flex-shrink rounded-lg border-2 border-transparent p-1'
              >
                Blog
              </Link>
              <Link
                href='/now'
                className='hover:text-green-900 hover:border-green-900 flex-shrink rounded-lg border-2 border-transparent p-1'
              >
                Now
              </Link>
            </div>
          </div>
          <div className='border-gray-900 mt-8 border-t pt-8 md:flex md:items-center md:justify-between'>
            <div className='flex justify-center space-x-6 md:order-2 md:justify-end'>
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className='text-green-50 hover:text-green-200'
                >
                  <span className='sr-only'>{item.name}</span>
                  <item.icon
                    className='fill-gray-900 hover:fill-green-800  h-6 w-6'
                    aria-hidden='true'
                  />
                </a>
              ))}
            </div>
            <p className='mt-8 text-center text-xs leading-5 md:order-1 md:mt-0 md:text-left'>
              &copy; 2001-{new Date().getFullYear()} Adam Fortuna
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
