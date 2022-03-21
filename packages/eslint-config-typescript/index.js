/*
 * Copyright 2020 Spotify AB
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  // camelcase, indent, no-array-constructor, and no-unused-vars are all
  // busted when using TypeScript at the moment. When you use this plugin, you're
  // forced to turn off the base rules from ESLint and turn on the TypeScript-friendly
  // variant that comes with @typescript-eslint/eslint-plugin.
  rules: {
    // camelcase interference fix.
    camelcase: 'off',
    '@typescript-eslint/naming-convention': 'off',
    // indent interference fix.
    indent: 'off',
    '@typescript-eslint/indent': ['error', 2, { SwitchCase: 1 }],
    // no-array-constructor interference fix.
    'no-array-constructor': 'off',
    '@typescript-eslint/no-array-constructor': 'error',
    // no-unused-vars interference fix.
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    // no-useless-constructor interference fix.
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
    // semi interference fix.
    semi: 'off',
    '@typescript-eslint/semi': 'warn',
    // no-shadow interference fix.
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    // no-redeclare interference fix.
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': 'error',
    // no-use-before-define interference fix.
    // allow functions to be defined after they're used
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error', 'nofunc'],
  },
};
