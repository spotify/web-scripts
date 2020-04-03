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
import { getConsumingRoot } from '@spotify/web-scripts-utils';

// The ROOT folder of the consuming package, aka where the user is using this
// package from.
export const CONSUMING_ROOT = getConsumingRoot();

// This tool's ROOT folder.
export const THIS_ROOT = join(__dirname, '..');

export const CONFIG_FOLDER = join(THIS_ROOT, 'config');
export const ESLINT_CONFIG = join(CONFIG_FOLDER, 'eslintrc.js');
export const PRETTIER_CONFIG = join(CONFIG_FOLDER, 'prettier.config.js');
export const TSCONFIG = join(CONFIG_FOLDER, 'tsconfig.json');
export const JEST_CONFIG = join(CONFIG_FOLDER, 'jest.config.js');
export const COMMITLINT_CONIFG = join(CONFIG_FOLDER, 'commitlint.config.js');
export const LINT_STAGED_CONFIG = join(CONFIG_FOLDER, 'lint-staged.config.js');
