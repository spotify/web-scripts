# @spotify/eslint-config

Spotify's TypeScript full ESLint config.

## Installation

```sh
npm install --save-dev eslint @spotify/eslint-config
```

## Usage

After installing, update your project's ESLint config:

```js
{
  "extends" : ["@spotify"]
}
```

### Linting Jest code

This configuration does not support Jest out of the box. If you want to configure eslint for your Jest unit test code too, you can use this package and @spotify/eslint-config-jest together:

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
