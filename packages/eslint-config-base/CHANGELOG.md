# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [14.1.6](https://github.com/spotify/web-scripts/compare/v14.1.5...v14.1.6) (2023-02-14)

**Note:** Version bump only for package @spotify/eslint-config-base

## [14.1.5](https://github.com/spotify/web-scripts/compare/v14.1.4...v14.1.5) (2023-01-30)

**Note:** Version bump only for package @spotify/eslint-config-base

## [14.1.4](https://github.com/spotify/web-scripts/compare/v14.1.3...v14.1.4) (2023-01-19)

**Note:** Version bump only for package @spotify/eslint-config-base

## [14.1.3](https://github.com/spotify/web-scripts/compare/v14.1.2...v14.1.3) (2022-12-07)

**Note:** Version bump only for package @spotify/eslint-config-base

## [14.1.2](https://github.com/spotify/web-scripts/compare/v14.1.1...v14.1.2) (2022-12-02)

**Note:** Version bump only for package @spotify/eslint-config-base

## [14.1.1](https://github.com/spotify/web-scripts/compare/v14.1.0...v14.1.1) (2022-11-25)

**Note:** Version bump only for package @spotify/eslint-config-base

# [14.1.0](https://github.com/spotify/web-scripts/compare/v14.0.2...v14.1.0) (2022-08-08)

**Note:** Version bump only for package @spotify/eslint-config-base

## [14.0.2](https://github.com/spotify/web-scripts/compare/v14.0.1...v14.0.2) (2022-07-15)

**Note:** Version bump only for package @spotify/eslint-config-base

## [14.0.1](https://github.com/spotify/web-scripts/compare/v14.0.0...v14.0.1) (2022-07-12)

**Note:** Version bump only for package @spotify/eslint-config-base

# [14.0.0](https://github.com/spotify/web-scripts/compare/v13.0.1...v14.0.0) (2022-07-11)

**Note:** Version bump only for package @spotify/eslint-config-base

## [13.0.1](https://github.com/spotify/web-scripts/compare/v13.0.0...v13.0.1) (2022-04-19)

**Note:** Version bump only for package @spotify/eslint-config-base

# [13.0.0](https://github.com/spotify/web-scripts/compare/v12.0.0...v13.0.0) (2022-03-21)

**Note:** Version bump only for package @spotify/eslint-config-base

# [12.0.0](https://github.com/spotify/web-scripts/compare/v11.0.0...v12.0.0) (2021-09-22)

### Build System

