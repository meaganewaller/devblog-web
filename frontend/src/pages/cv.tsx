import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import Window from '@/components/layout/Window';
import { useWindowSize } from '@/hooks/useWindowSize';

const events = [
  {
    role: 'Senior Software Development Consultant',
    company: 'Test Double',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.',
    dates: 'Feb 2021 - ',
  },
  {
    role: 'Software Developer',
    company: 'CIVIQS',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.',
    dates: 'Jun 2015 - Feb 2021',
  },
  {
    role: 'Rails Contractor',
    company: null,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.',
    dates: 'Sep 2014 - Jun 2015',
  },
  {
    role: 'Software Consultant',
    company: '8th Light',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.',
    dates: 'Apr 2014 - Sep 2014',
  },
  {
    role: 'Software Apprentice',
    company: '8th Light',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.',
    dates: 'Mar 2013 - Apr 2014',
  },
];

export default function CV() {
  function chunk(arr: [], size: number) {
    const chunkedArr = [];
    for (let i = 0; i < arr.length; i++) {
      const last = chunkedArr[chunkedArr.length - 1];
      if (!last || last.length === size) {
        chunkedArr.push([arr[i]]);
      } else {
        last.push(arr[i]);
      }
    }
    return chunkedArr;
  }
  const size = useWindowSize();
  return (
    <Layout>
      <div className="flex w-11/12 mx-auto mt-20">
        <Window
          title="work history"
          x={size.width / 2 - (size.width * 0.9) / 2}
          y={size.height / 10}
          zIndex="1"
          width={`${size.width * 0.9}px`}
        >
          <div className="py-6 flex flex-col justify-center sm:py-12">
            <div className="py-3 sm:max-w-xl sm:mx-auto w-full px-2 sm:px-0">
              <div className="relative text-primary-500 dark:text-accent-first-200 antialiased text-sm font-semibold">
                <div className="hidden sm:block w-1 bg-primary-300 dark:bg-accent-first-300 absolute h-full left-1/2 transform -translate-x-1/2" />
                {chunk(events, 2).map((chunk, index) => (
                  <div key={index}>
                    <div className="mt-6 sm:mt-0 sm:mb-12">
                      <div className="flex flex-col sm:flex-row items-center">
                        <div className="flex justify-start w-full mx-auto items-center">
                          <div className="w-full sm:w-1/2 sm:pr-8">
                            <div className="p-4 dark:bg-accent-first-500 bg-primary-500 dark:text-accent-first-lighter-100 text-primary-lightest-100 rounded shadow">
                              <h2 className="text-sm font-mono tracking-wide font-semibold">
                                {chunk[0].role}
                              </h2>
                              {chunk[0].company && (
                                <h3 className="text-xs font-mono">
                                  {chunk[0].company}
                                </h3>
                              )}
                              <p>{chunk[0].description}</p>
                              <Link
                                href="#"
                                className="py-2 px-3 dark:bg-accent-first-800 bg-primary-light-100 text-primary-500 rounded-sm"
                              >
                                Read more
                              </Link>
                              <span className="text-xs inline-block">
                                {chunk[0].dates}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="rounded-full dark:bg-accent-first-light-500 bg-primary-light-500 border-primary-500 dark:border-accent-first-500 border-2 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                          <Image
                            src="/static/images/emojis/computer.gif"
                            width={21}
                            height={18}
                            alt="Pink pixel art computer"
                          />
                        </div>
                      </div>
                    </div>
                    {chunk[1] && (
                      <div className="mt-6 sm:mt-0 sm:mb-12">
                        <div className="flex flex-col sm:flex-row items-center">
                          <div className="flex justify-end w-full mx-auto items-center">
                            <div className="w-full sm:w-1/2 sm:pl-8">
                              <div className="p-4 dark:bg-accent-first-500 bg-primary-500 dark:text-accent-first-lighter-100 text-primary-lightest-100 rounded shadow">
                                <h2 className="text-sm font-mono tracking-wide">
                                  {chunk[1].role}
                                </h2>
                                {chunk[1].company && (
                                  <h3 className="text-xs font-mono">
                                    {chunk[1].company}
                                  </h3>
                                )}
                                <p>{chunk[1].description}</p>
                                <Link
                                  href="#"
                                  className="py-2 px-3 dark:bg-accent-first-800 bg-primary-light-100 text-primary-500 rounded-sm"
                                >
                                  Read more
                                </Link>
                                <span className="text-xs inline-block">
                                  {chunk[1].dates}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="rounded-full dark:bg-accent-first-light-500 bg-primary-light-500 border-primary-500 dark:border-accent-first-500 border-2 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                            <Image
                              src="/static/images/emojis/computer.gif"
                              width={21}
                              height={18}
                              alt="Pink pixel art computer"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Window>
      </div>
    </Layout>
  );
}
