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
