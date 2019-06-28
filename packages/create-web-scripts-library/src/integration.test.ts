import tempy from 'tempy';
import path from 'path';
import execa from 'execa';
import fs from 'fs-extra';

import createWebScriptsLibrary from '.';
import getInstallCmd from './get-install-cmd';

describe('integration test', () => {
  let PKG_ROOT: string;
  let LIBRARY_NAME: string;

  beforeEach(() => {
    PKG_ROOT = tempy.directory();
    LIBRARY_NAME = 'my-cool-library';
    process.chdir(PKG_ROOT);
  });

  // TODO we should write some custom matchers to assert the file structure
  it('creates a working web-scripts library', async () => {
    await createWebScriptsLibrary(LIBRARY_NAME);

    const pkgPath = path.join(PKG_ROOT, LIBRARY_NAME, 'package.json');
    expect(fs.existsSync(pkgPath)).toBe(true);
    expect(require(pkgPath).name).toBe(LIBRARY_NAME);

    const cmd = getInstallCmd();
    await expect(execa(cmd, ['run', 'build'])).resolves.toBeDefined();
    await expect(execa(cmd, ['run', 'test'])).resolves.toBeDefined();
    // TODO: figure out why lint doesn't seem to work in this test
    // await expect(execa(cmd, ['run', 'lint'])).resolves.toBeDefined();
  }, 30000);

  describe('failure cases', () => {
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
