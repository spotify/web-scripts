jest.mock('./get-consuming-root');

import path from 'path';
import { hasConfig } from './has-config';

const { getConsumingRoot } = jest.requireMock('./get-consuming-root');

describe('hasConfig', () => {
  beforeEach(() => {
    getConsumingRoot.mockReturnValue(
      path.join(__dirname, '..', '__fixtures__', 'demo-lib'),
    );
  });
  it('works for a file', () => {
    expect(hasConfig([{ type: 'file', pattern: 'tsconfig.json' }])).toBe(true);
  });

  it('works for a package.json property', () => {
    expect(hasConfig([{ type: 'package.json', property: 'name' }])).toBe(true);
  });

  it('works for a nested package.json property', () => {
    expect(
      hasConfig([
        { type: 'package.json', property: 'jest.collectCoverageFrom' },
      ]),
    ).toBe(true);
  });

  it('works for a dependency', () => {
    expect(hasConfig([{ type: 'dependency', dependency: 'react' }])).toBe(true);
  });

  it('works for a dev dependency', () => {
    expect(
      hasConfig([
        {
          type: 'dependency',
          dependency: '@testing-library/react',
          dependencyType: 'dev',
        },
      ]),
    ).toBe(true);
  });

  it('works for a peer dependency', () => {
    expect(
      hasConfig([
        {
          type: 'dependency',
          dependency: 'styled-components',
          dependencyType: 'peer',
        },
      ]),
    ).toBe(true);
  });

  it('works when some fail and some succeed', () => {
    expect(
      hasConfig([
        {
          type: 'dependency',
          dependency: 'react',
        },
        {
          type: 'dependency',
          dependency: 'react',
          dependencyType: 'peer',
        },
      ]),
    ).toBe(true);
  });

  it('fails when all fail', () => {
    expect(
      hasConfig([
        {
          type: 'dependency',
          dependency: 'angular',
        },
        {
          type: 'dependency',
          dependency: 'angular',
          dependencyType: 'peer',
        },
      ]),
    ).toBe(false);
  });
});
