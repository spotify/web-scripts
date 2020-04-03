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
import program from 'commander';
import chalk from 'chalk';

import createWebScriptsLibrary from '.';

// MUST require and not import this to avoid wrecking the
// file structure in the build output.
const pkg = require('../package.json');

let projectName: string;

program
  .version(pkg.version)
  .arguments('<project-directory>')
  .usage(`${chalk.green('<project-directory>')} [options]`)
  .action((name: string) => {
    projectName = name;
  })
  .allowUnknownOption()
  .parse(process.argv);

async function run() {
  try {
    await createWebScriptsLibrary(projectName);
  } catch (err) {
    /* eslint-disable no-console */
    console.log(chalk.redBright('Failed to create your project!'));
    console.log(err.message);
    /* eslint-enable no-console */
    process.exit(1);
    return;
  }
}

run();
