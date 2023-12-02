import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
import rehypeRaw from 'rehype-raw'
import rehypeSlug from 'rehype-slug'
import rehypePrism from 'rehype-prism-plus'

export async function transformMarkdown(content: string) {
  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeFormat)
    .use(rehypeStringify)
    .use(rehypeSlug)
    .use(rehypePrism)
    .process(content)


  return processedContent.toString()
}
