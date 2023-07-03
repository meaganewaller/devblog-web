const siteMetadata = {
  title: "meagan waller | software engineer",
  author: "Meagan Waller",
  headerTitle: "meagan waller",
  description: "software engineer",
  language: "en-us",
  theme: "system",
  siteUrl: "https://meaganwaller.com",
  siteRepo: "https://github.com/meaganewaller/meaganwaller.com",
  siteLogo: "/static/images/logo.png",
  image: "/static/images/avatar.jpg",
  socialBanner: "/static/images/banner.png",
  email: "meagan@meaganwaller.com",
  github: "https://github.com/meaganewaller",
  twitter: "https://twitter.com/meaganewaller",
  linkedin: "https://www.linkedin.com/in/meaganewaller",
  locale: "en-US",
  analytics: {
    plausibleDataDomain: "",
    simpleAnalytics: false,
    umamiWebsiteId: "",
    googleAnalyticsId: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID,
  },
  newsletter: {
    provider: "convertkit",
  },
  comment: {
    provider: "utterances",
    utterancesConfig: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO,
      issueTerm: '',
      label: '',
      theme: '',
      darkTheme: '',
    },
  },
}

module.exports = siteMetadata
