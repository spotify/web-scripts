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
import program, { Command } from 'commander';
import { SpawnSyncReturns } from 'child_process';

import {
  AuditTaskDesc,
  BuildTaskDesc,
  CommitTaskDesc,
  CommitMsgTaskDesc,
  FormatTaskDesc,
  LintTaskDesc,
  PrecommitTaskDesc,
  ReleaseTaskDesc,
  TestTaskDesc,
} from './SharedTypes';
import { COMMITLINT_CONIFG } from './Paths';
import { auditTask } from './Tasks/AuditTasks';
import { testTask } from './Tasks/TestTask';
import { buildTask } from './Tasks/BuildTask';
import { lintTask } from './Tasks/LintTask';
import { formatTask } from './Tasks/FormatTask';
import {
  commitTask,
  commitMsgTask,
  releaseTask,
  precommitTask,
} from './Tasks/CommitTasks';

program
  .command('init')
  .description('initialize your package to use web-scripts')
  .action(() => {
    throw new Error('unimplemented');
  });

program
  .command('build')
  .allowUnknownOption()
  .description('Build your project into esm, cjs, and types folders')
  .option('--no-esm', 'do not build esm target')
  .option('--no-cjs', 'do not build cjs target')
  .option('--no-types', 'do not build types target')
  .action((...args) => {
    const cmd = getCommand(args);
    const rest = getPositionalArgs(args);
    const { esm, types, cjs } = getOpts(cmd);
    const t: BuildTaskDesc = {
      name: 'build',
      esm,
      types,
      cjs,
      restOptions: [...parseRestOptions(cmd), ...rest],
    };

    handlePromiseResult(buildTask(t));
  });

program
  .command('test')
  .allowUnknownOption()
  .description('Run tests via jest')
  .option('--config [path]', 'path to jest config')
  .action((...args) => {
    const cmd = getCommand(args);
    const rest = getPositionalArgs(args);
    const { config } = getOpts(cmd);
    const t: TestTaskDesc = {
      name: 'test',
      config,
      restOptions: [...parseRestOptions(cmd), ...rest],
    };

    const result = testTask(t);
    handleSpawnResult(result);
  });

program
  .command('lint')
  .allowUnknownOption()
  .description('Run ESLint and TypeScript to statically analyze your code')
  .option('--config [path]', 'path to ESLint config')
  .option('--typecheck', 'run a TypeScript type check')
  .option('--stylecheck', "run Prettier's style check")
  .action((...args) => {
    const cmd = getCommand(args);
    const rest = getPositionalArgs(args);
    const { stylecheck, typecheck, config } = getOpts(cmd);
    const t: LintTaskDesc = {
      name: 'lint',
      config,
      stylecheck,
      typecheck,
      restOptions: [...parseRestOptions(cmd), ...rest],
    };

    handlePromiseResult(lintTask(t));
  });

program
  .command('format')
  .allowUnknownOption()
  .description('Run Prettier to format your code')
  .option('--config [path]', 'path to Prettier config')
  .option(
    '--path [path]',
    'path to project folder to format. targets the `src` directory within this path only.',
  )
  .action((...args) => {
    const cmd = getCommand(args);
    const rest = getPositionalArgs(args);
    const { config, path } = getOpts(cmd);
    const t: FormatTaskDesc = {
      name: 'format',
      config,
      path,
      restOptions: [...parseRestOptions(cmd), ...rest],
    };

    handleSpawnResult(formatTask(t));
  });

program
  .command('precommit')
  .allowUnknownOption()
  .description('Locally validate the repo before committing')
  .option('--jest-config [path]', 'path to jest config')
  .option('--prettier-config [path]', 'path to prettier config')
  .option('--eslint-config [path]', 'path to eslint config')
  .option('--no-tests', 'Do not run Jest tests')
  .option('--no-typecheck', 'Do not type check using TypeScript')
  .action((...args) => {
    const cmd = getCommand(args);
    const rest = getPositionalArgs(args);
    const {
      tests,
      typecheck,
      'jest-config': jestConfig,
      'eslint-config': eslintConfig,
      'prettier-config': prettierConfig,
    } = getOpts(cmd);
    const t: PrecommitTaskDesc = {
      name: 'precommit',
      tests,
      typecheck,
      jestConfig,
      eslintConfig,
      prettierConfig,
      restOptions: [...parseRestOptions(cmd), ...rest],
    };

    handlePromiseResult(precommitTask(t));
  });

