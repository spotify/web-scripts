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
import { default as spawn } from 'cross-spawn';
import { default as Debug } from 'debug';
import { SpawnSyncReturns } from 'child_process';
import { hasConfig } from '@spotify/web-scripts-utils';

import { TestTaskDesc } from '../SharedTypes';
import { JEST_CONFIG } from '../Paths';

const dbg = Debug('web-scripts:test'); // eslint-disable-line new-cap

export function getJestConfig(): string | null {
  if (
    !hasConfig([
      { type: 'file', pattern: 'jest.config.js' },
      { type: 'package.json', property: 'jest' },
    ])
  ) {
    return JEST_CONFIG;
  }

  return null;
}

export function testTask(task: TestTaskDesc): SpawnSyncReturns<Buffer> {
  // `coverageDirectory` is necessary because the root is `src`
  const cmd = 'npx';
  const config = task.config || getJestConfig();

  const args = [
    '--no-install',
    'jest',
    ...(config ? ['--config', config] : []),
    ...task.restOptions,
  ];
  dbg('npx args %o', args);
  return spawn.sync(cmd, args, { stdio: 'inherit' });
}
