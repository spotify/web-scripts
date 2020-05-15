# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [7.0.1](https://github.com/spotify/web-scripts/compare/v7.0.0...v7.0.1) (2020-05-15)

**Note:** Version bump only for package @spotify/eslint-config





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
