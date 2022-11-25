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
const { getEslintConfig } = require('../cjs/Tasks/LintTask');
const { getPrettierConfig } = require('../cjs/Tasks/FormatTask');
const { getJestConfig } = require('../cjs/Tasks/TestTask');

const tests = process.env.WEB_SCRIPTS_RUN_TESTS === 'true';
const jestConfig = process.env.WEB_SCRIPTS_JEST_CONFIG || getJestConfig();
const prettierConfig =
  process.env.WEB_SCRIPTS_PRETTIER_CONFIG || getPrettierConfig();
const eslintConfig = process.env.WEB_SCRIPTS_ESLINT_CONFIG || getEslintConfig();

const testRelatedChanges = `jest ${
  jestConfig ? `--config ${jestConfig} ` : ''
}--bail --findRelatedTests --passWithNoTests`;

const lintRelatedChanges = `eslint --fix ${
  eslintConfig ? `--config ${eslintConfig}` : ''
}`.trim();

const formatRelatedChanges = `prettier --write ${
  prettierConfig ? `--config ${prettierConfig}` : ''
}`.trim();

module.exports = {
  '*.{js,jsx,ts,tsx,json,md,yaml}': [formatRelatedChanges],
  '*.{js,jsx,ts,tsx}': [
    lintRelatedChanges,
    ...(tests ? [testRelatedChanges] : []),
  ],
};
