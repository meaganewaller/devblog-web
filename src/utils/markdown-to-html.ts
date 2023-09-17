import rehypeRaw from 'rehype-raw'
import remarkParse from 'remark-parse'
import remarkReact from 'remark-react'
import { unified } from 'unified'

const markdownToHtml = (markdownContent) =>
  unified().use(remarkParse).use(rehypeRaw).use(remarkReact).processSync(markdownContent).toString()

export default markdownToHtml
