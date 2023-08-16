import React from "react";
import Image from "next/image";
import LinkComponent, { LinkVariant, LinkSize } from "@/components/atoms/Link";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import Window from "@/components/layout/Window";
import { useWindowSize } from "@/hooks/useWindowSize";

const resources = [
  {
    role: "Backend Framework",
    name: "Ruby on Rails",
    url: "https://rubyonrails.org",
  },
  {
    role: "Frontend Framework",
    name: "Next.js",
    url: "https://nextjs.org",
  },
  {
    role: "Styling",
    name: "TailwindCSS",
    url: "https://tailwindcss.com",
  },
  {
    role: "Content Management",
    name: "Notion API",
    url: "https://developers.notion.com/",
  },
  {
    role: "Database",
    name: "Postgres",
    url: "https://postgresql.org/",
  },
  {
    role: "Newsletter",
    name: "Convertkit",
    url: "https://convertkit.com/",
  },
  {
    role: "Deployment",
    name: "Vercel",
    url: "https://vercel.com/",
  },
];

export default function Colophon() {
  const size = useWindowSize();

  return (
    <Layout hideFooter={true}>
      <div className="flex w-11/12 mx-auto mt-20">
        {size.width && size.height && (
          <Window
            title="proudly powered by these tools"
            x={size.width / 2 - (size.width * 0.9) / 2}
            y={size.height / 10}
            zIndex="1"
            width={`${size.width * 0.9}px`}
          >
            <div className="p-5 place-content-center flex-col">
              <div className="flex flex-col pb-4 place-content-center text-center">
                <h1 className="text-4xl font-venice tracking-wider italic text-secondary-600 pb-4">
                  Resources
                </h1>
                <Image
                  src="/static/images/dividers/hearts.gif"
                  width={168}
                  height={11}
                  className="mx-auto"
                  alt="Stars Divider"
                />
                <div className="mt-6 border-t border-b border-secondary-200 font-extra">
                  <dl className="divide-y divide-secondary-200">
                    {resources.map((resource, i) => (
                      <div
                        className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"
                        key={i}
                      >
                        <dt className="text-sm font-medium leading-6">
                          {resource.role}
                        </dt>
                        <dd className="mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0">
                          <LinkComponent href={resource.url} target="_blank" variant={LinkVariant.underlined}>
                            {resource.name}
                          </LinkComponent>
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </Window>
        )}
      </div>
    </Layout>
  );
}