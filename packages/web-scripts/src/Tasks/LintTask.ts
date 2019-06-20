import { LintTaskDesc } from '../SharedTypes';
import { default as spawn } from 'cross-spawn';
import { default as Debug } from 'debug';
import { CONSUMING_ROOT } from '../Paths';
import { SpawnSyncReturns } from 'child_process';
const dbg = Debug('web-scripts:lint'); // eslint-disable-line new-cap

export function lintTask(task: LintTaskDesc): SpawnSyncReturns<Buffer> {
  const cmd = 'npx';
  const args = [
    '--no-install',
    'eslint',
    '--ext',
    'js,ts,jsx,tsx',
    CONSUMING_ROOT,
    '--config',
    task.config,
    '--ignore-pattern',
    'types/',
    '--ignore-pattern',
    'cjs/',
    '--ignore-pattern',
    'esm/',
    ...task.restOptions,
  ];
  dbg('npx args %o', args);
  return spawn.sync(cmd, args, { stdio: 'inherit' });
}
