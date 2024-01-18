module.exports = {
  // Run type-check on changes to TypeScript files
  '**/*.ts?(x)': () => 'pnpm type-check',
  // Lint & Prettify TS and JS files
  '**/*.(ts|tsx|js)': (filenames) => [
    `pnpm lint . ${filenames.join(' ')}`,
    `pnpm prettier --write ${filenames.join(' ')}`,
  ],
}
