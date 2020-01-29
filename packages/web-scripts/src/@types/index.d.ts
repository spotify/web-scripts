declare module 'object.fromentries' {
  export default function fromEntries<T>(
    entries: Array<[string, T]>,
  ): { [s: string]: T };
}

// / <reference types="node" />

declare module 'cross-spawn-promise' {
  import { SpawnOptions } from 'child_process';

  interface CrossSpawnOptions extends SpawnOptions {
    encoding: string;
  }

  interface CrossSpawnError {
    exitStatus: number;
    message: string;
    stack: string;
    stderr: Uint8Array;
    stdout: Uint8Array | null;
  }

  export default function crossSpawnPromise(
    cmd: string,
    args?: any[],
    options?: Partial<CrossSpawnOptions>,
  ): Promise<Uint8Array>;
}
