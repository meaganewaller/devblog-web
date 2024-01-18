export default {
  title: {
    default: "meagan waller",
    template: "%s | meagan waller",
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    title: "Meagan Waller",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.ico",
  },
  other: {
    "yandex-verification": process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
    "google-site-verification": process.env.NEXT_PUBLIC_SITE_VERIFICATION,
    robots: "max-snippet:-1,max-image-preview:large,max-view-preview:-1",
  },
};
