import { BuildTaskDesc } from '../SharedTypes';

import { default as Debug } from 'debug';
import { default as spawn } from 'cross-spawn-promise';
const dbg = Debug('web-scripts:build'); // eslint-disable-line new-cap

// Pretty sure I have to use the tsconfig in the root of the calling
// project, since the "include" key resolves the folder relative to the
// tsconfig location, not the process.cwd(). Manually specifying it would
// force this CLI to have to build the config up manually as well. Something
// I don't really want to do.
export async function buildTask(task: BuildTaskDesc): Promise<string[]> {
  const fns = [];

  if (!task.cjs && !task.esm && !task.types) {
    // default is all!
    fns.push(buildTypes, buildCJS, buildESM);
  } else {
    if (task.types) fns.push(buildTypes);
    if (task.esm) fns.push(buildESM);
    if (task.cjs) fns.push(buildCJS);
  }

  return Promise.all(
    fns.map(async fn => {
      dbg('Beginning %s task', fn.name);
      const result = await fn(task);
      dbg('Finished %s task', fn.name);
      return result;
    }),
  );
}

async function buildTypes(task: BuildTaskDesc): Promise<string> {
  const cmd = 'npx';
  const args = [
    'tsc',
    '--declaration',
    '--isolatedModules',
    'false',
    '--outDir',
    'types',
    '--emitDeclarationOnly',
    '--noEmit',
    'false',
    ...task.restOptions,
  ];
  const stdout = await spawn(cmd, args, { stdio: 'inherit' });
  return (stdout || '').toString();
}

async function buildCJS(task: BuildTaskDesc): Promise<string> {
  const cmd = 'npx';
  const args = [
    'tsc',
    '--allowJs',
    '--outDir',
    'cjs',
    '--noEmit',
    'false',
    '--module',
    'CommonJS',
    ...task.restOptions,
  ];
  const stdout = await spawn(cmd, args, { stdio: 'inherit' });
  return (stdout || '').toString();
}

async function buildESM(task: BuildTaskDesc): Promise<string> {
  const cmd = 'npx';
  const args = [
    'tsc',
    '--allowJs',
    '--outDir',
    'esm',
    '--noEmit',
    'false',
    '--module',
    'ES2015',
    ...task.restOptions,
  ];
  const stdout = await spawn(cmd, args, { stdio: 'inherit' });
  return (stdout || '').toString();
}
