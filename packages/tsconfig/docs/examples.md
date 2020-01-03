# Examples

## Getting started

This project outputs a single tsconfig.json file for use. This file is configured to disable all output options (`declaration` is `false`, `noEmit` is true) and is set to strictly type check your code (for example, `noImplicitAny` and many other strict type checks). It is likely that you will need to import this file and do a little configuration additionally depending on whether you plan to use this configuration in conjunction with Webpack or Babel, or whether you plan to use `tsc` to output artifacts.

### Questions to answer

1. Do you have a full TypeScript project (e.g. is your project brand new or is it sufficiently small that you can convert the whole thing at once)?
2. Do you need to keep using Babel to transpile an existing project, or can you use `tsc` (the TypeScript compiler that is installed when you add `typescript` as a Node dependency) to keep your build simple?
3. Is your project a library, which means it needs to compile in a way that other TypeScript projects can use the types from it, or is it an app, which means it likely has JSX and that there is no need to export declarations?

### Overriding options

Use the `"extends"` option in your tsconfig.json to extend the appropriate config.

## Apps

This setup assumes that Create React App, Next, Webpack, and/or Babel will transpile your bundled assets (aka `tsc` is not used for emitting transpiled code, only for type-checking).

Extend your `tsconfig.json`:

```json
{
  "extends": "@spotify/tsconfig"
}
```

### Create React App

Use our [Create React App guide](./guides/cra.md).

### Next.js

Use our [Next.js guide](./guides/next.md).

### Babel

When using Babel, use [@babel/preset-typescript](https://babeljs.io/docs/en/babel-preset-typescript) to load TypeScript files. If you use the Babel CLI directly, make sure to include `--extensions ".js,.ts,.tsx"`.

### Webpack

If using Babel with Webpack, use [@babel/preset-typescript](https://babeljs.io/docs/en/babel-preset-typescript) as described above. Then, in your Webpack config, be sure to update the `test` regular expression which `babel-loader` is using to include your `ts` and `tsx` files.

If you don't use `babel-loader` or you prefer for it not to handle your TypeScript, you can use `ts-loader` instead.

```bash
yarn add -D ts-loader
```

Make sure to add the TypeScript filetypes and `ts-loader` to your Webpack config.

```js
module.exports = {
  // ...
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [{ test: /\.(ts|tsx)$/, loader: 'ts-loader' }],
  },
  // ...
};
```

**IMPORTANT** You will need to turn off `noEmit` when using `ts-loader` with `@spotify/tsconfig`:

```json
{
  "extends": "@spotify/tsconfig",
  "compilerOptions": {
    "noEmit": false
  }
}
```

## Libraries

### @spotify/web-scripts

We think it's easiest to use the `web-scripts build` script to build web libraries. [Give it a shot!](https://www.github.com/spotify/web-scripts)

### For a full TS library

Assumes the library will be consumed as a node module by an app that will provide, if needed, polyfills for platforms lacking in ES6/2015 support. For example, this config will not transpile `async`/`await`. It will assume the consuming platform either supports those features natively or provides transpilation / polyfills.

This config also assumes that `tsc` (the TypeScript compiler) is responsible for emitting / transpiling the TS -> JS (and providing type declaration files).

Essentially, this config takes the base config and extends it to output

```json
{
  "extends": "@spotify/tsconfig",
  "include": ["src"],
  "compilerOptions": {
    "noEmit": false,
    "outDir": "dist",
    "declaration": true,
    "declarationMap": true,
    "jsx": "react",
    "lib": ["es6", "dom"],
    "module": "commonjs",
    "sourceMap": true,
    "target": "es6"
  }
}
```

### For a mixed TS and JS library

The TypeScript compiler can do most of what you already want without additional tools. But it will need a two-step process to also output declaration files for other TS apps to consume.

```json
{
  "extends": "@spotify/tsconfig",
  "include": ["src"],
  "compilerOptions": {
    "noEmit": false,
    "outDir": "dist",
    "allowJs": true,
    "declaration": false,
    "jsx": "react",
    "lib": ["es6", "dom"],
    "module": "commonjs",
    "sourceMap": true,
    "target": "es6"
  }
}
```

And then in your build steps:

1. Output JS:
   `tsc`
1. Output declaration files:
   `tsc -d --emitDeclarationOnly --allowJs false --declarationDir dist --declarationMap`

[Source](https://translate.google.com/translate?sl=auto&tl=en&u=https%3A%2F%2Fshuoit.net%2Ftech-notes%2FAllow--declaration-with--allowJs-1546511333.html)

## Libraries with Babel (Advanced)

Setting TypeScript up with Babel isn't recommended if you have a green field project, or really just in general. This is mainly because using them together takes longer to setup, and they both do the task of transpilation. However, there are situations where you may need to use Babel and TypeScript together. Some cases may include that you temporarily want to use Babel to gradually move to TypeScript in a large project with many Babel customizations in place already. Or, you may want access to experimental language features that aren't yet supported in TypeScript, but are usable via some Babel preset.

For information on setting this up, [this great blog post from Artsy Engineering](http://artsy.github.io/blog/2017/11/27/Babel-7-and-TypeScript/) is a good starting point.
