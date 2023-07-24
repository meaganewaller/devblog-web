import { NextSeo } from 'next-seo';

type SeoProps = {
  title?: string;
  description?: string;
  article?: {
    url: string;
    title: string;
    publishedTime: string;
  };
};

export default function Seo({ title, description, article }: SeoProps) {
  return article ? (
    <NextSeo
      title="Blog"
      description={`Read more about "${article.title}" on Meagan's blog`}
      openGraph={{
        title: article.title,
        description: `Read more about "${article.title}" on Meagan's blog`,
        url: article.url,
        type: 'article',
        images: [
          {
            url: `https://meaganwaller.com/api/og?title=${article.title}`,
            width: 1920,
            height: 1080,
            alt: post.title,
          },
        ],
        article: {
          publishedTime: post.publishedTime,
          authors: ['Meagan Waller'],
        },
      }}
    />
  ) : (
    <NextSeo
      title={title}
      description={description}
      openGraph={{
        title: title,
        description: description,
        images: [
          {
            url: `https://meaganwaller.com/api/og?title=${title}`,
            width: 1920,
            height: 1080,
            alt: title,
          },
        ],
      }}
    />
  );
}
