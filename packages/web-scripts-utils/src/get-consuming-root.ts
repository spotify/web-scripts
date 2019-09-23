import { resolve } from 'path';

// The ROOT folder of the consuming package,
// aka where the user is using this package from.
export const getConsumingRoot = () => resolve(process.cwd());
