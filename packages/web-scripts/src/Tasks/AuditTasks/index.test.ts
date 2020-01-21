import { join } from 'path';

import { auditTask } from '.';

// @ts-ignore
jest.spyOn(process, 'exit').mockImplementation(c => c);

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
