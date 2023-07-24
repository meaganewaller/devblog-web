import React, { useRef, useState } from 'react';
import siteMetadata from '@/data/siteMetadata';

const NewsletterForm = ({ title = 'Subscribe to the Newsletter' }) => {
  const inputEl = useRef<HTMLInputElement>(null);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const subscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch(`/api/convertkit`, {
      body: JSON.stringify({ email: inputEl.current.value }),
      headers: {
      'Content-Type': 'application/json',
      },
method: 'POST',
});

const { error } = await res.json();
if (error) {
  setError(true);
  setMessage(
      'Your e-mail address is invalid or you are already subscribed!',
      );
  return;
}

inputEl.current.value = '';
setError(false);
setSubscribed(true);
setMessage('Successful! 🎉 You are now subscribed.');
};

  return (
    <div>
      <form
        className="border-2 rounded-xl border-primary-500 border-solid grid grid-rows-[1fr_1fr_auto] gap-4 min-w-[500px] shadow-[0_0_#0000,0_0_#000,2px_2px_#0000] p-8"
        onSubmit={subscribe}>
        <h1 className="justify-self-center self-center text-[1.375rem] text-primary-500">{title}</h1>
        <div className="grid grid-cols-[1fr_auto] gap-2">
          <div className="grid gap-2">
            <label className="text-sm text-primary-400" htmlFor="email-input">
              Email address
            </label>
            <input
              autoComplete='email'
              className="rounded-md shadow-[0_0_#0000,0_0_#0000,2px_2px_#0000] border border-primary-400 text-primary-500 p-2 border-solid focus:bg-primary-lightest-100 focus:outline-none"
              id='email-input'
              name='email'
              placeholder={subscribed ? "You're subscribed !  🎉" : 'Enter your email'}
              ref={inputEl}
              required
              type='email'
              disabled={subscribed}
            />
          </div>
          <input
            className="shadow-[0_0_#0000,0_0_#0000,2px_2px_#0000] border border-primary-400 bg-white text-primary-500 p-2 border-solid focus:bg-primary-lightest-100 justify-self-end cursor-pointer hover:bg-primary-lightest-100"
            type='submit'
            style={{ alignSelf: "end" }}
            disabled={subscribed}
          />
        </div>
        <p className="justify-self-end text-sm italic text-primary-300" style={{alignSelf: "end"}}>No spam. We'll never sell your email address.</p>
      </form>
      {error && (
        <div className='pt-2 text-sm text-red-500 dark:text-red-400'>
          {message}
        </div>
      )}
    </div>

  )
}

export default NewsletterForm;

export const BlogNewsletterForm = ({ title }) => {
<div className="flex items-center justify-center">
  <div className="bg-gray-100 p-6 dark:bg-gray-800 sm:px-14 sm:py-8">
    <NewsletterForm title={title} />
  </div>
</div>
}
