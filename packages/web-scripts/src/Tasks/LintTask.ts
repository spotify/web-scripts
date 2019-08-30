import { default as spawn } from 'cross-spawn-promise';
import { default as Debug } from 'debug';

import { LintTaskDesc } from '../SharedTypes';
import { CONSUMING_ROOT } from '../Paths';

const dbg = Debug('web-scripts:lint'); // eslint-disable-line new-cap

export async function lintTask(task: LintTaskDesc): Promise<string[]> {
  const fns = [eslintRun];
  if (task.typecheck) fns.push(typeCheck);

  return await Promise.all(
    fns.map(async fn => {
      dbg('Beginning %s task', fn.name);
      const stdout = await fn(task);
      dbg('Finished %s task', fn.name);
      return stdout;
    }),
  );
}

async function eslintRun(task: LintTaskDesc): Promise<string> {
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

  const stdout = await spawn(cmd, args, { stdio: 'inherit' });
  return (stdout || '').toString();
}

async function typeCheck(): Promise<string> {
  const cmd = 'npx';
  const args = ['tsc', '--noEmit'];
  const stdout = await spawn(cmd, args, { stdio: 'inherit' });
  return (stdout || '').toString();
}
