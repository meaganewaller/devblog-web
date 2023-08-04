/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' giscus.app www.fonts.googleapis.com;
  style-src 'self' 'unsafe-inline' fonts.googleapis.com;
  img-src * blob: data:;
  media-src 'none';
  connect-src *;
  font-src 'self' www.fonts.googleapis.com fonts.gstatic.com;
  frame-src giscus.app www.youtube.com calendly.com drawsql.app
`;

const securityHeaders = [
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\n/g, ''),
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
];

/**
  * @type {import('next/dist/next-server/server/config').NextConfig}
  **/
module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  eslint: {
    dirs: ['pages', 'components', 'lib', 'layouts', 'scripts', 'config'],
  },
  images: {
    domains: ['firebasestorage.googleapis.com'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
  webpack: (config, { dev, isServer }) => {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|mp4)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next',
            name: 'static/media/[name].[hash].[ext]',
          },
        },
      ],
    });

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    if (!dev && !isServer) {
      // Replace React with Preact only in client production build
      Object.assign(config.resolve.alias, {
        'react/jsx-runtime.js': 'preact/compat/jsx-runtime',
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      });
    }

    return config;
  },
});

// //const csp = `frame-ancestors 'self';report-uri https://dfweb.report-uri.com/r/d/csp/reportOnly;block-all-mixed-content;default-src 'self';script-src 'self' 'report-sample' 'unsafe-inline' 'unsafe-eval' cdnjs.cloudflare.com;style-src-elem 'self' 'unsafe-inline' dfweb.no;style-src 'self' 'unsafe-inline' dfweb.no cdnjs.cloudflare.com fonts.googleapis.com;object-src 'none';frame-src 'self';child-src 'self';img-src 'self' data: fonts.gstatic.com;font-src 'self' fonts.googleapis.com fonts.gstatic.com;connect-src 'self' fonts.googleapis.com fonts.gstatic.com;manifest-src 'self';base-uri 'self';form-action 'self';media-src 'self';prefetch-src 'self';worker-src 'self' blob:;`;
//
// const headers = [
//   {
//     key: "X-DNS-Prefetch-Control",
//     value: "on",
//   },
//   {
//     key: "Strict-Transport-Security",
//     value: "max-age=63072000; includeSubDomains; preload",
//   },
//   {
//     key: "Server",
//     value: "Apache 2.0", // fake server value
//   },
//   {
//     key: "X-Content-Type-Options",
//     value: "nosniff",
//   },
//   {
//     key: "X-Frame-Options",
//     value: "sameorigin",
//   },
//   {
//     key: "X-XSS-Protection",
//     value: "1; mode=block",
//   },
//   {
//     key: "Referrer-Policy",
//     value: "same-origin",
//   },
//   {
//     key: "Permissions-Policy",
//     value: "geolocation=*", // allow specified policies here
//   },
// ];
//
// const config = {
//   reactStrictMode: true,
//   trailingSlash: true,
//   poweredByHeader: false,
//   images: {
//     domains: [
//       "meaganwaller.com",
//       "proxy.meaganwaller.com",
//       "placekitten.com",
//       "s3.us-west-2.amazonaws.com",
//     ],
//     minimumCacheTTL: 600,
//   },
//   i18n: {
//     locales: ["nb-NO"],
//     defaultLocale: "nb-NO",
//   },
//   async headers() {
//     return [
//       {
//         source: "/(.*)",
//         headers,
//       },
//     ];
//   },
// };
// export default config;