- **node:** drop support for Node v12. Support only NodeJS >= 14.17.x ([be04398](https://github.com/spotify/web-scripts/commit/be043986089b79feab63f2a06527f48239ac5144))

### BREAKING CHANGES

- **node:** Dropped support for Node v12. Minimum supported NodeJS version is now >= 14.17.x.

# [11.0.0](https://github.com/spotify/web-scripts/compare/v10.1.0...v11.0.0) (2021-07-16)

**Note:** Version bump only for package @spotify/eslint-config-base

# [10.0.0](https://github.com/spotify/web-scripts/compare/v9.0.2...v10.0.0) (2021-04-14)

### Build System

- drop support for nodejs v10.x ([3fe3059](https://github.com/spotify/web-scripts/commit/3fe3059225c33cc550027dd77dbf1a48fde810a3))

### BREAKING CHANGES

- drop support for NodeJS v10.x, which reaches EOL on
  April 30, 2021.

## [9.0.2](https://github.com/spotify/web-scripts/compare/v9.0.1...v9.0.2) (2021-02-26)

### Bug Fixes

- disable no-undef ([52926ad](https://github.com/spotify/web-scripts/commit/52926ad7b8d94170b0b2584afc14cdb666d47427))

# [9.0.0](https://github.com/spotify/web-scripts/compare/v8.1.1...v9.0.0) (2020-10-26)

**Note:** Version bump only for package @spotify/eslint-config-base

# [8.0.0](https://github.com/spotify/web-scripts/compare/v7.0.2...v8.0.0) (2020-06-23)

### Features

- **eslint:** v7 ([55ebb7f](https://github.com/spotify/web-scripts/commit/55ebb7f402546e9c8d7c7372cafbd6f49f17790c))

### BREAKING CHANGES

- **eslint:** see release notes for eslint v7

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

**Note:** Version bump only for package @spotify/eslint-config-base

## [6.1.1](https://github.com/spotify/web-scripts/compare/v6.1.0...v6.1.1) (2020-04-03)

**Note:** Version bump only for package @spotify/eslint-config-base

# [6.1.0](https://github.com/spotify/web-scripts/compare/v6.0.2...v6.1.0) (2020-03-12)

### Features

- **eslint-config-base:** add rule for diabling unsafe finally blocks ([#230](https://github.com/spotify/web-scripts/issues/230)) ([5869bf9](https://github.com/spotify/web-scripts/commit/5869bf994038e918d3ae59c899d4bc2fbe465c6e))

# [6.0.0](https://github.com/spotify/web-scripts/compare/v5.3.0...v6.0.0) (2020-01-29)

### Build System

- bump node in engines to 10.18.0 ([08ea936](https://github.com/spotify/web-scripts/commit/08ea936faf879be18b97f8a4ba99aba5926ccff8))

### BREAKING CHANGES

- increasing Node version in engines declaration

## [5.0.2](https://github.com/spotify/web-scripts/compare/v5.0.1...v5.0.2) (2020-01-21)

### Bug Fixes

- **eslint-config-base:** allow triple slashes ([8ee981d](https://github.com/spotify/web-scripts/commit/8ee981dc6a2628fad0e62fb0d25938fd9dd0b4aa)), closes [#117](https://github.com/spotify/web-scripts/issues/117)

# [5.0.0](https://github.com/spotify/web-scripts/compare/v4.0.2...v5.0.0) (2020-01-06)

**Note:** Version bump only for package @spotify/eslint-config-base

# [4.0.0](https://github.com/spotify/web-scripts/compare/v3.3.1...v4.0.0) (2020-01-03)

### chore

- bump engine to >=10.13.0 ([9527453](https://github.com/spotify/web-scripts/commit/9527453a03ea0a807e6f6964469bf8482a3e3cca))

### BREAKING CHANGES

- Minimum Node version has been increased

# [3.0.0](https://github.com/spotify/web-scripts/compare/v2.1.0...v3.0.0) (2019-10-10)

**Note:** Version bump only for package @spotify/eslint-config-base

# [2.0.0](https://github.com/spotify/web-scripts/compare/v1.4.0...v2.0.0) (2019-09-23)

### Features

- **eslint-config-base:** Add rule for disallowing useless constructors ([beab7ec](https://github.com/spotify/web-scripts/commit/beab7ec))

### BREAKING CHANGES

- **eslint-config-base:** Adding a lint rule which doesn't have a fix, which means that upgrading could break
  builds due to the new rule.

## [1.1.4](https://github.com/spotify/web-scripts/compare/v1.1.3...v1.1.4) (2019-07-17)

### Bug Fixes

- Add repostiory field to package.json files ([fccd2db](https://github.com/spotify/web-scripts/commit/fccd2db))

# [1.1.0](https://github.com/spotify/web-scripts/compare/v1.0.2...v1.1.0) (2019-07-01)

### Bug Fixes

- support ESLint 6 in our configs ([59341e3](https://github.com/spotify/web-scripts/commit/59341e3))
- Updates engines field to node >=10 ([b3b4f58](https://github.com/spotify/web-scripts/commit/b3b4f58))

## [1.0.2](https://github.com/spotify/web-scripts/compare/v1.0.1...v1.0.2) (2019-06-26)

### Bug Fixes

- update dependencies for peerDependency warnings ([eceff7c](https://github.com/spotify/web-scripts/commit/eceff7c))

## [1.0.1](https://github.com/spotify/web-scripts/compare/v1.0.0...v1.0.1) (2019-06-24)

**Note:** Version bump only for package @spotify/eslint-config-base
