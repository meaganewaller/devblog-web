import { colorMetaTags } from '@/utils/metadata';

export const Meta = () => {
  return (
    <>
      <meta charSet={'UTF-8'} />
      <meta
        name={'viewport'}
        content={'width=device-width, initial-scale=1.0'}
      />
      <meta httpEquiv={'x-ua-compatible'} content={'ie=edge'} />

      <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />

      <link rel={'shortcut icon'} href={'/static/images/brand/favicon32.png'} />
      <link
        rel={'apple-touch-icon'}
        href={'/static/images/brand/favicon57.png'}
      />
      <link
        rel={'apple-touch-icon'}
        sizes={'72x72'}
        href={'/static/images/brand/favicon72.png'}
      />
      <link
        rel={'apple-touch-icon'}
        sizes={'114x114'}
        href={'/static/images/brand/favicon114.png'}
      />
      <link
        rel={'apple-touch-icon-precomposed'}
        href={'/static/images/brand/favicon32.png'}
      />
      <link
        rel={'icon'}
        sizes={'32x32'}
        href={'/static/images/brand/favicon32.png'}
      />
      <meta
        name={'msapplication-TileImage'}
        content={'/static/images/brand/favicon32.png'}
      />

      <link
        rel={'alternate'}
        href={'/feed.xml'}
        type={'application/rss+xml'}
        title={'Jahir Fiquitiva (RSS)'}
      />

      {colorMetaTags.map((tag) => (
        <meta key={tag} name={tag} content={'transparent'} />
      ))}
    </>
  );
};
