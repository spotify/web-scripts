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

import { AuditTaskDesc } from '../../SharedTypes';
import { CONSUMING_ROOT } from '../../Paths';

const dbg = Debug('web-scripts:audit'); // eslint-disable-line new-cap

enum ThresholdLimits {
  info = 1,
  low = 2,
  moderate = 4,
  high = 8,
  critical = 16,
  none = 32,
}

export async function auditTask(task: AuditTaskDesc): Promise<string[]> {
  const fns = [yarnRun];

  return await Promise.all(
    fns.map(async (fn) => {
      dbg('Beginning %s task', fn.name);
      const stdout = await fn(task);
      dbg('Finished %s task', fn.name);
      return stdout;
    }),
  );
}

/**
 * This task will run yarn audit at the location from which it was called.
 * Yarn audit returns a status code which is the sum of the following masks:
 * 1 for INFO
 * 2 for LOW
 * 4 for MODERATE
 * 8 for HIGH
 * 16 for CRITICAL
 *
 * The threshold ceiling is therefore 31. The default value of the threshold
 * is 32, returning 0 exit status unless a threshold option is set.
 * @see https://yarnpkg.com/lang/en/docs/cli/audit/
 */
async function yarnRun(task: AuditTaskDesc): Promise<string> {
  const cmd = 'npx';
  const { threshold } = task;

  const args = [
    '--no-install',
    'yarn',
    'audit',
    '--cwd',
    CONSUMING_ROOT,
    ...task.restOptions,
  ];
  dbg('npx args %o', args);

  try {
    await spawn(cmd, args, { stdio: 'inherit' });
  } catch (err) {
    const thresholdReached = err.exitStatus >= ThresholdLimits[threshold];
    if (thresholdReached) process.exit(err.exitStatus);
  }

  return '';
}
