const path = require('path');

module.exports = {
  rootDir: path.join(process.cwd(), 'src'),
  coverageDirectory: path.join(process.cwd(), 'coverage'),
  collectCoverageFrom: ['**/*.{js,jsx,ts,tsx}', '!**/*.d.ts'],
  preset: 'ts-jest/presets/js-with-ts',
  globals: {
    'ts-jest': {
      tsConfig: {
        allowJs: true,
      },
    },
  },
};
