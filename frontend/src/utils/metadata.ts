import type { Metadata } from 'next'
import { buildOgImageUrl } from './og'

type MetaImageStyle = 'summary_large_image' | 'summary'

const defaultLogoImage =
  'https://meaganwaller.com/static/images/logo/logo-512.png'

export const getStaticMetadata = (data: {
  title: string;
  description: string;
  keywords?: string | Array<string> | null;
  exactUrl?: string;
  image?: string;
  metaImageStyle?: MetaImageStyle;
}): Metadata => {
  const { title, description, keywords, exactUrl, image, metaImageStyle } =
  data;

  const actualDefaultImage =
    metaImageStyle === 'summary' ? defaultLogoImage : buildOgImageUrl();
  const actualImage = image || actualDefaultImage;
  const actualMetaImageStyle = actualImage === defaultLogoImage ? 'summary' : metaImageStyle || 'summary_large_image';

  return {
    title,
    description,
    keywords,
    authors: [{ name: 'Meagan Waller', url: 'https://meaganwaller.com' }],
    openGraph: {
      title,
      description,
      url: exactUrl || 'https://meaganwaller.com',
      siteName: title,
      images: [{ url: actualImage }],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      title,
      description,
      images: [{ url: actualImage }],
      card: actualMetaImageStyle,
      creator: '@meaganewaller',
      site: '@meaganewaller'
    },
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION,
    },
    metadataBase: new URL('https://meaganwaller.com')
  };
};

export const colorMetaTags = [
  'theme-color',
  'msapplication-TileColor',
  'msapplication-navbutton-color',
  'apple-mobile-web-app-status-bar-style',
];
