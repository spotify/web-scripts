# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [10.0.1](https://github.com/spotify/web-scripts/compare/v10.0.0...v10.0.1) (2021-04-27)


### Bug Fixes

* precommit opts destructuring ([e8a238f](https://github.com/spotify/web-scripts/commit/e8a238f18a977d1c6940baa2e88106a44ddf7b11))





# [10.0.0](https://github.com/spotify/web-scripts/compare/v9.0.2...v10.0.0) (2021-04-14)


### Bug Fixes

* **eslint-config:** use jest version setting to fix no-deprecated-functions functionality ([9a67198](https://github.com/spotify/web-scripts/commit/9a67198677c7aaec199ed291e0ebbb02b643c042))


### Build System

* drop support for nodejs v10.x ([3fe3059](https://github.com/spotify/web-scripts/commit/3fe3059225c33cc550027dd77dbf1a48fde810a3))
* **deps:** bump eslint-plugin-jest from 23.20.0 to 24.3.4 ([7d8b247](https://github.com/spotify/web-scripts/commit/7d8b24794f4bd35a5181df872c8274a560207acd)), closes [/github.com/jest-community/eslint-plugin-jest/blob/main/CHANGELOG.md#2400-2020-09-04](https://github.com//github.com/jest-community/eslint-plugin-jest/blob/main/CHANGELOG.md/issues/2400-2020-09-04)


### Features

* **eslint-config-react:** disable react/prop-types rule ([d445345](https://github.com/spotify/web-scripts/commit/d4453456e8d70accd5beede7c5adfd3a814afe35))
* **eslint-config-typescript:** turn off @typescript-eslint/no-unused-vars ([4845031](https://github.com/spotify/web-scripts/commit/48450315d99205f6ced4ca97b1de8f4899376680))


### BREAKING CHANGES

* drop support for NodeJS v10.x, which reaches EOL on
April 30, 2021.
* **deps:** introduces new lint rules for jest that might break
existing tests.





## [9.0.2](https://github.com/spotify/web-scripts/compare/v9.0.1...v9.0.2) (2021-02-26)


### Bug Fixes

* disable no-undef ([52926ad](https://github.com/spotify/web-scripts/commit/52926ad7b8d94170b0b2584afc14cdb666d47427))





## [9.0.1](https://github.com/spotify/web-scripts/compare/v9.0.0...v9.0.1) (2021-02-21)


### Bug Fixes

* update ts-jest config ([052a888](https://github.com/spotify/web-scripts/commit/052a888c2d06f2e1f64d7755d6cd9c48fb456bce))





# [9.0.0](https://github.com/spotify/web-scripts/compare/v8.1.1...v9.0.0) (2020-10-26)


### Bug Fixes

* bl ([526a096](https://github.com/spotify/web-scripts/commit/526a096de76e02bd938114b905bb0d542c01e3aa))
* incorporate overrides for new typescript-eslint rules ([81b7111](https://github.com/spotify/web-scripts/commit/81b711141b08613a78a2020513f1b21df0c91116))
* relax no-use-before-define rule ([ee719aa](https://github.com/spotify/web-scripts/commit/ee719aa153b0debd8901006aef3b71a791ef093b))
* sync [@typescript-eslint](https://github.com/typescript-eslint) versions across repo ([fb20119](https://github.com/spotify/web-scripts/commit/fb201196a551a3b942410b1e5a3b40c5f43bc721)), closes [#555](https://github.com/spotify/web-scripts/issues/555)


### Features

* **@spotify/best-practices/no-discouraged-words:** switch to warn ([f1aed8c](https://github.com/spotify/web-scripts/commit/f1aed8c023e06bda5ac9efede0ff936c4e531866))
* use TypeScript 4 ([bbf1164](https://github.com/spotify/web-scripts/commit/bbf1164c75c40457d6457274f83deb59d0de7c09)), closes [#487](https://github.com/spotify/web-scripts/issues/487) [#252](https://github.com/spotify/web-scripts/issues/252)


### BREAKING CHANGES

* must upgrade to TypeScript 4 as a consumer; new tsconfig takes advantage of
incremental + noEmit





## [8.1.1](https://github.com/spotify/web-scripts/compare/v8.1.0...v8.1.1) (2020-09-22)


### Bug Fixes

* update eslint-plugin to allow for @typescript-eslint/parser@4 ([0363558](https://github.com/spotify/web-scripts/commit/0363558716e39ec175e14375070206e97a418d39))





# [8.1.0](https://github.com/spotify/web-scripts/compare/v8.0.4...v8.1.0) (2020-09-08)


### Features

* **eslint-spotify:** added eslint-plugin package w/ best-practices/no-discouraged-words ([ddbbadc](https://github.com/spotify/web-scripts/commit/ddbbadcb810bc8f15f94f14fa5e9cc468c476131))





## [8.0.4](https://github.com/spotify/web-scripts/compare/v8.0.3...v8.0.4) (2020-08-26)


### Bug Fixes

* use ts-jest 26.2.0 ([0cf896d](https://github.com/spotify/web-scripts/commit/0cf896d9ca7312903784a24a96bf552c9936ea1b))





## [8.0.3](https://github.com/spotify/web-scripts/compare/v8.0.2...v8.0.3) (2020-08-25)


### Bug Fixes

* upgrade dependencies ([19f61d1](https://github.com/spotify/web-scripts/commit/19f61d127991d019579ab072bc4437201f24d01d))





## [8.0.2](https://github.com/spotify/web-scripts/compare/v8.0.1...v8.0.2) (2020-07-15)


### Bug Fixes

* **eslint-config-react:** fix peer dependency on eslint-plugin-react-hooks ([8591423](https://github.com/spotify/web-scripts/commit/859142322212ed3ef5ac2140b831e4244487d91c))





## [8.0.1](https://github.com/spotify/web-scripts/compare/v8.0.0...v8.0.1) (2020-07-02)


### Bug Fixes

* **eslint-config-typescript:** turn off naming-convention ([ed5eec3](https://github.com/spotify/web-scripts/commit/ed5eec3b879a5a9c08916cf8fd334ae99ec7cbaa))





# [8.0.0](https://github.com/spotify/web-scripts/compare/v7.0.2...v8.0.0) (2020-06-23)


### Features

* **commitlint:** v9 ([2709cb8](https://github.com/spotify/web-scripts/commit/2709cb81e3e4efe4f75ef1f8ec954a9c8dd3b023))
* **eslint:** v7 ([55ebb7f](https://github.com/spotify/web-scripts/commit/55ebb7f402546e9c8d7c7372cafbd6f49f17790c))
* **eslint-plugin-jest:** minor bump ([e1fef3b](https://github.com/spotify/web-scripts/commit/e1fef3b1859a91c82e5d13db909919605df170d7))
* **jest:** v26 ([14c37a8](https://github.com/spotify/web-scripts/commit/14c37a82361095a2c3fc5ecac27ef94552a7d38a))
* **jest-junit:** v11 ([1ef34c4](https://github.com/spotify/web-scripts/commit/1ef34c4373234e8682f50ce10f3ace05b16f61d3))
* **semantic-release:** minor bump ([ded14f4](https://github.com/spotify/web-scripts/commit/ded14f46ff128737f5a4beb19e8af9d921433aad))
* **typescript-eslint:** upgrade to latest to support type export syntax ([688324b](https://github.com/spotify/web-scripts/commit/688324b2702dbf393f058bed6fa55f26bce99bac))
* **typescript-eslint/eslint-plugin:** v3.4.0 ([195400a](https://github.com/spotify/web-scripts/commit/195400a6082a35db59544d39b156d09d470661c7))


### BREAKING CHANGES

* **commitlint:** 'improvement' type will now be rejected by this config.
* **eslint:** see release notes for eslint v7
* **jest-junit:** see jest-junit 11 release notes
* **jest:** See jest 26 release notes
* **typescript-eslint:** The camelcase rule was deprecated in typescript-eslint. I've tried to replace it
with an equivalent naming-convention rule config. I question if we should have this at all.





## [7.0.2](https://github.com/spotify/web-scripts/compare/v7.0.1...v7.0.2) (2020-05-27)


### Bug Fixes

* **web-scripts:** positional args were being stripped out ([bae75b4](https://github.com/spotify/web-scripts/commit/bae75b497b2419d120a9e47111e4442ae48f78b9))





## [7.0.1](https://github.com/spotify/web-scripts/compare/v7.0.0...v7.0.1) (2020-05-15)


### Bug Fixes

* **web-scripts:** unknown command options were parsed twice ([d30364b](https://github.com/spotify/web-scripts/commit/d30364b3e2a99b0939dfecc24aa83059732bd134)), closes [#341](https://github.com/spotify/web-scripts/issues/341)





# [7.0.0](https://github.com/spotify/web-scripts/compare/v6.2.0...v7.0.0) (2020-04-28)


* major release- 7.0.0 (#318) ([29509b4](https://github.com/spotify/web-scripts/commit/29509b4a52325080b7a38f3aeb41ce8ed82f04f5)), closes [#318](https://github.com/spotify/web-scripts/issues/318) [#314](https://github.com/spotify/web-scripts/issues/314) [#312](https://github.com/spotify/web-scripts/issues/312) [#310](https://github.com/spotify/web-scripts/issues/310)


### BREAKING CHANGES

* running web-scripts without arguments exits code 1 now instead of exiting 0
* prettier 2.0 may introduce breaking changes
* prettier 2.0 may introduce breaking changes

* improvement(web-scripts): make stylecheck and typecheck default for lint

the lint script will now default typechecking and stylechecking to true by default. You may shut
these off with `--no-typecheck` and `--no-stylecheck`.
* Users who have projects incompatible with TypeScript checks or with projects that
do not user prettier will now fail yarn lint.





# [6.2.0](https://github.com/spotify/web-scripts/compare/v6.1.1...v6.2.0) (2020-04-04)


### Features

* **web-scripts:** allow custom lint-staged ([#276](https://github.com/spotify/web-scripts/issues/276)) ([49324dc](https://github.com/spotify/web-scripts/commit/49324dcb1c9c8d6e2255a2957323d209b46d5803))





## [6.1.1](https://github.com/spotify/web-scripts/compare/v6.1.0...v6.1.1) (2020-04-03)


### Bug Fixes

* pin ts-jest to 25.2 ([48e4cd5](https://github.com/spotify/web-scripts/commit/48e4cd5f2a73752cd6670b706edc6315f3998433))
* **web-scripts:** pin ts-jest version to 25.2 ([01c9d86](https://github.com/spotify/web-scripts/commit/01c9d866304f2c6f5ae01239aaaf95e402e5f4f7))





# [6.1.0](https://github.com/spotify/web-scripts/compare/v6.0.2...v6.1.0) (2020-03-12)

### Features

- **eslint-config-base:** add rule for diabling unsafe finally blocks ([#230](https://github.com/spotify/web-scripts/issues/230)) ([5869bf9](https://github.com/spotify/web-scripts/commit/5869bf994038e918d3ae59c899d4bc2fbe465c6e))

## [6.0.2](https://github.com/spotify/web-scripts/compare/v6.0.1...v6.0.2) (2020-02-06)

### Bug Fixes

- **create-web-scripts-library:** format package.json ([#194](https://github.com/spotify/web-scripts/issues/194)) ([2d4b072](https://github.com/spotify/web-scripts/commit/2d4b0723a38d7e34f45d427f23dd0cd22c30fc9b))

## [6.0.1](https://github.com/spotify/web-scripts/compare/v6.0.0...v6.0.1) (2020-02-06)

### Bug Fixes

- bump dependencies; fix create-web-scripts-library ([ecdd47f](https://github.com/spotify/web-scripts/commit/ecdd47fd1672117413c9f54b1df89dadb15b88e1))

# [6.0.0](https://github.com/spotify/web-scripts/compare/v5.3.0...v6.0.0) (2020-01-29)

### Build System

- bump node in engines to 10.18.0 ([08ea936](https://github.com/spotify/web-scripts/commit/08ea936faf879be18b97f8a4ba99aba5926ccff8))

### Features

- **web-scripts:** fix lint-staged usage for latest version ([5215e25](https://github.com/spotify/web-scripts/commit/5215e251bba223b24100c92d16e6ee81944c582c))

### BREAKING CHANGES

- increasing Node version in engines declaration
- **web-scripts:** \* the --no-fix option has been removed from web-scripts precommit
- a --no-typecheck was added to web-scripts precommit because the typecheck had to be removed from lint-staged, and so it is no longer aware of which files changed.

# [5.3.0](https://github.com/spotify/web-scripts/compare/v5.2.1...v5.3.0) (2020-01-29)

### Features

- **eslint-config:** add eslint-plugin-jest to config ([4ac3051](https://github.com/spotify/web-scripts/commit/4ac3051625122e90d28c18dc268219e68f638e0a))

## [5.2.1](https://github.com/spotify/web-scripts/compare/v5.2.0...v5.2.1) (2020-01-23)

### Bug Fixes

- **web-scripts:** get format working, add test ([5bcf926](https://github.com/spotify/web-scripts/commit/5bcf9267b640a5cf986d0b4528da63ccf6c352c7))

# [5.2.0](https://github.com/spotify/web-scripts/compare/v5.1.0...v5.2.0) (2020-01-22)

### Features

- **index.js:** Add react/jsx-curly-brace-presence rule ([fbef1ae](https://github.com/spotify/web-scripts/commit/fbef1ae18d4176819c357862a031e34c16d12bbb))

# [5.1.0](https://github.com/spotify/web-scripts/compare/v5.0.2...v5.1.0) (2020-01-22)

### Features

- **web-scripts:** rename postinstall to audit ([169f3c1](https://github.com/spotify/web-scripts/commit/169f3c18641d7a51c5319ba8e155cd5a7bd4b85e)), closes [#131](https://github.com/spotify/web-scripts/issues/131)

## [5.0.2](https://github.com/spotify/web-scripts/compare/v5.0.1...v5.0.2) (2020-01-21)

### Bug Fixes

- **eslint-config-base:** allow triple slashes ([8ee981d](https://github.com/spotify/web-scripts/commit/8ee981dc6a2628fad0e62fb0d25938fd9dd0b4aa)), closes [#117](https://github.com/spotify/web-scripts/issues/117)

## [5.0.1](https://github.com/spotify/web-scripts/compare/v5.0.0...v5.0.1) (2020-01-07)

### Bug Fixes

- **create-web-scripts-library:** bump template submodule ([e4280f4](https://github.com/spotify/web-scripts/commit/e4280f42dcf41ce46c5cd34ff4bde66e1d7e9bca))

# [5.0.0](https://github.com/spotify/web-scripts/compare/v4.0.2...v5.0.0) (2020-01-06)

### Features

- **tsconfig:** expose a single tsconfig ([5048d6a](https://github.com/spotify/web-scripts/commit/5048d6aea1e8949c11bfa8ed5bbdff3f177074b7)), closes [#21](https://github.com/spotify/web-scripts/issues/21)
- **web-scripts:** enable declarationMaps on types by default ([835793e](https://github.com/spotify/web-scripts/commit/835793e1038d10cba10b2c33c2a063a263f60a26)), closes [#17](https://github.com/spotify/web-scripts/issues/17)

### BREAKING CHANGES

- **tsconfig:** deleted a number of exports from tsconfig

## [4.0.2](https://github.com/spotify/web-scripts/compare/v4.0.1...v4.0.2) (2020-01-03)

### Bug Fixes

- fix commander usage of args for positional args ([1a1eb5a](https://github.com/spotify/web-scripts/commit/1a1eb5a2e7678e0201e7093da9fa0236d4fb7104))

## [4.0.1](https://github.com/spotify/web-scripts/compare/v4.0.0...v4.0.1) (2020-01-03)

### Bug Fixes

- use commander v4; re-enable lib checks in TS ([e41d9de](https://github.com/spotify/web-scripts/commit/e41d9deb3d44d3afd23d40770ac1951e9f7062f3)), closes [#95](https://github.com/spotify/web-scripts/issues/95)

# [4.0.0](https://github.com/spotify/web-scripts/compare/v3.3.1...v4.0.0) (2020-01-03)

### chore

- bump engine to >=10.13.0 ([9527453](https://github.com/spotify/web-scripts/commit/9527453a03ea0a807e6f6964469bf8482a3e3cca))

### Features

- eslint 6 updates ([d5444b6](https://github.com/spotify/web-scripts/commit/d5444b6f1607cbd87778bbe7e7d2bb0dc8df3a55))
- **web-scripts:** Upgrade to ESLint ^6.8.0 ([d0c37e9](https://github.com/spotify/web-scripts/commit/d0c37e9b63e4260eeaffda632a8d0840a793fec4))

### BREAKING CHANGES

- Minimum Node version has been increased
- **web-scripts:** Users of web-scripts that rely on ESLint 5 will see unexpected linting errors.

## [3.3.1](https://github.com/spotify/web-scripts/compare/v3.3.0...v3.3.1) (2020-01-03)

### Bug Fixes

- **create-web-scripts-library:** bump template ([c7516fa](https://github.com/spotify/web-scripts/commit/c7516fa2cc0ca2c153a6006e8ef1c1d88972933a))

# [3.3.0](https://github.com/spotify/web-scripts/compare/v3.2.0...v3.3.0) (2020-01-03)

### Features

- **deps:** yarn upgrade ([1b49fd8](https://github.com/spotify/web-scripts/commit/1b49fd84fcf23eb992dea9ac6cf08bf20b35270e))

# [3.2.0](https://github.com/spotify/web-scripts/compare/v3.1.0...v3.2.0) (2020-01-02)

### Features

- **postinstall:** move preinstall to postinstall; make CI-safe ([97aa021](https://github.com/spotify/web-scripts/commit/97aa021))
- **web-scripts:** web-scripts preinstall ([#73](https://github.com/spotify/web-scripts/issues/73)) ([f043658](https://github.com/spotify/web-scripts/commit/f043658))
- **web-scripts preinstall:** Add test coverage and use enum options ([aaed187](https://github.com/spotify/web-scripts/commit/aaed187)), closes [#73](https://github.com/spotify/web-scripts/issues/73)

# [3.1.0](https://github.com/spotify/web-scripts/compare/v3.0.1...v3.1.0) (2020-01-02)

### Bug Fixes

- stylecheck should use implicit config ([9c9a88c](https://github.com/spotify/web-scripts/commit/9c9a88c))

### Features

- **web-scripts lint:** Adds optional --stylecheck to lint command ([0c3b687](https://github.com/spotify/web-scripts/commit/0c3b687))

## [3.0.1](https://github.com/spotify/web-scripts/compare/v3.0.0...v3.0.1) (2019-10-24)

### Bug Fixes

- **eslint-config-react:** Add `static-variables` to `react/sort-comp` ([f0526c0](https://github.com/spotify/web-scripts/commit/f0526c0))

# [3.0.0](https://github.com/spotify/web-scripts/compare/v2.1.0...v3.0.0) (2019-10-10)

### Bug Fixes

- **eslint-config:** Update typescript-eslint packages to ^2.2.0 ([bda6c5f](https://github.com/spotify/web-scripts/commit/bda6c5f))

### BREAKING CHANGES

- **eslint-config:** Major version bump

# [2.1.0](https://github.com/spotify/web-scripts/compare/v2.0.1...v2.1.0) (2019-10-10)

### Features

- use package attributes to determine lint preset ([f6151ed](https://github.com/spotify/web-scripts/commit/f6151ed)), closes [#56](https://github.com/spotify/web-scripts/issues/56)

## [2.0.1](https://github.com/spotify/web-scripts/compare/v2.0.0...v2.0.1) (2019-09-27)

### Bug Fixes

- **eslint-config-typescript:** add no-useless-constructor override ([72c6651](https://github.com/spotify/web-scripts/commit/72c6651))

# [2.0.0](https://github.com/spotify/web-scripts/compare/v1.4.0...v2.0.0) (2019-09-23)

### Features

- **eslint-config-base:** Add rule for disallowing useless constructors ([beab7ec](https://github.com/spotify/web-scripts/commit/beab7ec))
- **web-scripts:** add format script; use implicit prettier config ([e7a15b1](https://github.com/spotify/web-scripts/commit/e7a15b1))
- **web-scripts:** use Jest config in project ([a6284a6](https://github.com/spotify/web-scripts/commit/a6284a6)), closes [#39](https://github.com/spotify/web-scripts/issues/39)
- **web-scripts:** use project ESLint configs ([233ed23](https://github.com/spotify/web-scripts/commit/233ed23)), closes [#39](https://github.com/spotify/web-scripts/issues/39)

### BREAKING CHANGES

- **web-scripts:** users who have Jest configs but do not pass them will begin having that config
  applied.
- **web-scripts:** projects which have ESLint files but do not pass them to web-scripts will start
  having them automatically applied
- **eslint-config-base:** Adding a lint rule which doesn't have a fix, which means that upgrading could break
  builds due to the new rule.

# [1.4.0](https://github.com/spotify/web-scripts/compare/v1.3.0...v1.4.0) (2019-09-20)

### Features

- **eslint-config:** add prettier/react ([bfea01a](https://github.com/spotify/web-scripts/commit/bfea01a))

# [1.3.0](https://github.com/spotify/web-scripts/compare/v1.2.3...v1.3.0) (2019-08-30)

### Features

- **web-scripts:** add checkstyle to lint ([0822ae2](https://github.com/spotify/web-scripts/commit/0822ae2))

## [1.2.1](https://github.com/spotify/web-scripts/compare/v1.2.0...v1.2.1) (2019-08-30)

### Bug Fixes

- **web-scripts:** ignore TypeScript declaration files from coverage ([8bcfc7f](https://github.com/spotify/web-scripts/commit/8bcfc7f)), closes [#45](https://github.com/spotify/web-scripts/issues/45)

# [1.2.0](https://github.com/spotify/web-scripts/compare/v1.1.4...v1.2.0) (2019-07-29)

### Features

- **eslint-config:** initialize library; use in web-scripts ([d209a3f](https://github.com/spotify/web-scripts/commit/d209a3f)), closes [#40](https://github.com/spotify/web-scripts/issues/40)

## [1.1.4](https://github.com/spotify/web-scripts/compare/v1.1.3...v1.1.4) (2019-07-17)

### Bug Fixes

- Add repostiory field to package.json files ([fccd2db](https://github.com/spotify/web-scripts/commit/fccd2db))
- **deps:** fix vulnerabilities ([25c7b81](https://github.com/spotify/web-scripts/commit/25c7b81))
- **web-scripts:** allow all test options to be configured ([5750c57](https://github.com/spotify/web-scripts/commit/5750c57)), closes [#19](https://github.com/spotify/web-scripts/issues/19)

## [1.1.3](https://github.com/spotify/web-scripts/compare/v1.1.2...v1.1.3) (2019-07-02)

### Bug Fixes

- **create-web-scripts-library:** move web-scripts to devDependency ([868354d](https://github.com/spotify/web-scripts/commit/868354d))

## [1.1.2](https://github.com/spotify/web-scripts/compare/v1.1.1...v1.1.2) (2019-07-01)

### Bug Fixes

- **create-web-scripts-library:** add prepublish to release ([0323798](https://github.com/spotify/web-scripts/commit/0323798))

## [1.1.1](https://github.com/spotify/web-scripts/compare/v1.1.0...v1.1.1) (2019-07-01)

### Bug Fixes

- **create-web-scripts-library:** make sure that log output is shown ([9bff988](https://github.com/spotify/web-scripts/commit/9bff988))

# [1.1.0](https://github.com/spotify/web-scripts/compare/v1.0.2...v1.1.0) (2019-07-01)

### Bug Fixes

- support ESLint 6 in our configs ([59341e3](https://github.com/spotify/web-scripts/commit/59341e3))
- Updates engines field to node >=10 ([b3b4f58](https://github.com/spotify/web-scripts/commit/b3b4f58))

### Features

- **create-web-scripts-library:** implement cli and script ([ce381f3](https://github.com/spotify/web-scripts/commit/ce381f3))

## [1.0.2](https://github.com/spotify/web-scripts/compare/v1.0.1...v1.0.2) (2019-06-26)

### Bug Fixes

- update dependencies for peerDependency warnings ([eceff7c](https://github.com/spotify/web-scripts/commit/eceff7c))

## [1.0.1](https://github.com/spotify/web-scripts/compare/v1.0.0...v1.0.1) (2019-06-24)

### Bug Fixes

- **web-scripts:** drop the `fix` command ([eb0d61d](https://github.com/spotify/web-scripts/commit/eb0d61d))