function thresholdLimiter(value: string, defaultValue: string) {
  switch (value) {
    case 'info':
    case 'low':
    case 'moderate':
    case 'high':
    case 'critical':
      return value;
    default:
      return defaultValue;
  }
}

program
  .command('audit')
  .alias('postinstall')
  .allowUnknownOption()
  .description(
    `Run yarn audit and exit non-zero if the security vulnerability threshold is breached`,
  )
  .option(
    '--threshold [info|low|moderate|high|critical]',
    'The amount of permissible vulnerabilities',
    thresholdLimiter,
    'none',
  )
  .action((...args) => {
    const cmd = getCommand(args);
    const rest = getPositionalArgs(args);
    const { threshold } = getOpts(cmd);
    const t: AuditTaskDesc = {
      name: 'audit',
      threshold,
      restOptions: [...parseRestOptions(cmd), ...rest],
    };

    handlePromiseResult(auditTask(t));
  });

program
  .command('commit')
  .allowUnknownOption()
  .description('Create Commitizen commit from staged files')
  .option(
    '--path [path]',
    'path for commitizen adapter to use',
    'cz-conventional-changelog',
  )
  .action((...args) => {
    const cmd = getCommand(args);
    const rest = getPositionalArgs(args);
    const { path } = getOpts(cmd);
    const t: CommitTaskDesc = {
      name: 'commit',
      path,
      restOptions: [...parseRestOptions(cmd), ...rest],
    };

    try {
      commitTask(t);
    } catch (err) {
      handleError(err);
    }
  });

program
  .command('commitmsg')
  .allowUnknownOption()
  .description('Run commitizen commit message validation hook')
  .option(
    '--config [path]',
    'path to the commitlint config.',
    COMMITLINT_CONIFG,
  )
  .action((...args) => {
    const cmd = getCommand(args);
    const rest = getPositionalArgs(args);
    const { config } = getOpts(cmd);
    const t: CommitMsgTaskDesc = {
      name: 'commitmsg',
      config,
      restOptions: [...parseRestOptions(cmd), ...rest],
    };

    handleSpawnResult(commitMsgTask(t));
  });

program
  .command('release')
  .allowUnknownOption()
  .description('Run semantic-release')
  .action((...args) => {
    const cmd = getCommand(args);
    const rest = getPositionalArgs(args);
    const t: ReleaseTaskDesc = {
      name: 'release',
      restOptions: [...parseRestOptions(cmd), ...rest],
    };

    handleSpawnResult(releaseTask(t));
  });

function handlePromiseResult(result: Promise<any>) {
  result.catch(handleError);
}

function handleError(error: Error & { exitStatus?: number }) {
  /* eslint-disable no-console */
  // only log if the error is useful (e.g. not the default message from non-zero status is in cross-spawn)
  if (error.message && error.message.indexOf('Error: Exited with status') < 0) {
    console.error(error);
  }
  /* eslint-enable no-console */
  process.exit(error.exitStatus || 1);
}

function handleSpawnResult(result: SpawnSyncReturns<Buffer>) {
  if (result.error) {
    throw result.error;
  }

  if (result.status !== 0) {
    process.exit(result.status === null ? 0 : result.status);
  }
}

function getCommand(args: any[]): Command {
  return args[0] as Command;
}

function getPositionalArgs(args: any[]): string[] {
  return args.slice(1) as string[];
}

function getOpts(cmd: Command): { [key: string]: any } {
  return cmd.opts();
}

function parseRestOptions(cmd: Command): string[] {
  return cmd.parseOptions(process.argv).unknown;
}

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.help();
}
