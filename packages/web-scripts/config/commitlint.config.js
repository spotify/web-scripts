module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-case': [
      1,
      'never',
      ['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
    ],
    'type-enum': [
      1,
      'always',
      [
        'feat',
        'fix',
        'improvement',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'build',
        'ci',
        'chore',
        'revert',
      ],
    ],
  },
};
