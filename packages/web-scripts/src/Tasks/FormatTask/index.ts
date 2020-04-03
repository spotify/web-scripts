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
import { default as Debug } from 'debug';
import { default as spawn } from 'cross-spawn';
import { SpawnSyncReturns } from 'child_process';
import { hasConfig } from '@spotify/web-scripts-utils';

import { FormatTaskDesc } from '../../SharedTypes';
import { PRETTIER_CONFIG, CONSUMING_ROOT } from '../../Paths';

const dbg = Debug('web-scripts:format'); // eslint-disable-line new-cap

export function getPrettierConfig(): string | null {
  if (
    !hasConfig([
      { type: 'file', pattern: '.prettierrc' },
      { type: 'file', pattern: 'prettier.config.js' },
      { type: 'package.json', property: 'prettierrc' },
    ])
  ) {
    return PRETTIER_CONFIG;
  }

  return null;
}

export function formatTask(task: FormatTaskDesc): SpawnSyncReturns<Buffer> {
  const cmd = 'npx';
  const config = task.config || getPrettierConfig();
  const path = task.path || `${CONSUMING_ROOT}/src`;

  const args = [
    '--no-install',
    'prettier',
    ...(config ? ['--config', config] : []),
    '--write',
    `${path}/**/*.[jt]s?(x)`,
  ];
  dbg('npx args %o', args);
  return spawn.sync(cmd, args, { stdio: 'inherit' });
}
