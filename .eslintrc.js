module.exports = {
  root: true,
  // parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    node: true,
  },
  plugins: ['prettier'],
  extends: [
    'eslint:recommended',
    // 'plugin:@typescript-eslint/eslint-recommended',
    // 'plugin:@typescript-eslint/recommended',
    'next/core-web-vitals',
  ],
  rules: {
    // '@typescript-eslint/no-unused-vars': 'warn',
    'prettier/prettier': 'warn',
    '@next/next/no-img-element': 'off',
    // '@typescript-eslint/no-explicit-any': 'off',
    // '@typescript-eslint/no-empty-interface': 'off',
    // '@typescript-eslint/ban-ts-comment': 'off',
  },
}
