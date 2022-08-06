module.exports = {
  // '**/*.ts?(x)': () => 'tsc -p tsconfig.json --noEmit',
  // '**/*.{js,jsx,ts,tsx}': 'pnpm clean',
  '**/*.{js,jsx,ts,tsx,json,css,scss}': ['prettier --write'],
  '*/**/*.{js,ts,tsx}': 'pnpm lint --quiet --fix',
  '**/packages/**/*.{ts,tsx}': 'jest --bail --findRelatedTests',
};
