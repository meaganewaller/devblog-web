const withTwin = require('./withTwin.js')
const ContentSecurityPolicy = `
  default-src 'self' https: wss:;
  script-src 'self' https://kit.fontawesome.com https://www.googletagmanager.com https://s3.tradingview.com 'unsafe-eval' 'unsafe-inline';
  style-src 'self' 'unsafe-inline';
  font-src 'self' https:;
`;

/**
 * @type {import('next').NextConfig}
 */
module.exports = withTwin({
  reactStrictMode: true,
  swcMinify: true,
  headers: async () => {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Content-Security-Policy',
            value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      }
    ]
  },
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com', 'placekitten.com', 'meaganwaller.com', 's3.us-west-2.amazonaws.com']
  },
})
