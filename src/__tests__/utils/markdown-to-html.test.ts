import { describe, expect, it } from 'vitest'

import { transformMarkdown } from '../../utils/markdown-to-html'

describe('transformMarkdown', () => {
  it('returns html', async () => {
    const transformed = await transformMarkdown('# Hello World')
    expect(transformed).toBe('\n<h1 id="hello-world">Hello World</h1>\n')
  })
})
