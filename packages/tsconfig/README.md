# tsconfig

Check out our [docs on GitHub].

A collection of different base `tsconfig.json` to be extended from in your project.

This project aims to reduce per-project configuration as much as possible. With good defaults, we can focus on building, not configuration!

## Installation

Using npm or yarn:

```sh
yarn add --dev @spotify/tsconfig
```

For more information, check out our [docs on GitHub].

## Contributing

Try to optimize for the fewest specified options between the config specializations. For example, only `app` has `noEmit: true`, since the [default value][compiler options], `false`, is good for the `lib` config. Specifying it only in the `app` config means fewer overall entries!

We want to keep maintenance low by only specifying what is necessary. If the option's [default value][compiler options] is good for every config, remove it from every config!

[compiler options]: https://www.typescriptlang.org/docs/handbook/compiler-options.html
[docs on github]: ./docs
