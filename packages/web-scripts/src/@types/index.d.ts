/*
 * Copyright 2020 Spotify AB
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
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
