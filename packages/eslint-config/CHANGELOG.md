# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [15.0.0](https://github.com/spotify/web-scripts/compare/v14.1.6...v15.0.0) (2023-05-18)

### chore

- **deps:** upgrade dependencies ([ef060c7](https://github.com/spotify/web-scripts/commit/ef060c7da531060cc1d0f0fb60d3df8f355e418e))
- **node:** upgrade required Node version to 18 ([9528841](https://github.com/spotify/web-scripts/commit/952884179ba7378440599b8acb109a98500535ee))

### BREAKING CHANGES

- **node:** Node bump from v14 to v18
- **deps:** TypeScript bump from v4 to v5, Jest bump from v28 to v29

## [14.1.6](https://github.com/spotify/web-scripts/compare/v14.1.5...v14.1.6) (2023-02-14)

**Note:** Version bump only for package @spotify/eslint-config

## [14.1.5](https://github.com/spotify/web-scripts/compare/v14.1.4...v14.1.5) (2023-01-30)

**Note:** Version bump only for package @spotify/eslint-config

## [14.1.4](https://github.com/spotify/web-scripts/compare/v14.1.3...v14.1.4) (2023-01-19)

**Note:** Version bump only for package @spotify/eslint-config

## [14.1.3](https://github.com/spotify/web-scripts/compare/v14.1.2...v14.1.3) (2022-12-07)

**Note:** Version bump only for package @spotify/eslint-config

## [14.1.2](https://github.com/spotify/web-scripts/compare/v14.1.1...v14.1.2) (2022-12-02)

**Note:** Version bump only for package @spotify/eslint-config

## [14.1.1](https://github.com/spotify/web-scripts/compare/v14.1.0...v14.1.1) (2022-11-25)

**Note:** Version bump only for package @spotify/eslint-config

# [14.1.0](https://github.com/spotify/web-scripts/compare/v14.0.2...v14.1.0) (2022-08-08)

**Note:** Version bump only for package @spotify/eslint-config

## [14.0.2](https://github.com/spotify/web-scripts/compare/v14.0.1...v14.0.2) (2022-07-15)

**Note:** Version bump only for package @spotify/eslint-config

## [14.0.1](https://github.com/spotify/web-scripts/compare/v14.0.0...v14.0.1) (2022-07-12)

**Note:** Version bump only for package @spotify/eslint-config

## [13.0.1](https://github.com/spotify/web-scripts/compare/v13.0.0...v13.0.1) (2022-04-19)

### Bug Fixes

- fix peer dependency versioning for eslint ([46068c2](https://github.com/spotify/web-scripts/commit/46068c240faccb3ee8db2244541a6b1fbc0a6d90))

# [13.0.0](https://github.com/spotify/web-scripts/compare/v12.0.0...v13.0.0) (2022-03-21)

### chore

- update [@typescript-eslint](https://github.com/typescript-eslint) from v4 to v5, eslint from v7 to v8 ([e284943](https://github.com/spotify/web-scripts/commit/e28494330a6dd9c2561370f56a4eed1ef152f23d))

### BREAKING CHANGES

- update @typescript-eslint from v4 to v5, eslint from v7 to v8

# [12.0.0](https://github.com/spotify/web-scripts/compare/v11.0.0...v12.0.0) (2021-09-22)

### Build System

- **node:** drop support for Node v12. Support only NodeJS >= 14.17.x ([be04398](https://github.com/spotify/web-scripts/commit/be043986089b79feab63f2a06527f48239ac5144))

### BREAKING CHANGES

- **node:** Dropped support for Node v12. Minimum supported NodeJS version is now >= 14.17.x.

# [11.0.0](https://github.com/spotify/web-scripts/compare/v10.1.0...v11.0.0) (2021-07-16)

**Note:** Version bump only for package @spotify/eslint-config

# [10.1.0](https://github.com/spotify/web-scripts/compare/v10.0.1...v10.1.0) (2021-06-30)

**Note:** Version bump only for package @spotify/eslint-config

## [10.0.1](https://github.com/spotify/web-scripts/compare/v10.0.0...v10.0.1) (2021-04-27)

**Note:** Version bump only for package @spotify/eslint-config

# [10.0.0](https://github.com/spotify/web-scripts/compare/v9.0.2...v10.0.0) (2021-04-14)

### Bug Fixes

- **eslint-config:** use jest version setting to fix no-deprecated-functions functionality ([9a67198](https://github.com/spotify/web-scripts/commit/9a67198677c7aaec199ed291e0ebbb02b643c042))

### Build System

- drop support for nodejs v10.x ([3fe3059](https://github.com/spotify/web-scripts/commit/3fe3059225c33cc550027dd77dbf1a48fde810a3))
- **deps:** bump eslint-plugin-jest from 23.20.0 to 24.3.4 ([7d8b247](https://github.com/spotify/web-scripts/commit/7d8b24794f4bd35a5181df872c8274a560207acd)), closes [/github.com/jest-community/eslint-plugin-jest/blob/main/CHANGELOG.md#2400-2020-09-04](https://github.com//github.com/jest-community/eslint-plugin-jest/blob/main/CHANGELOG.md/issues/2400-2020-09-04)

### BREAKING CHANGES

- drop support for NodeJS v10.x, which reaches EOL on
  April 30, 2021.
- **deps:** introduces new lint rules for jest that might break
  existing tests.

## [9.0.2](https://github.com/spotify/web-scripts/compare/v9.0.1...v9.0.2) (2021-02-26)

**Note:** Version bump only for package @spotify/eslint-config

## [9.0.1](https://github.com/spotify/web-scripts/compare/v9.0.0...v9.0.1) (2021-02-21)

**Note:** Version bump only for package @spotify/eslint-config

# [9.0.0](https://github.com/spotify/web-scripts/compare/v8.1.1...v9.0.0) (2020-10-26)

### Bug Fixes

- sync [@typescript-eslint](https://github.com/typescript-eslint) versions across repo ([fb20119](https://github.com/spotify/web-scripts/commit/fb201196a551a3b942410b1e5a3b40c5f43bc721)), closes [#555](https://github.com/spotify/web-scripts/issues/555)

### Features

- **@spotify/best-practices/no-discouraged-words:** switch to warn ([f1aed8c](https://github.com/spotify/web-scripts/commit/f1aed8c023e06bda5ac9efede0ff936c4e531866))

## [8.1.1](https://github.com/spotify/web-scripts/compare/v8.1.0...v8.1.1) (2020-09-22)

**Note:** Version bump only for package @spotify/eslint-config

# [8.1.0](https://github.com/spotify/web-scripts/compare/v8.0.4...v8.1.0) (2020-09-08)

### Features

- **eslint-spotify:** added eslint-plugin package w/ best-practices/no-discouraged-words ([ddbbadc](https://github.com/spotify/web-scripts/commit/ddbbadcb810bc8f15f94f14fa5e9cc468c476131))

## [8.0.2](https://github.com/spotify/web-scripts/compare/v8.0.1...v8.0.2) (2020-07-15)

**Note:** Version bump only for package @spotify/eslint-config

## [8.0.1](https://github.com/spotify/web-scripts/compare/v8.0.0...v8.0.1) (2020-07-02)

**Note:** Version bump only for package @spotify/eslint-config

# [8.0.0](https://github.com/spotify/web-scripts/compare/v7.0.2...v8.0.0) (2020-06-23)

### Features

- **eslint:** v7 ([55ebb7f](https://github.com/spotify/web-scripts/commit/55ebb7f402546e9c8d7c7372cafbd6f49f17790c))
- **eslint-plugin-jest:** minor bump ([e1fef3b](https://github.com/spotify/web-scripts/commit/e1fef3b1859a91c82e5d13db909919605df170d7))
- **typescript-eslint:** upgrade to latest to support type export syntax ([688324b](https://github.com/spotify/web-scripts/commit/688324b2702dbf393f058bed6fa55f26bce99bac))
- **typescript-eslint/eslint-plugin:** v3.4.0 ([195400a](https://github.com/spotify/web-scripts/commit/195400a6082a35db59544d39b156d09d470661c7))

### BREAKING CHANGES

- **eslint:** see release notes for eslint v7
- **typescript-eslint:** The camelcase rule was deprecated in typescript-eslint. I've tried to replace it
  with an equivalent naming-convention rule config. I question if we should have this at all.

## [7.0.1](https://github.com/spotify/web-scripts/compare/v7.0.0...v7.0.1) (2020-05-15)

**Note:** Version bump only for package @spotify/eslint-config

# [7.0.0](https://github.com/spotify/web-scripts/compare/v6.2.0...v7.0.0) (2020-04-28)

- major release- 7.0.0 (#318) ([29509b4](https://github.com/spotify/web-scripts/commit/29509b4a52325080b7a38f3aeb41ce8ed82f04f5)), closes [#318](https://github.com/spotify/web-scripts/issues/318) [#314](https://github.com/spotify/web-scripts/issues/314) [#312](https://github.com/spotify/web-scripts/issues/312) [#310](https://github.com/spotify/web-scripts/issues/310)

### BREAKING CHANGES

- running web-scripts without arguments exits code 1 now instead of exiting 0
- prettier 2.0 may introduce breaking changes
- prettier 2.0 may introduce breaking changes

- improvement(web-scripts): make stylecheck and typecheck default for lint

the lint script will now default typechecking and stylechecking to true by default. You may shut
these off with `--no-typecheck` and `--no-stylecheck`.

- Users who have projects incompatible with TypeScript checks or with projects that
  do not user prettier will now fail yarn lint.

# [6.2.0](https://github.com/spotify/web-scripts/compare/v6.1.1...v6.2.0) (2020-04-04)

**Note:** Version bump only for package @spotify/eslint-config

## [6.1.1](https://github.com/spotify/web-scripts/compare/v6.1.0...v6.1.1) (2020-04-03)

**Note:** Version bump only for package @spotify/eslint-config

# [6.1.0](https://github.com/spotify/web-scripts/compare/v6.0.2...v6.1.0) (2020-03-12)

**Note:** Version bump only for package @spotify/eslint-config

# [6.0.0](https://github.com/spotify/web-scripts/compare/v5.3.0...v6.0.0) (2020-01-29)

### Build System

- bump node in engines to 10.18.0 ([08ea936](https://github.com/spotify/web-scripts/commit/08ea936faf879be18b97f8a4ba99aba5926ccff8))

### BREAKING CHANGES

- increasing Node version in engines declaration

# [5.3.0](https://github.com/spotify/web-scripts/compare/v5.2.1...v5.3.0) (2020-01-29)

### Features

- **eslint-config:** add eslint-plugin-jest to config ([4ac3051](https://github.com/spotify/web-scripts/commit/4ac3051625122e90d28c18dc268219e68f638e0a))

# [5.2.0](https://github.com/spotify/web-scripts/compare/v5.1.0...v5.2.0) (2020-01-22)

**Note:** Version bump only for package @spotify/eslint-config

# [5.1.0](https://github.com/spotify/web-scripts/compare/v5.0.2...v5.1.0) (2020-01-22)

**Note:** Version bump only for package @spotify/eslint-config

## [5.0.2](https://github.com/spotify/web-scripts/compare/v5.0.1...v5.0.2) (2020-01-21)

**Note:** Version bump only for package @spotify/eslint-config

# [5.0.0](https://github.com/spotify/web-scripts/compare/v4.0.2...v5.0.0) (2020-01-06)

**Note:** Version bump only for package @spotify/eslint-config

# [4.0.0](https://github.com/spotify/web-scripts/compare/v3.3.1...v4.0.0) (2020-01-03)

### chore

- bump engine to >=10.13.0 ([9527453](https://github.com/spotify/web-scripts/commit/9527453a03ea0a807e6f6964469bf8482a3e3cca))

### Features

- eslint 6 updates ([d5444b6](https://github.com/spotify/web-scripts/commit/d5444b6f1607cbd87778bbe7e7d2bb0dc8df3a55))
- **web-scripts:** Upgrade to ESLint ^6.8.0 ([d0c37e9](https://github.com/spotify/web-scripts/commit/d0c37e9b63e4260eeaffda632a8d0840a793fec4))

### BREAKING CHANGES

- Minimum Node version has been increased
- **web-scripts:** Users of web-scripts that rely on ESLint 5 will see unexpected linting errors.

# [3.3.0](https://github.com/spotify/web-scripts/compare/v3.2.0...v3.3.0) (2020-01-03)

**Note:** Version bump only for package @spotify/eslint-config

# [3.1.0](https://github.com/spotify/web-scripts/compare/v3.0.1...v3.1.0) (2020-01-02)

**Note:** Version bump only for package @spotify/eslint-config

## [3.0.1](https://github.com/spotify/web-scripts/compare/v3.0.0...v3.0.1) (2019-10-24)

**Note:** Version bump only for package @spotify/eslint-config

# [3.0.0](https://github.com/spotify/web-scripts/compare/v2.1.0...v3.0.0) (2019-10-10)

### Bug Fixes

- **eslint-config:** Update typescript-eslint packages to ^2.2.0 ([bda6c5f](https://github.com/spotify/web-scripts/commit/bda6c5f))

### BREAKING CHANGES

- **eslint-config:** Major version bump

# [2.1.0](https://github.com/spotify/web-scripts/compare/v2.0.1...v2.1.0) (2019-10-10)

### Features

- use package attributes to determine lint preset ([f6151ed](https://github.com/spotify/web-scripts/commit/f6151ed)), closes [#56](https://github.com/spotify/web-scripts/issues/56)

## [2.0.1](https://github.com/spotify/web-scripts/compare/v2.0.0...v2.0.1) (2019-09-27)

**Note:** Version bump only for package @spotify/eslint-config

# [2.0.0](https://github.com/spotify/web-scripts/compare/v1.4.0...v2.0.0) (2019-09-23)

**Note:** Version bump only for package @spotify/eslint-config

# [1.4.0](https://github.com/spotify/web-scripts/compare/v1.3.0...v1.4.0) (2019-09-20)

### Features

- **eslint-config:** add prettier/react ([bfea01a](https://github.com/spotify/web-scripts/commit/bfea01a))

# [1.2.0](https://github.com/spotify/web-scripts/compare/v1.1.4...v1.2.0) (2019-07-29)

### Features

- **eslint-config:** initialize library; use in web-scripts ([d209a3f](https://github.com/spotify/web-scripts/commit/d209a3f)), closes [#40](https://github.com/spotify/web-scripts/issues/40)
