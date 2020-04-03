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
    'plugin:jest/recommended',
  ].filter(s => !!s),
  parser: '@typescript-eslint/parser',
  env: {
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  settings,
};
