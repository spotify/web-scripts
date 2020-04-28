# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

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

**Note:** Version bump only for package @spotify/eslint-config-typescript





## [6.1.1](https://github.com/spotify/web-scripts/compare/v6.1.0...v6.1.1) (2020-04-03)

**Note:** Version bump only for package @spotify/eslint-config-typescript





# [6.0.0](https://github.com/spotify/web-scripts/compare/v5.3.0...v6.0.0) (2020-01-29)

### Build System

- bump node in engines to 10.18.0 ([08ea936](https://github.com/spotify/web-scripts/commit/08ea936faf879be18b97f8a4ba99aba5926ccff8))

### BREAKING CHANGES

- increasing Node version in engines declaration

# [5.0.0](https://github.com/spotify/web-scripts/compare/v4.0.2...v5.0.0) (2020-01-06)

**Note:** Version bump only for package @spotify/eslint-config-typescript

# [4.0.0](https://github.com/spotify/web-scripts/compare/v3.3.1...v4.0.0) (2020-01-03)

### Features

- eslint 6 updates ([d5444b6](https://github.com/spotify/web-scripts/commit/d5444b6f1607cbd87778bbe7e7d2bb0dc8df3a55))
- **web-scripts:** Upgrade to ESLint ^6.8.0 ([d0c37e9](https://github.com/spotify/web-scripts/commit/d0c37e9b63e4260eeaffda632a8d0840a793fec4))

### BREAKING CHANGES

- **web-scripts:** Users of web-scripts that rely on ESLint 5 will see unexpected linting errors.

# [3.0.0](https://github.com/spotify/web-scripts/compare/v2.1.0...v3.0.0) (2019-10-10)

### Bug Fixes

- **eslint-config:** Update typescript-eslint packages to ^2.2.0 ([bda6c5f](https://github.com/spotify/web-scripts/commit/bda6c5f))

### BREAKING CHANGES

- **eslint-config:** Major version bump

## [2.0.1](https://github.com/spotify/web-scripts/compare/v2.0.0...v2.0.1) (2019-09-27)

### Bug Fixes

- **eslint-config-typescript:** add no-useless-constructor override ([72c6651](https://github.com/spotify/web-scripts/commit/72c6651))

# [2.0.0](https://github.com/spotify/web-scripts/compare/v1.4.0...v2.0.0) (2019-09-23)

**Note:** Version bump only for package @spotify/eslint-config-typescript

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

**Note:** Version bump only for package @spotify/eslint-config-typescript
