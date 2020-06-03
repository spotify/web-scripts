# @spotify/eslint-config-jest

Spotify's TypeScript full ESLint config.

## Installation

```sh
npm install --save-dev eslint @spotify/eslint-config
```

## Usage

After installing, update your project's ESLint config:

```json
{
  "extends": ["@spotify/eslint-config-jest"]
}
```

It will often be useful to extend this configuration only for test files. This way, eslint will warn you if you try to use things like Jest globals in non-test code:

```js
{
  "extends": ["@spotify"],
  "overrides": [
    {
      // If you override Jest's testMatch configuration,
      // adjust this setting to match.
      //
      // cf. https://jestjs.io/docs/en/configuration.html#testmatch-arraystring
      files: [
        '**/{__tests__,__mocks__}/**/*.{js,jsx,ts,tsx}',
        '**/*.{spec,test}.{js,jsx,ts,tsx}'
      ],
      "extends": ["@spotify/eslint-config-jest"]
    }
  ]
}
```

---

Read the [ESlint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files)
for more information.
