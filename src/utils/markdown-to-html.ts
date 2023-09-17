import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkReact from 'remark-react'
import rehypeRaw from 'rehype-raw'

const markdownToHtml = (markdownContent) =>
  unified()
    .use(remarkParse)
    .use(rehypeRaw)
    .use(remarkReact)
    .processSync(markdownContent).toString()

export default markdownToHtml
