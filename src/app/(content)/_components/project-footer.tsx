import Link from 'next/link'

export const ProjectFooter = () => (
  <div className='mx-auto my-8 max-w-6xl'>
    <div className='card h-card vcard p-author author mx-auto flex max-w-4xl flex-row gap-8'>
      <img
        className='h-[100px] w-[100px] rounded-lg'
        alt='Avatar for Meagan Waller'
        loading='lazy'
        src='/static/images/avatar.svg'
        width={100}
        height={100}
      />
      <div>
        <p className='mb-2'>
          Welcome! I'm{' '}
          <Link className='p-name fn u-url' href={String(process.env.NEXT_PUBLIC_BASE_URL) + '/meagan'} rel='author'>
            Meagan Waller
          </Link>
          . <span className='p-note'>I'm a software developer based in Jacksonville, FL.</span>
        </p>
        <p>
          Let's keep in touch! Follow me on{' '}
          <Link
            href='https://www.linkedin.com/in/meaganwaller/'
            target='_blank'
            className='text-gradient-purple'
            rel='noreferrer'
          >
            LinkedIn
          </Link>
          , subscribe to my{' '}
          <Link href='/newsletter' className='text-gradient-purple'>
            Newsletter
          </Link>{' '}
          or subscribe to my{' '}
          <Link href='/api/feed' target='_blank' className='text-gradient-purple'>
            RSS feed
          </Link>
          .
        </p>
      </div>
    </div>
  </div>
)
