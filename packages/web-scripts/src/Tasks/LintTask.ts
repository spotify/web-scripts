import { default as spawn } from 'cross-spawn-promise';
import { default as Debug } from 'debug';

import { LintTaskDesc } from '../SharedTypes';
import { CONSUMING_ROOT, ESLINT_CONFIG } from '../Paths';
import { hasConfig } from '../hasConfig';

const dbg = Debug('web-scripts:lint'); // eslint-disable-line new-cap

export function getEslintConfig(): string | null {
  if (
    !hasConfig([
      { type: 'file', pattern: '.eslintrc.*' },
      { type: 'package.json', property: 'eslint' },
    ])
  ) {
    return ESLINT_CONFIG;
  }

  return null;
}

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

async function typeCheck(): Promise<string> {
  const cmd = 'npx';
  const args = ['tsc', '--noEmit'];
  const stdout = await spawn(cmd, args, { stdio: 'inherit' });
  return (stdout || '').toString();
}
