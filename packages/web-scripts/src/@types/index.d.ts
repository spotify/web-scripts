declare module 'object.fromentries' {
  export default function fromEntries<T>(
    entries: Array<[string, T]>,
  ): { [s: string]: T };
}
