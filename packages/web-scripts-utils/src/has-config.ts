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
import glob from 'glob';
import readPkgUp from 'read-pkg-up';

import { getConsumingRoot } from './get-consuming-root';
import { hasKeyInObj } from './has-key-in-obj';

const getDependencyTypePath = (
  dependency: string,
  type?: 'dev' | 'peer',
): string => {
  switch (type) {
    case 'dev':
      return `devDependencies.${dependency}`;
    case 'peer':
      return `peerDependencies.${dependency}`;
    default:
      return `dependencies.${dependency}`;
  }
};

// this function can be used to determine whether a config exists,
// either in package.json or as a file.
export const hasConfig = (
  sources: (
    | { type: 'file'; pattern: string }
    | { type: 'package.json'; property: string }
    | {
        type: 'dependency';
        dependency: string;
        dependencyType?: 'peer' | 'dev';
      }
  )[],
): boolean => {
  const { path: pkgPath, packageJson } = readPkgUp.sync({
    cwd: getConsumingRoot(),
  }) || { packageJson: {}, path: getConsumingRoot() };
  const root = pkgPath.slice(0, pkgPath.length - '/package.json'.length);
  return sources.some(source => {
    switch (source.type) {
      case 'file':
        return !!glob.sync(source.pattern, { cwd: root }).length;
      case 'package.json':
        return hasKeyInObj(source.property, packageJson);
      case 'dependency':
        return hasKeyInObj(
          getDependencyTypePath(source.dependency, source.dependencyType),
          packageJson,
        );
      default:
        return false;
    }
  });
};
