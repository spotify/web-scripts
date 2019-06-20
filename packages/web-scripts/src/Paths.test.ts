import { stat as statFS } from 'fs';
import { promisify } from 'util';
const stat = promisify(statFS);
import * as Paths from './Paths';

test('Paths are exported and exist', async () => {
  expect(await stat(Paths.CONSUMING_ROOT)).toBeTruthy();
  expect(await stat(Paths.THIS_ROOT)).toBeTruthy();
  expect(await stat(Paths.ESLINT_CONFIG)).toBeTruthy();
  expect(await stat(Paths.PRETTIER_CONFIG)).toBeTruthy();
  expect(await stat(Paths.TSCONFIG)).toBeTruthy();
});
