module.exports = {
  preset: 'ts-jest/presets/js-with-ts',
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      tsConfig: {
        allowJs: true,
      },
    },
  },
};
