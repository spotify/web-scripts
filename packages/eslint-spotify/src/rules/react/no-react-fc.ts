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

import { Rule } from 'eslint';
import { TSESTree } from '@typescript-eslint/types';
import * as ESTree from 'estree';
import { TSTypeReferenceHelper, createDocsUrl } from '../../util/helpers';

/**
 * List of TypeScript definitions we don't want to encourage related to React.FC
 */
const discouragedTypes = [
  'FC',
  'SFC',
  'FunctionComponent',
  'React.FC',
  'React.SFC',
  'React.FunctionComponent',
];

const rule: Rule.RuleModule = {
  meta: {
    docs: {
      category: 'Best Practices',
      description: 'Prevent use of React.FC and React.SFC',
      url: createDocsUrl('react/no-react-fc.md'),
    },
    messages: {
      default:
        'Usage of React.FC and React.SFC types are discouraged when creating React components.',
    },
    schema: [],
    fixable: 'code',
    type: 'suggestion',
  },
  create(context: Rule.RuleContext) {
    return {
      TSTypeReference(node: ESTree.Node) {
        const helper = new TSTypeReferenceHelper(
          (node as unknown) as TSESTree.TSTypeReference,
        );

        if (!helper.hasParent()) {
          return;
        }

        if (!helper.containsOneOfType(discouragedTypes)) {
          return;
        }

        context.report({
          node,
          messageId: 'default',
        });
      },
    } as Rule.RuleListener;
  },
};

export default rule;
