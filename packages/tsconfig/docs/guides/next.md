# Next.js

**This assumes you are using `next` v9 or higher!**

## Install TypeScript in your Next app

Install TypeScript and configure it for use with Next by following their [brief tutorial](https://github.com/zeit/next.js#typescript).

_Feel free to commit just that part as a first step._

## Install and use the Spotify TypeScript config

Next, install the Spotify TypeScript config as a dev dependency:

```sh
yarn add -D @spotify/tsconfig
```

You will have already created a `tsconfig.json` in the tutorial, and it should contain some defaults from Next. In this file, add an `extends` configuration:

```json
{
  "extends": "@spotify/tsconfig"
}
```

Start your server up. Be sure to test that TypeScript is all working by changing the file extension of something in `pages` from `.js` to `.tsx`.

You can test that type failures break your build by doing some invalid TypeScript:

```ts
let a = 1;
console.log(a);
a = 'foo';
```

_Go ahead and create another commit here once your server runs successfully._
