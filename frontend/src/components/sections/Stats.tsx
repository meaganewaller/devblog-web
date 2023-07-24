import useSWR from 'swr';
import Link from 'next/link';
import fetcher from '@/lib/utils/fetcher';
import type { WakatimeStats } from '@/models';
import { FiExternalLink } from 'react-icons/fi';
import Window from '@/components/layout/Window';
import { useWindowSize } from '@/hooks/useWindowSize';
import { useState, useEffect } from 'react';

export default function Stats() {
  const size = useWindowSize();
  const { data: wakatimeData } = useSWR<WakatimeStats>(
    '/api/stats/wakatime',
    fetcher
  );

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const stats = [
    {
      title: 'Weekly Coding Hours',
      value: Math.round((wakatimeData?.total_seconds as number) / 3600),
      link: 'https://wakatime.com/@meaganewaller',
    },
  ];

  return (
    <Window
      title="by the numbers"
      x={size.width / 20}
      y={size.height / 10 + 410}
      zIndex="1"
      width="300px"
      height="400px"
    >
      <div className="flex h-full p-5 place-content-center flex-col font-extra">
        {mounted &&
          stats.map((card, index) => {
            return (
              <div
                className="from-secondary-200 to-secondary-lighter-200 bg-gradient-to-r dark:from-primary-300 dark:to-accent-fourth-500 rounded-lg shadow-xl p-4 flex flex-col justify-between gap-2"
                key={index}
              >
                <Link
                  className="font-extra text-primary-800 dark:text-accent-first-darker-900 flex gap-4 m-0"
                  href={card.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {card.title} <FiExternalLink />
                </Link>
                <h3 className="font-extra text-primary-700 dark:text-accent-first-darker-800 m-0">
                  {card.value || '-'}
                </h3>
              </div>
            );
          })}
      </div>
    </Window>
  );
}
