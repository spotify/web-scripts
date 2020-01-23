import { join } from 'path';

import { promisify } from 'util';
import tempy from 'tempy';
import {
  mkdir as mkdirFS,
  readFile as readFileFS,
  writeFile as writeFileFS,
} from 'fs';

import { formatTask } from '.';

const writeFile = promisify(writeFileFS);
const readFile = promisify(readFileFS);
const mkdir = promisify(mkdirFS);

// @ts-ignore
jest.spyOn(process, 'exit').mockImplementation(c => c);

describe('web-scripts format', () => {
  let pkgRoot: string;
  let testFile: string;

  beforeEach(async () => {
    jest.clearAllMocks();
    pkgRoot = tempy.directory();

    const fixtureFile = join(
      __dirname,
      '__fixtures__',
      'poorly-formatted-file.ts',
    );
    testFile = join(pkgRoot, 'src', 'poorly-formatted-file.ts');

    await mkdir(join(pkgRoot, 'src'));
    const content = (await readFile(fixtureFile)).toString();
    await writeFile(testFile, content.replace(/\/\/ prettier-ignore[\n]+/, ''));
  });

  afterAll(() => jest.restoreAllMocks());

  it('formats files', async () => {
    const before = await readFile(
      join(pkgRoot, 'src', 'poorly-formatted-file.ts'),
    );
    expect(before.toString().trim()).toBe('export const FOO = "bar"');

    formatTask({ name: 'format', path: pkgRoot, restOptions: [] });

    const after = await readFile(
      join(pkgRoot, 'src', 'poorly-formatted-file.ts'),
    );
    expect(after.toString().trim()).toBe("export const FOO = 'bar';");
  });
});
