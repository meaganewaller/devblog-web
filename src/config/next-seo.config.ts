const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const NEXT_SEO_DEFAULT = {
  title: "meagan waller | welcome to my digital home!",
  description: "meagan waller is a senior software developer.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Meagan Waler",
    images: [
      {
        url: `${baseUrl}/static/images/og/og.png`,
        width: 1200,
        heightT: 600,
        alt: "I'm Meagan Waller, a senior software developer.",
      },
    ],
  },
  twitter: {
    handle: "@meaganewaller",
    site: "@meaganewaller",
    cardType: "summary_large_image",
  },
};

export default NEXT_SEO_DEFAULT;
