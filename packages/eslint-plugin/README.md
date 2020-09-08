# @spotify/eslint-plugin

This contains all Spotify-specific eslint rules.

## Installation

```sh
npm install --save-dev eslint @spotify/eslint-plugin
```

## Rules

| Category       | Name                                    | Description                                                                          |
| -------------- | --------------------------------------- | ------------------------------------------------------------------------------------ |
| Best Practices | [`best-practices/no-discouraged-words`] | Prevents usage of specific words. [See more][`best-practices/no-discouraged-words`]. |

[`best-practices/no-discouraged-words`]: https://github.com/spotify/web-scripts/blob/master/packages/eslint-spotify/src/rules/best-practices/no-discouraged-words.md

## Usage

After installing, update your project's `.eslintrc.json` config:

```js
{
  "plugins": ["@spotify/eslint-plugin"],
}
```

---

Read the [ESlint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) for more information.
