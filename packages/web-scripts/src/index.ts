import program, { Command } from 'commander';
import { SpawnSyncReturns } from 'child_process';

import {
  TestTaskDesc,
  BuildTaskDesc,
  LintTaskDesc,
  FormatTaskDesc,
  CommitTaskDesc,
  CommitMsgTaskDesc,
  ReleaseTaskDesc,
  PreinstallTaskDesc,
  PrecommitTaskDesc,
} from './SharedTypes';
import { COMMITLINT_CONIFG } from './Paths';
import { testTask } from './Tasks/TestTask';
import { buildTask } from './Tasks/BuildTask';
import { lintTask } from './Tasks/LintTask';
import { preinstallTask } from './Tasks/PreinstallTasks';
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
  .action((...args) => {
    const cmd = getCommand(args);
    const rest = getPositionalArgs(args);
    const { typecheck, config } = getOpts(cmd);
    const t: LintTaskDesc = {
      name: 'lint',
      config,
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
  .action((...args) => {
    const cmd = getCommand(args);
    const rest = getPositionalArgs(args);
    const { config } = getOpts(cmd);
    const t: FormatTaskDesc = {
      name: 'format',
      config,
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
  .option('--no-fix', 'Do not auto-fix any static analysis errors')
  .option('--no-tests', 'Do not run Jest tests')
  .action((...args) => {
    const cmd = getCommand(args);
    const rest = getPositionalArgs(args);
    const {
      fix,
      tests,
      'jest-config': jestConfig,
      'eslint-config': eslintConfig,
      'prettier-config': prettierConfig,
    } = getOpts(cmd);
    const t: PrecommitTaskDesc = {
      name: 'precommit',
      fix,
      tests,
      jestConfig,
      eslintConfig,
      prettierConfig,
      restOptions: [...parseRestOptions(cmd), ...rest],
    };

    handleSpawnResult(precommitTask(t));
  });

program
  .command('preinstall')
  .allowUnknownOption()
  .description(
    `Run yarn audit and exit non-zero if the security vulnerability threshold is breached`,
  )
  .option('--threshold [level]', 'The amount of permissible vulnerabilities')
  .action((...args) => {
    const cmd = getCommand(args);
    const rest = getPositionalArgs(args);
    const { threshold } = getOpts(cmd);
    const t: PreinstallTaskDesc = {
      name: 'preinstall',
      threshold,
      restOptions: [...parseRestOptions(cmd), ...rest],
    };

    handlePromiseResult(preinstallTask(t));
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
  return args[args.length - 1] as Command;
}

function getPositionalArgs(args: any[]): string[] {
  return args.slice(0, args.length - 1) as string[];
}

function getOpts(cmd: Command): { [key: string]: any } {
  return cmd.opts();
}

function parseRestOptions(cmd: Command): string[] {
  return cmd.parseOptions(process.argv).unknown;
}

program.parse(process.argv);

if (program.args.length === 0) {
  program.help();
}
