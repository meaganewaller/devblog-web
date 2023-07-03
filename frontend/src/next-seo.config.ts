import { DefaultSeoProps } from "next-seo";

const config: DefaultSeoProps = {
  title: undefined,
  titleTemplate: "%s | meagan waller",
  defaultTitle: "meagan waller | a blog about software engineering",
  description: "description here later",
  themeColor: "#",
  openGraph: {
    title: "Meagan Waller",
    description: "",
    url: "https://meaganwaller.com",
    siteName: "Meagan Waller",
    locale: "en-US",
    images: [
    ],
    type: "website",
  },
  defaultOpenGraphImageWidth: 1920,
  defaultOpenGraphImageHeight: 1080,
  twitter: {
    handle: "@meaganewaller",
    site: "https://meaganwaller.com",
    cardType: "summary_large_image",
  },
  additionalLinkTags: [{ rel: "icon", href: "/favicon.svg" }],
  additionalMetaTags: [
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    {
      name: "google-site-verification",
      content: "",
    },
  ],
};

export default config;
