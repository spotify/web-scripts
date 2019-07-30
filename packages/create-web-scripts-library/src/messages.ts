import program from 'commander';
import chalk from 'chalk';

export const missingProjectName = () => `
Please specify the project directory:
  ${chalk.cyan(program.name())} ${chalk.green('<project-directory>')}

For example:
  ${chalk.cyan(program.name())} ${chalk.green('my-library-name')}
Run ${chalk.cyan(`${program.name()} --help`)} to see all options.
`;

export const alreadyExists = (projectName: string) => `
It looks like there's already a directory called "${chalk.cyan(
    projectName,
  )}". Please try a different name or delete that folder.`;

export const start = (projectName: string) => `
Your project is now set up in "${chalk.cyan(projectName)}"! Try running

  ${chalk.green('yarn lint')}
  ${chalk.green('yarn test')}
  ${chalk.green('yarn build')}

to see the web-scripts in action. When you're ready to publish your package, use ${chalk.green(
    'yarn commit',
  )} and ${chalk.green('yarn release')} to use commitizen and semantic-release.`;
