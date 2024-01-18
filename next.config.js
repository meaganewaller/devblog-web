// eslint-disable-next-line
const withTwin = require("./withTwin.js");
/** @type {import('next').NextConfig} */
module.exports = withTwin({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "images.unsplash.com",
      "via.placeholder.com",
      "placekitten.com",
      "meaganwaller.com",
      "s3.us-west-2.amazonaws.com",
      "prod-files-secure.s3.us-west-2.amazonaws.com",
    ],
  },
});
