import { default as Debug } from 'debug';
import { default as spawn } from 'cross-spawn';
import { SpawnSyncReturns } from 'child_process';
// @ts-ignore
import { bootstrap as czBootstrap } from 'commitizen/dist/cli/git-cz';

import {
  CommitTaskDesc,
  CommitMsgTaskDesc,
  ReleaseTaskDesc,
  PrecommitTaskDesc,
} from '../SharedTypes';
import { LINT_STAGED_CONFIG } from '../Paths';

const dbg = Debug('web-scripts:commit'); // eslint-disable-line new-cap

export function precommitTask(
  task: PrecommitTaskDesc,
): SpawnSyncReturns<Buffer> {
  const cmd = 'npx';
  const args = [
    '--no-install',
    'lint-staged',
    '--config',
    LINT_STAGED_CONFIG,
    ...task.restOptions,
  ];
  dbg('npx args %o', args);

  const env: { [key: string]: string } = {
    ...process.env,
    WEB_SCRIPTS_SHOULD_FIX: task.fix.toString(),
    WEB_SCRIPTS_RUN_TESTS: task.tests.toString(),
  };

  if (task.eslintConfig) {
    env.WEB_SCRIPTS_ESLINT_CONFIG = task.eslintConfig;
  }
  if (task.jestConfig) {
    env.WEB_SCRIPTS_JEST_CONFIG = task.jestConfig;
  }
  if (task.prettierConfig) {
    env.WEB_SCRIPTS_PRETTIER_CONFIG = task.prettierConfig;
  }

  return spawn.sync(cmd, args, {
    stdio: 'inherit',
    env,
  });
}

export function commitTask(task: CommitTaskDesc): void {
  dbg('running commitizen commit', task.restOptions);

  // use this to get the resolved path to the root of the commitizen directory
  const cliPath = require
    .resolve('commitizen/package.json')
    .replace('package.json', '');

  // https://github.com/commitizen/cz-cli/issues/667
  Object.assign(process.env, {
    CZ_TYPE: process.env.CZ_TYPE || ' ',
    CZ_SCOPE: process.env.CZ_SCOPE || ' ',
    CZ_SUBJECT: process.env.CZ_SUBJECT || ' ',
    CZ_BODY: process.env.CZ_BODY || ' ',
    CZ_ISSUES: process.env.CZ_ISSUES || ' ',
    CZ_MAX_HEADER_WIDTH: process.env.CZ_MAX_HEADER_WIDTH || 100,
    CZ_MAX_LINE_WIDTH: process.env.CZ_MAX_LINE_WIDTH || 100,
  });

  return czBootstrap(
    {
      cliPath,
      config: {
        path: task.path,
      },
    },
    // this gets the arguments in the right positions to
    // satisfy commitizen, which strips the first two
    // (assumes that they're `['node', 'git-cz']`)
    [null, ...task.restOptions],
  );
}

export function commitMsgTask(
  task: CommitMsgTaskDesc,
): SpawnSyncReturns<Buffer> {
  const cmd = 'npx';
  const args = [
    '--no-install',
    'commitlint',
    `--config=${task.config}`,
    `--edit=${process.env.HUSKY_GIT_PARAMS}`,
    ...task.restOptions,
  ];
  dbg('npx args %o', args);
  return spawn.sync(cmd, args, { stdio: 'inherit' });
}

export function releaseTask(task: ReleaseTaskDesc): SpawnSyncReturns<Buffer> {
  const cmd = 'npx';
  const args = ['--no-install', 'semantic-release', ...task.restOptions];
  dbg('npx args %o', args);
  return spawn.sync(cmd, args, { stdio: 'inherit' });
}
