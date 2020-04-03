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
