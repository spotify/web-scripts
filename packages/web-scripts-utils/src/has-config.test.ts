/*
 * Copyright 2020 Spotify AB
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
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
