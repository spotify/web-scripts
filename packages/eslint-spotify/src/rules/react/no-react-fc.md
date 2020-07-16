# Prevent usage of React.FC (react/no-react-fc)

Use in order to prevent usage of either `React.FC`, `React.SFC` or `React.FunctionComponent` which are no longer being used by React and Facebook. The core reason being that it was found to be an unnecessary feature with next to no benefits in combination with a few downsides.

It is expected that over the next year, these React types will be phased out.

```
"react/no-react-fc": "error"
```

In the [Backstage](https://github.com/spotify/backstage), there is also an ADR (architecture decision record) to phase this out for their project. [See the ADR here](https://github.com/spotify/backstage/blob/master/docs/architecture-decisions/adr006-avoid-react-fc.md>).

## Rule details

This rule will raise the following error whenever you refer, in any way, the `React.FC`, `React.SFC` or `React.FunctionComponent` declarations.

> Usage of React.FC and React.SFC types are discouraged when creating React components.

Note, it doesn't perform deep type checks to validate if you are using the "true" definitions from React. It simply performs validation on the names.

To skip for specific files, simply prepend the appropriate line wiht:

```tsx
// eslint-disable-next-line react/no-react-fc
const UserProfile: React.FC<{ name: string }> = ({ name }) => {
  return <h1>User: {name}</h1>;
};
```
