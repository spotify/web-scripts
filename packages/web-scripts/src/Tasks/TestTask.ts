import { TestTaskDesc } from '../SharedTypes';
import { default as spawn } from 'cross-spawn';
import { default as Debug } from 'debug';
import { SpawnSyncReturns } from 'child_process';
const dbg = Debug('web-scripts:test'); // eslint-disable-line new-cap

export function testTask(task: TestTaskDesc): SpawnSyncReturns<Buffer> {
  // `coverageDirectory` is necessary because the root is `src`
  const cmd = 'npx';
  const args = [
    '--no-install',
    'jest',
    '--config',
    task.config,
    ...task.restOptions,
  ];
  dbg('npx args %o', args);
  return spawn.sync(cmd, args, { stdio: 'inherit' });
}
