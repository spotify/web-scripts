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
import tempy from 'tempy';
import path from 'path';
import execa from 'execa';
import fs from 'fs-extra';

import createWebScriptsLibrary from '.';
import getInstallCmd from './get-install-cmd';

describe('integration test', () => {
  let PKG_ROOT: string;
  let LIBRARY_NAME: string;
  let LIBRARY_ROOT: string;
  let INSTALL_CMD: string;

  describe('succesful create', () => {
    // using a beforeAll instead of beforeEach for this test, which ensures that the tests run quickly
    // this IS a risky testing strategy. Inside this describe block, we need to avoid doing destructive operations.
    beforeAll(async () => {
      PKG_ROOT = tempy.directory();
      LIBRARY_NAME = 'my-cool-library';
      LIBRARY_ROOT = path.join(PKG_ROOT, LIBRARY_NAME);
      process.chdir(PKG_ROOT);
      INSTALL_CMD = getInstallCmd();

      // create a single library and then assert against it
      await createWebScriptsLibrary(LIBRARY_NAME);
    }, 60000);

    it('replace the package.json name with the correct name', async () => {
      // check the package.json name replacement
      const pkgPath = path.join(LIBRARY_ROOT, 'package.json');
      expect(fs.existsSync(pkgPath)).toBe(true);
      expect(require(pkgPath).name).toBe(LIBRARY_NAME);
    });

    // check that all the commands work
    [
      { cmd: 'lint' },
      { cmd: 'test', asyncTimeout: 30000 },
      { cmd: 'build', asyncTimeout: 60000 },
    ].forEach(
      ({
        cmd,
        asyncTimeout = 10000,
      }: {
        cmd: string;
        asyncTimeout?: number;
      }) => {
        it(
          `scaffolds such that "${cmd}" command runs successfully`,
          async () => {
            await expect(
              execa(INSTALL_CMD, ['run', cmd], { cwd: LIBRARY_ROOT }),
            ).resolves.toBeDefined();
          },
          asyncTimeout,
        );
      },
    );
  });

  describe('failure cases', () => {
    beforeEach(() => {
      PKG_ROOT = tempy.directory();
      LIBRARY_NAME = 'my-cool-library';
      LIBRARY_ROOT = path.join(PKG_ROOT, LIBRARY_NAME);
      process.chdir(PKG_ROOT);
      INSTALL_CMD = getInstallCmd();
    });

    it('fails when the library name is missing', async () => {
      await expect(createWebScriptsLibrary()).rejects.toEqual(
        expect.any(Error),
      );
    });

    it('fails when a directory already exists', async () => {
      await fs.mkdir(path.join(PKG_ROOT, LIBRARY_NAME));
      await expect(createWebScriptsLibrary()).rejects.toEqual(
        expect.any(Error),
      );
    });
  });
});
