# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

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
