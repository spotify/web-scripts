import path from 'path';
import fs from 'fs-extra';
import execa from 'execa';
import chalk from 'chalk';

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

  const projectPath = path.resolve(process.cwd(), projectName);
  const templatePath = path.resolve(__dirname, '..', 'template');

  console.log(chalk.gray('Copying template...'));
  await fs.copy(templatePath, projectPath);

  console.log(chalk.gray('Writing over necessary files...'));
  process.chdir(projectPath);
  const newPkgPath = path.join(projectPath, 'package.json');
  const newPkg = require(newPkgPath);
  newPkg.name = projectName;
  await fs.writeFile(newPkgPath, JSON.stringify(newPkg));

  console.log(chalk.gray('Installing dependencies...'));
  process.chdir(projectPath);
  await execa(getInstallCmd(), ['install']);

  console.log(messages.start(projectName));
}
/* eslint-enable no-console */
