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
import { join } from 'path';

import { auditTask } from '.';

// @ts-ignore
jest.spyOn(process, 'exit').mockImplementation(c => c);

jest.mock('cross-spawn-promise', () => jest.fn());

const spawn: jest.Mock = jest.requireMock('cross-spawn-promise');

class AuditError extends Error {
  public exitStatus: number;
  constructor(message: string, exitStatus: number) {
    super(message);
    this.exitStatus = exitStatus;
  }
}

/**
 * WARNING:
 * These tests have some issues with being potentially non-deterministic.
 * Due to a network dependency on npmjs.com this test could potentially fail
 * should there be any downtime with external services used by with yarn audit.
 *
 * Should these tests begin to fail suddenly, it might be worth trading test coverage
 * confidence for test reliability by mocking the network calls made by yarn audit.
 */
describe('web-scripts audit', () => {
  beforeEach(() => jest.clearAllMocks());
  afterAll(() => jest.restoreAllMocks());

  test.each`
    violations | threshold     | status
    ${0}       | ${undefined}  | ${0}
    ${0}       | ${'none'}     | ${0}
    ${12}      | ${undefined}  | ${0}
    ${12}      | ${'none'}     | ${0}
    ${12}      | ${'low'}      | ${12}
    ${12}      | ${'moderate'} | ${12}
    ${12}      | ${'high'}     | ${12}
    ${12}      | ${'critical'} | ${0}
    ${30}      | ${undefined}  | ${0}
    ${30}      | ${'none'}     | ${0}
    ${30}      | ${'low'}      | ${30}
    ${30}      | ${'moderate'} | ${30}
    ${30}      | ${'high'}     | ${30}
    ${30}      | ${'critical'} | ${30}
  `(
    'return status code $status when audited dependencies have $violations violations and $threshold threshold',
    async ({ violations, threshold, status }) => {
      const source = join(__dirname, '__fixtures__', violations.toString());

      if (violations) {
        spawn.mockRejectedValueOnce(
          new AuditError('audit failure found', violations),
        );
      } else {
        spawn.mockResolvedValueOnce(null);
      }

      await auditTask({
        name: 'audit',
        threshold,
        // Overrides implementation logic for CWD
        restOptions: ['--cwd', source],
      });

      if (status) expect(process.exit).toHaveBeenCalledWith(status);
      else expect(process.exit).not.toHaveBeenCalled();
    },
  );
});
