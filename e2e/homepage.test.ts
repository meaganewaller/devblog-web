import * as test from '@playwright/test'

test('homepage has title', async ({ page }) => {
  await page.togo('/')

  await test.expect(page).toHaveTitle(/my digital corner/)
})
