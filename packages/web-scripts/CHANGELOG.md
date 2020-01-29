# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

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

**Note:** Version bump only for package @spotify/web-scripts

# [5.1.0](https://github.com/spotify/web-scripts/compare/v5.0.2...v5.1.0) (2020-01-22)

### Features

- **web-scripts:** rename postinstall to audit ([169f3c1](https://github.com/spotify/web-scripts/commit/169f3c18641d7a51c5319ba8e155cd5a7bd4b85e)), closes [#131](https://github.com/spotify/web-scripts/issues/131)

## [5.0.2](https://github.com/spotify/web-scripts/compare/v5.0.1...v5.0.2) (2020-01-21)

**Note:** Version bump only for package @spotify/web-scripts

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

- **web-scripts:** Upgrade to ESLint ^6.8.0 ([d0c37e9](https://github.com/spotify/web-scripts/commit/d0c37e9b63e4260eeaffda632a8d0840a793fec4))

### BREAKING CHANGES

- Minimum Node version has been increased
- **web-scripts:** Users of web-scripts that rely on ESLint 5 will see unexpected linting errors.

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

**Note:** Version bump only for package @spotify/web-scripts

# [3.0.0](https://github.com/spotify/web-scripts/compare/v2.1.0...v3.0.0) (2019-10-10)

**Note:** Version bump only for package @spotify/web-scripts

# [2.1.0](https://github.com/spotify/web-scripts/compare/v2.0.1...v2.1.0) (2019-10-10)

### Features

- use package attributes to determine lint preset ([f6151ed](https://github.com/spotify/web-scripts/commit/f6151ed)), closes [#56](https://github.com/spotify/web-scripts/issues/56)

## [2.0.1](https://github.com/spotify/web-scripts/compare/v2.0.0...v2.0.1) (2019-09-27)

**Note:** Version bump only for package @spotify/web-scripts

# [2.0.0](https://github.com/spotify/web-scripts/compare/v1.4.0...v2.0.0) (2019-09-23)

### Features

- **web-scripts:** add format script; use implicit prettier config ([e7a15b1](https://github.com/spotify/web-scripts/commit/e7a15b1))
- **web-scripts:** use Jest config in project ([a6284a6](https://github.com/spotify/web-scripts/commit/a6284a6)), closes [#39](https://github.com/spotify/web-scripts/issues/39)
- **web-scripts:** use project ESLint configs ([233ed23](https://github.com/spotify/web-scripts/commit/233ed23)), closes [#39](https://github.com/spotify/web-scripts/issues/39)

### BREAKING CHANGES

- **web-scripts:** users who have Jest configs but do not pass them will begin having that config
  applied.
- **web-scripts:** projects which have ESLint files but do not pass them to web-scripts will start
  having them automatically applied

# [1.4.0](https://github.com/spotify/web-scripts/compare/v1.3.0...v1.4.0) (2019-09-20)

**Note:** Version bump only for package @spotify/web-scripts

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

# [1.1.0](https://github.com/spotify/web-scripts/compare/v1.0.2...v1.1.0) (2019-07-01)

### Bug Fixes

- Updates engines field to node >=10 ([b3b4f58](https://github.com/spotify/web-scripts/commit/b3b4f58))

## [1.0.2](https://github.com/spotify/web-scripts/compare/v1.0.1...v1.0.2) (2019-06-26)

### Bug Fixes

- update dependencies for peerDependency warnings ([eceff7c](https://github.com/spotify/web-scripts/commit/eceff7c))

## [1.0.1](https://github.com/spotify/web-scripts/compare/v1.0.0...v1.0.1) (2019-06-24)

### Bug Fixes

- **web-scripts:** drop the `fix` command ([eb0d61d](https://github.com/spotify/web-scripts/commit/eb0d61d))
