const { createSecureHeaders } = require("next-secure-headers");

/** @type {import('next').NextConfig} */
module.exports = {
  experimental: {
    appDir: true,
  },
  async headers() {
    return [{ source: "/(.*)", headers: createSecureHeaders() }];
  },
  images: {
    dangerouslyAllowSVG: true,
    domains: ["meaganwaller.com", "proxy.meaganwaller.com", "placekitten.com", "s3.us-west-2.amazonaws.com"],
  },
};
// /** @type {import('next').NextConfig}*/
// const nextConfig = {
//   images: {
//     dangerouslyAllowSVG: true,
//     domains: ["meaganwaller.com", "proxy.meaganwaller.com", "placekitten.com", "s3.us-west-2.amazonaws.com"],
//     minimumCacheTTL: 600,
//   },
// };
//
// module.exports = nextConfig;
// // const withPWA = require("next-pwa")
// const { createSecureHeaders } = require("next-secure-headers")
//
// /** @type {import('next').NextConfig} */
// const config = {
//   reactStrictMode: true,
//   poweredByHeader: false,
//   swcMinify: true,
//   images: {
//     dangerouslyAllowSVG: true,
//     domains: ["meaganwaller.com", "proxy.meaganwaller.com", "placekitten.com", "s3.us-west-2.amazonaws.com"],
//     minimumCacheTTL: 600
//   },
//   async headers() {
//     return [
//       {
//         source: "/(.*)",
//         headers: createSecureHeaders()
//       }
//     ]
//   },
//   async rewrites() {
//     return [
//       {
//         source: "/feed/:format*",
//         destination: "/api/feed?f=:format*",
//       },
//       {
//         source: "/sitemap.xml",
//         destination: "/sitemap",
//       },
//       {
//         source: "/robots.txt",
//         destination: "/.well-known/robots.txt",
//       },
//     ]
//   },
//   async redirects() {
//     return [
//       {
//         source: "/sponsor",
//         destination: "https://github.com/sponsors/meaganewaller",
//         permanent: true,
//       },
//     ]
//   },
// }
//
// module.exports = config
