/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_BASE_URL,
  changefreq: 'daily',
  priority: 1.0,
  generateRobotsTxt: true,
  exclude: ['*/dpa', '*/ccpa', '*/privacy', '*/terms', '*/404'],
  alternateRefs: [
    {
      href: process.env.NEXT_PUBLIC_BASE_URL + '/en',
      hreflang: 'en',
    },
  ],
}
