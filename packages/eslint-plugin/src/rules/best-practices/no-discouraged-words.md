# Prevents usage of discouraged words. (best-practices/no-discouraged-words)

Use in order to prevent discouraged words in variable names and comments.

```js
// .eslintrc.json
{
  "plugins": ["@spotify/eslint-plugin"],
  "rules": {
    "@spotify/best-practices/no-discouraged-words": "error",
  }
}
```

## Discouraged words

```js
const discouragedWords = ['blacklist', 'whitelist'];
```

To make a contribution to the list, see [this file](./no-discouraged-words.ts). PRs are most welcome!

## Rule details

This rule will raise the following error whenever you refer to one of the discouraged words above:

> Usage of the word "{word}" is strongly discouraged. Please use a different word.
