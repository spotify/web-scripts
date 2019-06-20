import { TestTaskDesc } from '../SharedTypes';
import { default as spawn } from 'cross-spawn';
import { join } from 'path';
import { default as Debug } from 'debug';
import { SpawnSyncReturns } from 'child_process';
const dbg = Debug('web-scripts:test'); // eslint-disable-line new-cap

export function testTask(task: TestTaskDesc): SpawnSyncReturns<Buffer> {
  const root = join(process.cwd(), 'src');
  // `coverageDirectory` is necessary because the root is `src`
  const coverageDirectory = join(process.cwd(), 'coverage');
  const cmd = 'npx';
  const args = [
    '--no-install',
    'jest',
    '--config',
    task.config,
    '--rootDir',
    root,
    '--coverageDirectory',
    coverageDirectory,
    '--collectCoverageFrom',
    '**/*.{js,jsx,ts,tsx}',
    ...task.restOptions,
  ];
  dbg('npx args %o', args);
  return spawn.sync(cmd, args, { stdio: 'inherit' });
}
