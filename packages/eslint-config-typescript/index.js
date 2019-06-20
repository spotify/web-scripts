module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  // camelcase, indent, no-array-constructor, and no-unused-vars are all
  // busted when using TypeScript at the moment. When you use this plugin, you're
  // forced to turn off the base rules from ESLint and turn on the TypeScript-friendly
  // variant that comes with @typescript-eslint/eslint-plugin.
  rules: {
    // camelcase interference fix.
    camelcase: 'off',
    '@typescript-eslint/camelcase': [2, { properties: 'never' }],
    // indent interference fix.
    indent: 'off',
    '@typescript-eslint/indent': ['error', 2, { SwitchCase: 1 }],
    // no-array-constructor interference fix.
    'no-array-constructor': 'off',
    '@typescript-eslint/no-array-constructor': 'error',
    // no-unused-vars interference fix.
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
  },
};
