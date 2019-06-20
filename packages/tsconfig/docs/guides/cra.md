# Create React App

**This assumes you are using `react-scripts` v2.1 or higher!**

## Install TypeScript

Install TypeScript and configure it for use with Create React App by following their [brief tutorial](https://facebook.github.io/create-react-app/docs/adding-typescript).

```sh
yarn add -D typescript @types/node @types/react @types/react-dom @types/jest
```

_Feel free to commit just that part as a first step._

## Install and use the Spotify TypeScript config

Next, install the Spotify TypeScript config as a devDependency:

```sh
yarn add -D @spotify/tsconfig
```

Create React App will have already created a `tsconfig.json` for you. Replace the contents of the file with this config, which should be used for any app.

```json
{
  "extends": "@spotify/tsconfig/tsconfig.app.json",
  "include": ["src"]
}
```

Start your server up. At this point, Create React App will probably update your tsconfig.json with some defaults they recommend. At the time of writing, these don't conflict with anything the Spotify config attempts to cover, so let Create React App do it.

_Go ahead and create another commit here once your server runs successfully._
