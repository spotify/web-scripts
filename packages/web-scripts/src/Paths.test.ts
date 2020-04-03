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
import { stat as statFS } from 'fs';
import { promisify } from 'util';
const stat = promisify(statFS);
import * as Paths from './Paths';

test('Paths are exported and exist', async () => {
  expect(await stat(Paths.CONSUMING_ROOT)).toBeTruthy();
  expect(await stat(Paths.THIS_ROOT)).toBeTruthy();
  expect(await stat(Paths.ESLINT_CONFIG)).toBeTruthy();
  expect(await stat(Paths.PRETTIER_CONFIG)).toBeTruthy();
  expect(await stat(Paths.TSCONFIG)).toBeTruthy();
});
