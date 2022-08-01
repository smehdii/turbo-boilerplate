module.exports = {
  extends: ['next', 'prettier'],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    'react/jsx-key': 'off',
  },
  configs: {
    recommended: {
      parser: '@typescript-eslint/parser',
      parserOptions: {sourceType: 'module'},
      rules: {
        // '@kaizer/eslint/deprecated-imports': 'error',
      },
    },
  },
}
