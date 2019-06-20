# web-scripts

## Description

Build, lint, test, fix, and release your JS/TS library. This CLI tool bundles all the necessary configuration and dependencies so you can focus on the code.

## Usage

```sh
yarn add @spotify/web-scripts
```

Add the scripts to your package.json:

```json
    "test": "web-scripts test",
    "lint": "web-scripts lint",
    "fix": "web-scripts fix",
    "build": "web-scripts build",
    "commit": "web-scripts commit",
    "release": "web-scripts release"
```

Add a husky precommit hook:

```sh
yarn add --dev husky
```

And in your package.json:

```json
  "husky": {
    "hooks": {
      "commit-msg": "web-scripts commitmsg",
      "pre-commit": "web-scripts precommit"
    }
  }
```

If you plan to use `web-scripts build` to build ESM, CommonJS, and types for your library with ease, update your package.json to define the locations where those will end up. [Read more about our the build script](#the-build-script).

```json
{
  "main": "cjs/index.js",
  "module": "esm/index.js",
  "types": "types"
}
```

### Editor support steps:

Add a root tsconfig.json:

```json
{
  "extends": "@spotify/web-scripts/config/tsconfig.json",
  "include": ["src"]
}
```

Add a root prettier.config.js:

```js
module.exports = require('@spotify/web-scripts/config/prettier.config.js');
```

Add a root .eslintrc.js:

```js
module.exports = require('@spotify/web-scripts/config/eslintrc.js');
```

Add a root jest.config.js:

```js
module.exports = require('@spotify/web-scripts/config/jest.config.js');
```

### Watchers

Both `web-scripts build` and `web-scripts test` support a `--watch` flag which runs the underlying CLIs (tsc and jest) as watchers.

```sh
# re-compile the cjs, esm, and types on each change to your src with tsc
web-scripts build --watch

# re-run the tests that are relevant to your file changes with jest
web-scripts test --watch
```

### The `build` script

`web-scripts build` runs three parallel calls to the TypeScript compiler.

* One of them transpiles the files as CommonJS and outputs it to the `cjs` directory. Your repo should have `"cjs/index.js"` set as `main` in your package.json. You can turn this off using `--no-cjs` when running build.
* Another does the exact same thing but only transpiles to [EcmaScript modules](https://github.com/standard-things/esm). This is super helpful if your consuming project is using Babel or TypeScript, and you'll end up avoiding playing games of transpilation telephone along the way. Your repo should have `"esm/index.js"` set as `module` in your package.json if using this. You can turn this off with the `--no-esm` flag when running build.
* Finally, tsc will be run to output type definitions. Your repo should have the `"types"` directory set as `types` in your package.json if using this. You can turn this off with the `--no-types` flag when running build.

These parallel builds are set up to share resources and work efficiently.

If you need to use Babel for some reason, that's ok! Simply use babel directly instead of using `web-scripts build`. Teams inside Spotify mix and match which scripts they use to serve their needs. In many cases, `tsc` is all you need and is lighter and simpler to set up.

## Contributing

To start working in the repo:

```sh
yarn
yarn bootstrap
```

This library provides shared scripts and configs for creating a library at Spotify. It tries to use as much of those scripts and configs for itself, which is why the `bootstrap` task is required above. Otherwise, you can run within this package itself:

```sh
yarn lint
yarn build
yarn test
```
