# prettier-config

Spotify's base Prettier config.

## Installation

```sh
yarn add --dev @spotify/prettier-config
```

## Usage

After installing, update your project's `prettier.config.js` file to import the rule sets you want:

```js
module.exports = {
  ...require('@spotify/prettier-config'),
  // your overrides here
};
```

---

Read the [Prettier config docs](https://prettier.io) for more information.
