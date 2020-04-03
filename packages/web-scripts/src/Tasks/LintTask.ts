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
import { default as spawn } from 'cross-spawn-promise';
import { default as Debug } from 'debug';
import { hasConfig } from '@spotify/web-scripts-utils';

import { LintTaskDesc } from '../SharedTypes';
import { CONSUMING_ROOT, ESLINT_CONFIG } from '../Paths';
import { getPrettierConfig } from './FormatTask';

const dbg = Debug('web-scripts:lint'); // eslint-disable-line new-cap

export function getEslintConfig(): string | null {
  if (
    !hasConfig([
      { type: 'file', pattern: '.eslintrc.*' },
      { type: 'package.json', property: 'eslintConfig' },
    ])
  ) {
    return ESLINT_CONFIG;
  }

  return null;
}

export async function lintTask(task: LintTaskDesc): Promise<string[]> {
  const fns = [eslintRun];
  if (task.typecheck) fns.push(typeCheck);
  if (task.stylecheck) fns.push(styleCheck);

  return await Promise.all(
    fns.map(async fn => {
      dbg('Beginning %s task', fn.name);
      const stdout = await fn(task);
      dbg('Finished %s task', fn.name);
      return stdout;
    }),
  );
}

export async function eslintRun(task: LintTaskDesc): Promise<string> {
  const cmd = 'npx';
  const config = task.config || getEslintConfig();

  const args = [
    '--no-install',
    'eslint',
    '--ext',
    'js,ts,jsx,tsx',
    CONSUMING_ROOT,
    '--ignore-pattern',
    'types/',
    '--ignore-pattern',
    'cjs/',
    '--ignore-pattern',
    'esm/',
    ...(config ? ['--config', config] : []),
    ...task.restOptions,
  ];
  dbg('npx args %o', args);

  const stdout = await spawn(cmd, args, { stdio: 'inherit' });
  return (stdout || '').toString();
}

export async function typeCheck(): Promise<string> {
  const cmd = 'npx';
  const args = ['tsc', '--noEmit', 'true', '--incremental', 'false'];
  const stdout = await spawn(cmd, args, { stdio: 'inherit' });
  return (stdout || '').toString();
}

export async function styleCheck(): Promise<string> {
  const cmd = 'npx';
  const args = ['--no-install', 'prettier'];

  const config = getPrettierConfig();
  if (config) {
    args.push('--config', config);
  }

  args.push('--check', `${CONSUMING_ROOT}/src/**/*.[jt]s?(x)`);
  const stdout = await spawn(cmd, args, { stdio: 'inherit' });
  return (stdout || '').toString();
}
