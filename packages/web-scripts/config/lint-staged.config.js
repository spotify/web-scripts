const { PRETTIER_CONFIG, ESLINT_CONFIG, JEST_CONFIG } = require('../cjs/Paths');

const fix = process.env.WEB_SCRIPTS_SHOULD_FIX === 'true';
const tests = process.env.WEB_SCRIPTS_RUN_TESTS === 'true';
const jestConfig = process.env.WEB_SCRIPTS_JEST_CONFIG || JEST_CONFIG;
const prettierConfig =
  process.env.WEB_SCRIPTS_PRETTIER_CONFIG || PRETTIER_CONFIG;
const eslintConfig = process.env.WEB_SCRIPTS_ESLINT_CONFIG || ESLINT_CONFIG;

const testRelatedChanges = `jest --config ${jestConfig} --bail --findRelatedTests`;

const lintRelatedChanges = `eslint ${
  fix ? '--fix' : ''
} --config ${eslintConfig}`;

// have to run the script in a way that the files aren't passed in.
// we need to run tsc on the whole project.
// https://github.com/okonet/lint-staged/issues/174#issuecomment-461423707
const typecheckRelatedChanges = `bash -c \"tsc --noEmit\"`;

const formatRelatedChanges = `prettier ${
  fix ? '--write' : '--check'
} --config ${prettierConfig}`;

const gitAdd = 'git add';

module.exports = {
  '*.{js,jsx,ts,tsx,json,md,yaml}': [
    formatRelatedChanges,
    ...(fix ? [gitAdd] : []),
  ],
  '*.{js,jsx,ts,tsx}': [
    lintRelatedChanges,
    ...(tests ? [testRelatedChanges] : []),
    ...(fix ? [gitAdd] : []),
  ],
  '*.{ts,tsx}': [typecheckRelatedChanges],
};
