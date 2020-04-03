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
import path from 'path';
import fs from 'fs-extra';
import execa from 'execa';
import chalk from 'chalk';
import readPkgUp from 'read-pkg-up';

import * as messages from './messages';
import getInstallCmd from './get-install-cmd';

// console.log is used here to make sure that logs make it to the user
/* eslint-disable no-console */
export default async function createWebScriptsLibrary(projectName?: string) {
  if (!projectName) {
    throw new Error(messages.missingProjectName());
  }

  if (fs.existsSync(projectName) && projectName !== '.') {
    throw new Error(messages.alreadyExists(projectName));
  }

  const { packageJson: cwslPkg } =
    readPkgUp.sync({
      cwd: __dirname,
    }) || {};

  const projectPath = path.resolve(process.cwd(), projectName);
  const templatePath = path.resolve(__dirname, '..', 'template');

  console.log(chalk.gray('Copying template...'));
  await fs.copy(templatePath, projectPath);

  console.log(chalk.gray('Writing over necessary files...'));
  process.chdir(projectPath);
  const newPkgPath = path.join(projectPath, 'package.json');
  const newPkg = require(newPkgPath);
  newPkg.name = projectName;
  newPkg.devDependencies['@spotify/web-scripts'] =
    (cwslPkg?.devDependencies || {})['@spotify/web-scripts'] ||
    newPkg.devDependencies['@spotify/web-scripts'];
  await fs.writeFile(newPkgPath, JSON.stringify(newPkg, null, 2));

  console.log(chalk.gray('Installing dependencies...'));
  process.chdir(projectPath);
  await execa(getInstallCmd(), ['install']);

  console.log(messages.start(projectName));
}
/* eslint-enable no-console */
