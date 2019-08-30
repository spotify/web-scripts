import program, { Command } from 'commander';
import { SpawnSyncReturns } from 'child_process';

import {
  TestTaskDesc,
  BuildTaskDesc,
  LintTaskDesc,
  CommitTaskDesc,
  CommitMsgTaskDesc,
  ReleaseTaskDesc,
  PrecommitTaskDesc,
} from './SharedTypes';
import { JEST_CONFIG, COMMITLINT_CONIFG, PRETTIER_CONFIG } from './Paths';
import { testTask } from './Tasks/TestTask';
import { buildTask } from './Tasks/BuildTask';
import { lintTask } from './Tasks/LintTask';
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
  .action((cmd: Command) => {
    const { esm, types, cjs } = cmd.opts();
    const t: BuildTaskDesc = {
      name: 'build',
      esm,
      types,
      cjs,
      restOptions: parseRestOptions(cmd),
    };

    handlePromiseResult(buildTask(t));
  });

program
  .command('test')
  .allowUnknownOption()
  .description('Run tests via jest')
  .option('--config [path]', 'path to jest config', JEST_CONFIG)
  .action((cmd: Command) => {
    const { config } = cmd.opts();
    const t: TestTaskDesc = {
      name: 'test',
      config,
      restOptions: parseRestOptions(cmd),
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
  .action((cmd: Command) => {
    const { typecheck, config } = cmd.opts();
    const t: LintTaskDesc = {
      name: 'lint',
      config,
      typecheck,
      restOptions: parseRestOptions(cmd),
    };

    handlePromiseResult(lintTask(t));
  });

program
  .command('precommit')
  .allowUnknownOption()
  .description('Locally validate the repo before committing')
  .option('--jest-config [path]', 'path to jest config', JEST_CONFIG)
  .option(
    '--prettier-config [path]',
    'path to prettier config',
    PRETTIER_CONFIG,
  )
  .option('--eslint-config [path]', 'path to eslint config')
  .option('--no-fix', 'Do not auto-fix any static analysis errors')
  .option('--no-tests', 'Do not run Jest tests')
  .action((cmd: Command) => {
    const {
      fix,
      tests,
      'jest-config': jestConfig,
      'eslint-config': eslintConfig,
      'prettier-config': prettierConfig,
    } = cmd.opts();
    const t: PrecommitTaskDesc = {
      name: 'precommit',
      fix,
      tests,
      jestConfig,
      eslintConfig,
      prettierConfig,
      restOptions: parseRestOptions(cmd),
    };

    handleSpawnResult(precommitTask(t));
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
  .action((cmd: Command) => {
    const { path } = cmd.opts();
    const t: CommitTaskDesc = {
      name: 'commit',
      path,
      restOptions: parseRestOptions(cmd),
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
  .action((cmd: Command) => {
    const { config } = cmd.opts();
    const t: CommitMsgTaskDesc = {
      name: 'commitmsg',
      config,
      restOptions: parseRestOptions(cmd),
    };

    handleSpawnResult(commitMsgTask(t));
  });

program
  .command('release')
  .allowUnknownOption()
  .description('Run semantic-release')
  .action((cmd: Command) => {
    const t: ReleaseTaskDesc = {
      name: 'release',
      restOptions: parseRestOptions(cmd),
    };

    handleSpawnResult(releaseTask(t));
  });

function handlePromiseResult(result: Promise<any>) {
  result.catch(handleError);
}

function handleError(error: Error) {
  /* eslint-disable no-console */
  console.error(error);
  /* eslint-enable no-console */
  process.exit(1);
}

function handleSpawnResult(result: SpawnSyncReturns<Buffer>) {
  if (result.error) {
    throw result.error;
  }

  if (result.status !== 0) {
    process.exit(result.status === null ? 0 : result.status);
  }
}

function parseRestOptions(cmd: Command) {
  // parse the rest of the options
  return cmd.parseOptions(process.argv).unknown;
}

program.parse(process.argv);

if (program.args.length === 0) {
  program.help();
}
