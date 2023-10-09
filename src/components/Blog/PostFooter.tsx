/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

export const PostFooter = () => (
  <div className="max-w-6xl mx-auto my-8">
    <div className="card max-w-4xl mx-auto flex flex-row gap-8 h-card vcard p-author author">
      <img
        className="rounded-lg w-[100px] h-[100px]"
        alt="Avatar of Meagan Waller"
        loading="lazy"
        src="/static/images/avatar.svg"
        width={100}
        height={100}
      />
      <img
        className="u-photo hidden"
        alt="Avatar for Meagan Waller"
        loading="lazy"
        src="/static/images/avatar.svg"
      />
      <div>
        <p className="mb-2">
          Welcome! I'm{' '}
          <Link className="p-name fn u-url" href={String(process.env.NEXT_PUBLIC_BASE_URL)} rel="author">
            Meagan Waller
          </Link>
          .{' '}
          <span className="p-note">
          </span>
        </p>
        <p>
          Let's keep in touch! Follow me on{' '}
          <a href="https://ruby.social/@meagan" target="_blank" className="text-deep-sky-blue" rel="noreferrer">
            Mastodon
          </a>
          , subscribe to my{' '}
          <Link href="/newsletter" className="text-deep-sky-blue">
            newsletter
          </Link>{' '}
          or subscribe to my{' '}
          <a href="/api/feed" target="_blank" className="text-deep-sky-blue">
            RSS feed
          </a>
          .
        </p>
      </div>
    </div>
  </div>
)
