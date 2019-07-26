# web-scripts

## Description

Build, lint, test, format, and release your JS/TS library. This CLI tool bundles all the necessary configuration and dependencies so you can focus on the code.

## Usage

```sh
yarn add --dev @spotify/web-scripts husky
```

Add the scripts and commit hooks to your package.json:

```json
{
  "scripts": {
    "test": "web-scripts test",
    "lint": "web-scripts lint",
    "build": "web-scripts build",
    "commit": "web-scripts commit",
    "release": "web-scripts release"
  },
  "husky": {
    "hooks": {
      "commit-msg": "web-scripts commitmsg",
      "pre-commit": "web-scripts precommit"
    }
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

### Editor support steps

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

- One of them transpiles the files as CommonJS and outputs it to the `cjs` directory. Your repo should have `"cjs/index.js"` set as `main` in your package.json. You can turn this off using `--no-cjs` when running build.
- Another does the exact same thing but only transpiles to [EcmaScript modules](https://github.com/standard-things/esm). This is super helpful if your consuming project is using Babel or TypeScript, and you'll end up avoiding playing games of transpilation telephone along the way. Your repo should have `"esm/index.js"` set as `module` in your package.json if using this. You can turn this off with the `--no-esm` flag when running build.
- Finally, tsc will be run to output type definitions. Your repo should have the `"types"` directory set as `types` in your package.json if using this. You can turn this off with the `--no-types` flag when running build.

These parallel builds are set up to share resources and work efficiently.

If you need to use Babel for some reason, that's ok! Simply use babel directly instead of using `web-scripts build`. Teams inside Spotify mix and match which scripts they use to serve their needs. In many cases, `tsc` is all you need and is lighter and simpler to set up.

### Setting up CI publishing (Travis CI)

The following steps should be from your local repository folder.

(Optional but probably mandatory): Visit https://travis-ci.com/account/repositories and click "Sync Account" otherwise the Travis CLI may not be able to register your ENV vars later.

1. Add a basic .travis.yaml. You probably want something like:

```yml
language: node_js
node_js:
  - '8'
  - '10'
  - '12'
branches:
  only:
    - master
cache:
  yarn: true
  directories:
    - node_modules
before_install:
  - curl -o- -L https://yarnpkg.com/install.sh | bash -s
  - export PATH="$HOME/.yarn/bin:$PATH"
script:
  - yarn lint
  - yarn test
```

2. Append a "release" stage to the `jobs:` that invokes `web-scripts release`:

```
jobs:
  include:
    - stage: release
      node_js: lts/*
      script: skip # do not run tests again
      deploy:
        provider: script
        skip_cleanup: true
        script:
          - yarn web-scripts release # or `yarn release` if you defined it in your package.json scripts
```

3. Install the travis CI CLI: `gem install travis`
4. Create an NPM token: `https://www.npmjs.com/settings/[NPM USERNAME]/tokens` (scope: Read and Publish)
5. Set the secure ENV var: `travis env set NPM_TOKEN YOUR-NPM-TOKEN`
6. Create a Github Token: `https://github.com/settings/tokens` (required scope: `public_repo` !)
7. Set the secure ENV var: `travis env set GH_TOKEN YOUR-GH-TOKEN`
8. Commit all your changes with `yarn commit`, and push.

If you use a scoped public package, such as `@yourusername/packagename`, then you'll need explicitly set in your `package.json`:

```
  "publishConfig": {
    "access": "public"
  },
```

Otherwise you'll receive an error during release like "You must sign up for private packages" or a missing flag `--access=public`.

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
