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
  plugins: ['react', 'react-hooks', 'jsx-a11y'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ['plugin:jsx-a11y/recommended'],
  rules: {
    // Prevent missing displayName in a React component definition
    'react/display-name': 0,
    // Enforce boolean attributes notation in JSX
    'react/jsx-boolean-value': 2,
    // Enforce or disallow spaces inside of curly braces in JSX attributes
    'react/jsx-curly-spacing': 0,
    // Enforce or disallow react string props to be wrapped in curly braces
    'react/jsx-curly-brace-presence': 2,
    // Prevent duplicate props in JSX
    'react/jsx-no-duplicate-props': 0,
    // Disallow undeclared variables in JSX
    'react/jsx-no-undef': 0,
    // Enforce quote style for JSX attributes
    'react/jsx-quotes': 0,
    // Enforce propTypes declarations alphabetical sorting
    'react/jsx-sort-prop-types': 0,
    // Enforce props alphabetical sorting
    'react/jsx-sort-props': 0,
    // Prevent React to be incorrectly marked as unused
    'react/jsx-uses-react': 2,
    // Prevent variables used in JSX to be incorrectly marked as unused
    'react/jsx-uses-vars': 2,
    // Prevent missing parentheses around multilines JSX
    'react/jsx-wrap-multilines': 2,
    // Enforce react rules of hooks
    'react-hooks/rules-of-hooks': 2,
    // Enforce the list of dependencies for hooks is correct
    'react-hooks/exhaustive-deps': 2,
    // Prevent usage of dangerous JSX properties
    'react/no-danger': 0,
    // Prevent usage of setState in componentDidMount
    'react/no-did-mount-set-state': 0,
    // Prevent usage of setState in componentDidUpdate
    'react/no-did-update-set-state': 2,
    // Prevent multiple component definition per file
    'react/no-multi-comp': [2, { ignoreStateless: true }],
    // Prevent usage of unknown DOM property
    'react/no-unknown-property': 2,
    // Prevent missing props validation in a React component definition
    'react/prop-types': 0,
    // Prevent missing React when using JSX
    'react/react-in-jsx-scope': 2,
    // Restrict file extensions that may be required
    'react/require-extension': 0,
    // Prevent extra closing tags for components without children
    'react/self-closing-comp': 2,
    // Enforce component methods order
    'react/sort-comp': [
      2,
      {
        order: [
          'statics',
          'static-variables',
          'static-methods',
          'instance-variables',
          'constructor',
          'getChildContext',
          'componentDidMount',
          'shouldComponentUpdate',
          'getSnapshotBeforeUpdate',
          'componentDidUpdate',
          'componentWillUnmount',
          'componentDidCatch',
          '/^handle.+$/',
          '/^on.+$/',
          'everything-else',
          '/^render.+$/',
          'render',
        ],
      },
    ],
  },
};
