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

import { TSESTree } from '@typescript-eslint/types';

export const createDocsUrl = (pathname: string): string => {
  return `https://github.com/spotify/web-scripts/blob/master/packages/eslint-spotify/src/rules/${pathname}`;
};

export class TSTypeReferenceHelper {
  constructor(public node: TSESTree.TSTypeReference) {}

  hasParent(): boolean {
    return !!this.node.parent;
  }

  /**
   * Determines whether our ESLint Node (from the AST) is cast to a specific TypeScript type
   *
   * @example new Node(...).containsOneOfType(["React.FC", "React.SFC"]) # => true
   * @param types Array<string> a list of strings for the types (i.e. ["React.SFC", "React.FC"])
   * @returns true if one of the types is set
   */
  public containsOneOfType(types: Array<string>): boolean {
    // Let's check if the type definition is React.FC versus FC
    // Examples: "FC" returns true, "React.FC" returns false
    const { left, right } = this.node.typeName as any;
    const isSingular: boolean = !(left && right);

    // Let's get a human-readable type for our current node
    const { name: singularName } = this.node.typeName as any;
    const currentNodeTypeName = isSingular
      ? singularName
      : `${left.name}.${right.name}`;

    return types.some(type => type === currentNodeTypeName);
  }
}
