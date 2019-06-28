import path from 'path';
import fs from 'fs-extra';
import execa from 'execa';
import chalk from 'chalk';
import debug from 'debug';

import * as messages from './messages';
import getInstallCmd from './get-install-cmd';

// MUST require and not import this to avoid wrecking the
// file structure in the build output.
const pkg = require('../package.json');

const log = debug(pkg.name);

export default async function createWebScriptsLibrary(projectName?: string) {
  if (!projectName) {
    throw new Error(messages.missingProjectName());
  }

  if (fs.existsSync(projectName) && projectName !== '.') {
    throw new Error(messages.alreadyExists(projectName));
  }

  const projectPath = path.resolve(process.cwd(), projectName);
  const templatePath = path.resolve(__dirname, '..', 'template');

  log(chalk.gray('Copying template...'));
  await fs.copy(templatePath, projectPath);

  log(chalk.gray('Writing over necessary files...'));
  process.chdir(projectPath);
  const newPkgPath = path.join(projectPath, 'package.json');
  const newPkg = require(newPkgPath);
  newPkg.name = projectName;
  await fs.writeFile(newPkgPath, JSON.stringify(newPkg));

  log(chalk.gray('Installing dependencies...'));
  process.chdir(projectPath);
  await execa(getInstallCmd(), ['install']);

  log(messages.start(projectName));
}
