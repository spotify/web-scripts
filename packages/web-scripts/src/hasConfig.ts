import glob from 'glob';
import readPkgUp from 'read-pkg-up';

import { CONSUMING_ROOT } from './Paths';

const pkg = readPkgUp.sync({ cwd: CONSUMING_ROOT }) || {};

export const hasConfig = (
  sources: (
    | { type: 'file'; pattern: string }
    | { type: 'package.json'; property: string })[],
): boolean =>
  sources.some(source => {
    if (source.type === 'file') {
      return !!glob.sync(source.pattern).length;
    } else if (source.type === 'package.json') {
      return !!pkg.hasOwnProperty(source.property);
    }

    return false;
  });
