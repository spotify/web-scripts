module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-case': [
      1,
      'never',
      ['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
    ],
  },
};
