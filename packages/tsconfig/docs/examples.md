# Examples

## Getting started

This project outputs a single tsconfig.json file for use. This file is set to strictly type check your code (for example, `noImplicitAny` and many other strict type checks). It is likely that you will need to import this file and do a little configuration additionally depending on whether you plan to use this configuration in conjunction with Webpack or Babel, or whether you plan to use `tsc` to output artifacts.

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

## Libraries

### @spotify/web-scripts

With one command, [`web-scripts build`](https://github.com/spotify/web-scripts/tree/master/packages/web-scripts#the-build-script) takes your TypeScript code and outputs types, esm, and cjs files ready for publishing. It's probably want you want!

If you want or need to manually control how your library is built using our shared configs, read on.

### Manual builds

Assumes the library will be consumed as a node module by an app that will provide, if needed, polyfills for platforms lacking in ES6/2015 support. For example, this config will not transpile `async`/`await`. It will assume the consuming platform either supports those features natively or provides transpilation / polyfills.

This config also assumes that `tsc` (the TypeScript compiler) is responsible for emitting / transpiling the TS -> JS (and providing type declaration files).

Essentially, this config takes the base config and extends it to output Common JS modules and the corresponding type definitions.

```json
{
  "extends": "@spotify/tsconfig",
  "include": ["src"],
  "compilerOptions": {
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

Run `tsc -p tsconfig.json` to see your output.
