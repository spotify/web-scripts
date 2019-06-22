# web-scripts

A collection of base configs and CLI wrappers used to speed up development @ Spotify.

## About this project

Five of the projects in this repo are shared configurations for common tools we use for building, linting, and formatting our code. They can be installed separately and used by anyone should they opt to follow our standards. We have a [specialized point-of-view on what belongs in our configs](#methodology).

- [eslint-config-base](./packages/eslint-config-base)
- [eslint-config-react](./packages/eslint-config-react)
- [eslint-config-typescript](./packages/eslint-config-typescript)
- [prettier-config](./packages/prettier-config)
- [tsconfig](./packages/tsconfig)

We also combine the above packages and wrap them as a CLI called `web-scripts`. This library is most useful for building and deploying npm packages. It is inspired by [react-scripts](https://www.npmjs.com/package/react-scripts).

- [web-scripts](./packages/web-scripts)

## Methodology

We have a few guiding principles for this project.

1. Style rules should be auto-fixable and if you can, errors should be linted ahead of runtime.
2. Avoid enforcing code style in static analysis; search for bugs with static analysis, and let auto-formatting deal with code style.
3. Push "fast" checks as far left as you can. Optimize for code editors/IDEs fixing issues and enforcing things; write Git hooks
   that catch things as a failsafe; and use static analysis in CI to prevent bad things from getting into master.
4. `web-scripts` is meant to be configurable. We want to avoid the "eject" problem. You should be able to easily take the
   base configs and extend them in your project.

## Related projects we use

- [TypeScript]: a superset of JavaScript which we think helps make code readable and less bug-prone.
- [ESLint]: used for static code analysis with some auto-fixing.
- [Prettier]: use to format code pre-commit and automatically in your editor.
- [Jest]: our preferred JavaScript test framework.
- [husky]: allows us to hook into git events in a convenient way.
- [lint-staged]: allows us to write pre-commit hooks which target specific paths and run a series of commands.

## Contributing

This project adheres to the [Open Code of Conduct][code-of-conduct]. By participating, you are expected to honor this code.

This project is an opinionated approach to static analysis, code formatting, testing, and publishing. It's
the result of consensus between many web engineers inside Spotify, and the default configs will mostly be
written by Spotify employees. _We may reject PRs to the ESLint config if we don't agree that the rule
makes sense as part of our baseline, for example._ Use it if it aligns with your needs!

[eslint]: https://eslint.org/
[typescript]: https://www.typescriptlang.org/
[prettier]: https://prettier.io/
[jest]: https://jestjs.io/
[husky]: https://github.com/typicode/husky
[lint-staged]: https://github.com/okonet/lint-staged
[code-of-conduct]: https://github.com/spotify/code-of-conduct/blob/master/code-of-conduct.md

## Releasing

For now, we will release this repo manually with fixed versions. To do that, use `lerna publish --conventional-commits`.
