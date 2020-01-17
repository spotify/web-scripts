const { hasConfig } = require('@spotify/web-scripts-utils');

const hasReact = hasConfig([
  { type: 'dependency', dependency: 'react' },
  { type: 'dependency', dependency: 'react', dependencyType: 'peer' },
]);
const hasTypescript = hasConfig([
  { type: 'dependency', dependency: 'typescript' },
  { type: 'dependency', dependency: 'typescript', dependencyType: 'dev' },
  { type: 'file', pattern: 'tsconfig.json' },
]);

let settings;

if (hasReact) {
  settings = {
    react: {
      version: 'detect',
    },
  };
}

module.exports = {
  extends: [
    '@spotify/eslint-config-base',
    hasReact ? '@spotify/eslint-config-react' : null,
    hasTypescript ? '@spotify/eslint-config-typescript' : null,
    'prettier',
    hasReact ? 'prettier/react' : null,
    hasTypescript ? 'prettier/@typescript-eslint' : null,
  ].filter(s => !!s),
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  overrides: [
    {
      files: [
        '**/__@(tests|mocks)__/**/*.[jt]s?(x)',
        '**/*.@(spec|test).[jt]s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
  settings,
};
