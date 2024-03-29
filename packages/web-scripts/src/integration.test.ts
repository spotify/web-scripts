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
import { exec as execCP } from 'child_process';
import { join } from 'path';
import { promisify } from 'util';
import {
  writeFile as writeFileFS,
  mkdir as mkdirFS,
  copyFile as copyFileFS,
  existsSync,
} from 'fs';
import fromEntries from 'object.fromentries';
import * as tempy from 'tempy';
import { default as Debug } from 'debug';
import rimraf from 'rimraf';

import { THIS_ROOT, TSCONFIG } from './Paths';

const dbg = Debug('web-scripts:integration-test'); // eslint-disable-line new-cap
const root = join(__dirname, '..');
const CLI = join(root, 'bin/web-scripts');
const MONOREPO_ROOT = join(root, '../..');
const ESLINT_ROOT = join(MONOREPO_ROOT, 'packages/eslint-config');

const execPromise = promisify(execCP);
const writeFile = promisify(writeFileFS);
const mkdir = promisify(mkdirFS);
const copyFile = promisify(copyFileFS);

// log output after the command finishes
const exec = async (cmd: string, options?: object) => {
  function _log(resp: { stdout?: string | Buffer; stderr?: string | Buffer }) {
    if (resp.stdout) resp.stdout.toString().split('\n').forEach(dbg);
    if (resp.stderr) resp.stderr.toString().split('\n').forEach(dbg);
  }
  try {
    const resp = await execPromise(cmd, options);
    _log(resp);
    return resp;
  } catch (err) {
    _log(err as any);
    throw err;
  }
};

const SETUP_REPO_TIMEOUT = 30000;
const TEST_SCRIPTS_TIMEOUT = 60000;

// eslint-disable-next-line jest/no-disabled-tests
describe.skip('integration tests', () => {
  let PKG_ROOT: string;

  beforeEach(() => {
    PKG_ROOT = tempy.directory();
  });

  describe('help', () => {
    const USAGE_MATCH = 'Usage: web-scripts [options] [command]';

    test('The CLI fails and offers help when invoked with no arguments', async () => {
      await expect(exec(`${CLI}`)).rejects.toMatchObject({
        stdout: expect.stringContaining(USAGE_MATCH),
      });
    });

    test('The CLI offers help when invoked with --help flag', async () => {
      const result = await exec(`${CLI} --help`);
      expect(result.stdout).toMatch(USAGE_MATCH);
    });
  });

  describe('TypeScript', () => {
    beforeEach(async () => {
      await setupRepo(
        'index.ts',
        'index.test.ts',
        'Component.tsx',
        'Component.test.tsx',
      );
    }, SETUP_REPO_TIMEOUT);

    // eslint-disable-next-line jest/expect-expect
    test(
      'Full integration test',
      async () => await testScripts(),
      TEST_SCRIPTS_TIMEOUT,
    );
  });

  describe('JavaScript', () => {
    beforeEach(async () => {
      await setupRepo(
        'index.js',
        'index.test.js',
        'Component.jsx',
        'Component.test.jsx',
      );
    }, SETUP_REPO_TIMEOUT);

    // eslint-disable-next-line jest/expect-expect
    test(
      'Full integration test',
      async () => await testScripts(['--no-types'], ['--no-typecheck']),
      TEST_SCRIPTS_TIMEOUT,
    );
  });

  async function setupRepo(...fileNames: string[]) {
    // we need to locally install some dependencies, but we want to avoid installing
    // all of them to prevent needlessly re-installing everything which significantly
    // slows this test down and often results in errors in CI. If one of these
    // dependencies is removed from package.json, this test will fail when the
    // commands are run at the end.
    const localDependencies: string[] = [
      'eslint',
      'ts-jest',
      'typescript',
      '@types/jest',
      '@types/react',
    ];

    // as of ESLint 6, ESLint plugins need to be locally installed too.
    const eslintDependencies: string[] = [
      '@typescript-eslint/eslint-plugin',
      'eslint-plugin-jest',
      'eslint-plugin-jsx-a11y',
      'eslint-plugin-react',
      'eslint-plugin-react-hooks',
    ];

    const pkg = {
      name: 'test-pkg',
      scripts: {
        test: `${CLI} test`,
        build: `${CLI} build`,
        lint: `${CLI} lint`,
        commit: `${CLI} commit`,
        release: `${CLI} release`,
      },
      dependencies: fromEntries([
        ...Object.entries(
          require(`${THIS_ROOT}/package.json`).dependencies,
        ).filter(([k]) => localDependencies.includes(k)),
        ...Object.entries(
          require(`${ESLINT_ROOT}/package.json`).dependencies,
        ).filter(([k]) => eslintDependencies.includes(k)),
        // react isn't a local dependency so it needs to be directly specified
        ['react', '^17'],
      ]),
    };

    // extend the tsconfig from the web-scripts/config folder, using an absolute
    // path because we didn't link or install into the temp project
    const tsConfig = {
      extends: TSCONFIG,
      include: ['src'],
    };

    await writeFile(
      join(PKG_ROOT, 'package.json'),
      JSON.stringify(pkg, null, '  '),
    );

    await writeFile(
      join(PKG_ROOT, 'tsconfig.json'),
      JSON.stringify(tsConfig, null, 2),
    );

    await mkdir(join(PKG_ROOT, 'src'));
    fileNames.map(fileName =>
      copyFile(
        join(THIS_ROOT, '__fixtures__', fileName),
        join(PKG_ROOT, 'src', fileName),
      ),
    );
    await copyFile(
      join(MONOREPO_ROOT, '.gitignore'),
      join(PKG_ROOT, '.gitignore'),
    );

    // install the dependencies we specified above in pkg
    // this is what is making the tests fail
    // for some reason in docker it can't set the registry to the internal one
    await exec('yarn', { cwd: PKG_ROOT });
    // Required for the `commit` and `commitmsg` tasks.
    await exec('git init', { cwd: PKG_ROOT });
  }

  async function testScripts(
    buildArgs: string[] = [],
    lintArgs: string[] = ['--ignore-path=.gitignore', '--format=checkstyle'],
  ) {
    try {
      rimraf.sync(join(PKG_ROOT, 'cjs'));
      expect(existsSync(join(PKG_ROOT, 'cjs/index.js'))).toBe(false);
      await exec(['yarn build', ...buildArgs].join(' '), { cwd: PKG_ROOT });
      expect(existsSync(join(PKG_ROOT, 'cjs/index.js'))).toBe(true);

      await exec('yarn test', { cwd: PKG_ROOT });
      await exec('yarn test index.test', { cwd: PKG_ROOT });
      await exec(['yarn lint', ...lintArgs].join(' '), { cwd: PKG_ROOT });
    } catch (e) {
      // We are not capturing and printing stdout above, where TSC prints its errors. This makes sure it's printed.
      console.log((e as any).stdout); // eslint-disable-line no-console
      throw e;
    }
  }
});
