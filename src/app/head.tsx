import { NextSeo } from "next-seo";

import ClientHead from "@/components/Layouts/ClientHead";

import NEXT_SEO_DEFAULT from "@/config/next-seo.config";

export default function Head() {
  return (
    <>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
      />
      <NextSeo {...NEXT_SEO_DEFAULT} />
      <ClientHead />
    </>
  );
}
