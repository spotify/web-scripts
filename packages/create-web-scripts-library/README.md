# `create-web-scripts-library`

Scaffold a [@spotify/web-scripts](https://github.com/spotify/web-scripts) library quickly. Code was directly inspired by [create-next-app](https://github.com/zeit/create-next-app).

## Usage

### With `yarn create`

```sh
yarn create @spotify/web-scripts-library my-cool-library
```

### With `npx`

```sh
npx @spotify/create-web-scripts-library my-cool-library
```

### Programatically

```javascript
const path = require('path');
const createWebScriptsLibrary = require('@spotify/create-web-scripts-library');

async function start() {
  await createWebScriptsLibrary(path.resolve('my-cool-library'));
}
```
