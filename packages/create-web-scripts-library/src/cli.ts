import program from 'commander';
import chalk from 'chalk';
import debug from 'debug';

import createWebScriptsLibrary from '.';

// MUST require and not import this to avoid wrecking the
// file structure in the build output.
const pkg = require('../package.json');

const log = debug(pkg.name);

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
    log(chalk.redBright('Failed to create your project!'));
    log(err.message);
    process.exit(1);
    return;
  }
}

run();
