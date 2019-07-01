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
