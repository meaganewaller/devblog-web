import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeToc from 'rehype-toc'
import rehypeHighlight from 'rehype-highlight'
import rehypeStringify from 'rehype-stringify'
import * as shiki from "shiki"
import withShiki from "@stefanprobst/rehype-shiki"

export async function transformMarkdown(content: string): Promise<string> {
  const theme = 'nord'
  const highlighter = await shiki.getHighlighter({ theme: theme })

  const transformer = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeStringify)
    .use(withShiki, { highlighter })
    .process(content)

  return String(transformer)
}3
