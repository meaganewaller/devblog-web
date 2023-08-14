import Layout from '@/components/layout/Layout';
import Window from '@/components/layout/Window';
import { useWindowSize } from '@/hooks/useWindowSize';
import React, { useState } from 'react';

const fields = {
  name: {
    type: 'text',
    valType: 'string',
    label: 'Your name',
    placeholder: 'Your name e.g. Darlene Alderson',
    minLength: 2,
    maxLength: 128,
  },
  email: {
    type: 'email',
    valType: 'string',
    label: 'Your email:',
    placeholder: 'Your email e.g. dolores.haze@virtualrealty.com',
    minLength: 5,
    maxLength: 256,
  },
  subject: {
    type: 'text',
    valType: 'string',
    label: 'Message subject:',
    placeholder: 'Message subject e.g. General Inquiry',
    minLength: 2,
    maxLength: 64,
  },
  message: {
    type: 'textarea',
    valType: 'string',
    label: 'Message:',
    placeholder: 'Your message',
    minLength: 1,
    maxLength: 256,
  },
};

const fieldKeys = Object.keys(fields);

const handleSubmit = async (e, pending, setPending, setMessage) => {
  e.preventDefault();
  if (pending) return;

  let data = {};
  const els = [];
  let incomplete = false;

  for (const key of fieldKeys) {
    let el = document.querySelector(`form #${key}`);
    els.push(el);
    data[key] = (el.value || '').trim();
    incomplete |= data[key].length === 0;
  }

  if (incomplete) return;
  setPending(true);
  setMessage(null);

  els.forEach((el) => {
    el.value = '';
  });

  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const { message } = await res.json();
      setMessage(message);
    } else {
      setMessage('Message sent!');
    }
  } catch (error) {
    console.error(error);
    setMessage('Error occured sending message.');
  }
  setPending(false);
};

export default function Contact() {
  const [message, setMessage] = useState(null);
  const [pending, setPending] = useState(false);
  const size = useWindowSize();

  return (
      <Layout hideFooter={true}>
      {size.height && size.width && (
        <Window
          title="lets-connect.txt"
          x={(size.width * 0.17) / 2}
          y={size.height / 10}
          zIndex="1"
          width={`${size.width / 1.25}px`}
        >
          <div className="p-3">
            <div className="border-solid border-3 border-primary-500 mx-auto my-0 relative w-full">
              <h2 className="text-primary-500 text-5xl text-center font-regular font-venice">
                Send a message
              </h2>
              <form
                className="w-full leading-5 break-words text-primary-500"
                onSubmit={(e) => handleSubmit(e, pending, setPending, setMessage)}
              >
                {fieldKeys.map((key) => {
                  const field = fields[key];
                  return (
                    <fieldset className="p-4 leading-5 break-words text-primary-500" key={field}>
                      <div className="overflow-auto break-words" key={key}>
                        <label
                          className="block w-full text-sm cursor-pointer font-mono uppercase"
                          htmlFor={key}
                        >
                          {field.label}
                        </label>
                        {React.createElement(
                          field.type === 'textarea' ? 'textarea' : 'input',
                          {
                            id: key,
                            type: field.type,
                            className:
                            'overflow-visible py-3 px-2 m-0 w-full font-mono text-base bg-white rounded-none border border-solid appearance-none cursor-text border-neutral-900 focus:appearance-none',
                            minLength: field.minLength,
                            maxLength: field.maxLength,
                            placeholder: field.placeholder,
                          }
                        )}
                      </div>
                    </fieldset>
                  );
                })}
                {message && <p>{message}</p>}
                <div className="mb-2 p-4 leading-5">
                  <button
                    type="submit"
                    className="inline-flex overflow-visible relative justify-center items-center py-3 px-8 m-0 text-center border-3 border-primary-500 border-solid cursor-pointer select-none uppercase font-mono"
                  >
                    {pending ? <div className="spinner" /> : 'Send'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Window>
        )}
    </Layout>
  );
};
