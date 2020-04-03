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
import { BuildTaskDesc } from '../SharedTypes';

import { default as Debug } from 'debug';
import { default as spawn } from 'cross-spawn-promise';
const dbg = Debug('web-scripts:build'); // eslint-disable-line new-cap

// Pretty sure I have to use the tsconfig in the root of the calling
// project, since the "include" key resolves the folder relative to the
// tsconfig location, not the process.cwd(). Manually specifying it would
// force this CLI to have to build the config up manually as well. Something
// I don't really want to do.
export async function buildTask(task: BuildTaskDesc): Promise<string[]> {
  const fns = [];

  if (!task.cjs && !task.esm && !task.types) {
    // default is all!
    fns.push(buildTypes, buildCJS, buildESM);
  } else {
    if (task.types) fns.push(buildTypes);
    if (task.esm) fns.push(buildESM);
    if (task.cjs) fns.push(buildCJS);
  }

  return Promise.all(
    fns.map(async fn => {
      dbg('Beginning %s task', fn.name);
      const result = await fn(task);
      dbg('Finished %s task', fn.name);
      return result;
    }),
  );
}

async function buildTypes(task: BuildTaskDesc): Promise<string> {
  const cmd = 'npx';
  const args = [
    'tsc',
    '--declaration',
    '--declarationMap',
    '--isolatedModules',
    'false',
    '--outDir',
    'types',
    '--emitDeclarationOnly',
    '--noEmit',
    'false',
    '--incremental',
    'true',
    ...task.restOptions,
  ];
  const stdout = await spawn(cmd, args, { stdio: 'inherit' });
  return (stdout || '').toString();
}

async function buildCJS(task: BuildTaskDesc): Promise<string> {
  const cmd = 'npx';
  const args = [
    'tsc',
    '--allowJs',
    '--outDir',
    'cjs',
    '--noEmit',
    'false',
    '--incremental',
    'true',
    '--module',
    'CommonJS',
    ...task.restOptions,
  ];
  const stdout = await spawn(cmd, args, { stdio: 'inherit' });
  return (stdout || '').toString();
}

async function buildESM(task: BuildTaskDesc): Promise<string> {
  const cmd = 'npx';
  const args = [
    'tsc',
    '--allowJs',
    '--outDir',
    'esm',
    '--noEmit',
    'false',
    '--incremental',
    'true',
    '--module',
    'ES2015',
    ...task.restOptions,
  ];
  const stdout = await spawn(cmd, args, { stdio: 'inherit' });
  return (stdout || '').toString();
}
