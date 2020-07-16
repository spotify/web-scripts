# @spotify/eslint-spotify

This contains all Spotify-specific eslint rules.

## Installation

```sh
npm install --save-dev eslint @spotify/eslint-spotify
```

## Rules

| Category | Name                  | Description                                                             |
| -------- | --------------------- | ----------------------------------------------------------------------- |
| React    | [`react/no-react-fc`] | Prevents usage of `React.FC`, `React.SFC` and `React.FunctionComponent` |

[`react/no-react-fc`]: https://github.com/spotify/web-scripts/blob/master/packages/eslint-spotify/src/rules/react/no-react-fc.md

## Usage

After installing, update your project's `.eslintrc.json` config:

```js
{
  "extends" : ["@spotify/eslint-spotify"]
}
```

---

Read the [ESlint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files)
for more information.
