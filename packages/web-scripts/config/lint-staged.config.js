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
}--bail --findRelatedTests`;

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
