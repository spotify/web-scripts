# Examples

## Getting started

This project outputs multiple tsconfig.json files for use. If you are unsure which one to use, this guide exists to help you understand which one is most applicable to your project.

### Questions to answer

1. Do you have a full TypeScript project (e.g. is your project brand new or is it sufficiently small that you can convert the whole thing at once)?
2. Do you need to keep using Babel to transpile an existing project, or can you use tsc (the TypeScript compiler that is installed when you add `typescript` as a Node dependency) to keep your build simple?
3. Is your project a library, which means it needs to compile in a way that other TypeScript projects can use the types from it, or is it an app, which means it likely has JSX and that there is no need to export declarations?

### Overriding options

Use the `"extends"` option in your tsconfig.json to extend the appropriate config. You may override an option (that is the nature of extendable configs) but try to avoid doing so as it means more maintenance for you and your team later!

## Apps

This setup assumes that create-react-app, webpack, and/or babel will transpile your bundled assets (aka `tsc` is not used for emitting transpiled code, only for type-checking).

Extend your `tsconfig.json` with our `tsconfig.app.json`
```json
{
  "extends": "@spotify/tsconfig/tsconfig.app.json",
  "include": ["src"]
}
```

### Webpack

Use `babel-loader` to compile TypeScript via Webpack.

```bash
yarn add -D babel-loader @babel/preset-typescript
```

Include the preset in your `.babelrc` (or wherever you configure Babel).

```js
{
  // ...
  "presets": [
    "@babel/typescript"
  ],
  // ...
}
```

And make sure to add the TypeScript filetypes to your Webpack config.

```js
module.exports = {
  // ...
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx|json)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  // ...
};
```

### Webpack without `babel-loader`

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
    rules: [
      { test: /\.(ts|tsx)$/, loader: 'ts-loader' },
    ],
  },
  // ...
};
```

**IMPORTANT** You will need to opt out of `noEmit: true`:
```json
{
  "extends": "@spotify/tsconfig/tsconfig.app.json",
  "include": ["src"],
    "compilerOptions": {
    "noEmit": false
  }
}
```

## Libraries

### For a full TS library

Assumes the library will be consumed as a node*module by an app that will provide, if needed, polyfills for platforms lacking in ES6/2015 support. For example, this config will \_not* transpile `async`/`await`. It will assume the consuming platform either supports those features natively or provides transpilation / polyfills.

This config also assumes that `tsc` (the TypeScript compiler) is responsible for emitting / transpiling the TS -> JS (and providing type declaration files).

```json
{
  "extends": "@spotify/tsconfig/tsconfig.lib.json",
  "include": ["src"],
  "compilerOptions": {
    "outDir": "dist"
  }
}
```

### For a mixed TS and JS library

The TypeScript compiler can do most of what you already want without additional tools. But it will need a two-step process to also output declaration files for other TS apps to consume.

```json
{
  "extends": "@spotify/tsconfig/tsconfig.lib.json",
  "include": ["src"],
  "compilerOptions": {
    "outDir": "dist",
    "allowJs": true,
    "declaration": false
  }
}
```

And then in your build steps:

1. Output JS:
   `tsc`
1. Output declaration files:
   `tsc -d --emitDeclarationOnly --allowJs false --declarationDir dist`

[Source](https://translate.google.com/translate?sl=auto&tl=en&u=https%3A%2F%2Fshuoit.net%2Ftech-notes%2FAllow--declaration-with--allowJs-1546511333.html)

## Libraries with Babel (Advanced)

Setting TypeScript up with Babel isn't recommended if you have a green field project, or really just in general. This is mainly because using them together takes longer to setup, and they both do the task of transpilation. However, there are situations where you may need to use Babel and TypeScript together. Some cases may include that you temporarily want to use Babel to gradually move to TypeScript in a large project with many Babel customizations in place already. Or, you may want access to experimental language features that aren't yet supported in TypeScript, but are usable via some Babel preset.

The approaches outlined here are inspired by [this great blog post from Artsy Engineering](http://artsy.github.io/blog/2017/11/27/Babel-7-and-TypeScript/).

### For a full TS library built by Babel

This assumes the library is compiled/output by Babel and a custom config, but you still want to use TypeScript for type checking and outputting declaration files. You will need to run `tsc` manually!

```json
{
  "extends": "@spotify/tsconfig/tsconfig.lib.json",
  "include": ["src"],
  "compilerOptions": {
    "emitDeclarationOnly": true,
    "outDir": "types"
  }
}
```

Remember to run `tsc` manually as a pre/post-build step!

### For a mixed TS and JS library built by Babel

This assumes the library is built by Babel and a custom config, but still has JavaScript files (perhaps it's in the process of slowly being converted to TypeScript). In this case, you want:

- Babel to compile
- TypeScript (tsc) to type check JS files (optional)
- TypeScript (tsc) to output declaration files

This is tricky because TypeScript [currently does not allow outputting declaration files when `allowJS: true`](https://github.com/Microsoft/TypeScript/issues/7546). Therefore, you have at least a two step process.

1. Babel to compile (example):
   `babel src --extensions ".js,.jsx,.ts,.tsx" --out-dir dist/`
1. Type check JS files (optional, likely need to relax `strict` and `allowImplicitAny`):
   `tsc --allowJs --checkJs --declaration false`
1. Output declaration files:
   `tsc --allowJs false --declaration --isolatedModules false --outDir types --emitDeclarationOnly`

Ideally, you provide a `tsconfig.json` in your root that is ideal for your editing experience, which on a mixed project likely looks like this:

```json
{
  "extends": "@spotify/tsconfig/tsconfig.lib.json",
  "include": ["src"],
  "compilerOptions": {
    "allowJs": true,
    "declaration": false,
    "emitDeclarationOnly": true
  }
}
```

This allows for a great editing experience, since you can now include JS files from TS files as you migrate, as well as get type hinting for libraries.

When building, you must disable JS to allow tsc to output type definitions (`emitDeclarationOnly` is already defined in the tsconfig, but is mandatory):

```sh
tsc --allowJs false --declaration --isolatedModules false --outDir types
```

Note: `tsc` is directed to output types to a `types` folder to avoid clobbering anything that Babel does in the `dist` (or wherever) folder.
