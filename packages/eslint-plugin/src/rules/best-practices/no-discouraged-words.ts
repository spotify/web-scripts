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
import { createDocsUrl } from '../../util/helpers';

/**
 * List of discouraged words in the form of RegEx (regular expressions).
 */
const discouragedWords = ['blacklist', 'whitelist'];

const rule: Rule.RuleModule = {
  meta: {
    docs: {
      category: 'Best Practices',
      description: 'Prevent use of discouraged words.',
      url: createDocsUrl('best-practices/no-discouraged-words.md'),
    },
    schema: [],
    fixable: 'code',
    type: 'suggestion',
  },
  create(context: Rule.RuleContext) {
    return {
      // This checks all the JS comments for use of discouraged word. This line is an example of a comment.
      Program(): void {
        const comments = context.getSourceCode().getAllComments();
        comments.forEach(comment => {
          const commentText = comment.value;
          const commentTextViolation = discouragedWords.find(word =>
            commentText.match(new RegExp(word, 'i')),
          );

          if (!commentTextViolation) {
            // There is no violation here.
            return;
          }

          context.report({
            // @ts-ignore
            node: comment,
            message: `Usage of the word "${commentTextViolation}" is strongly discouraged. Please use a different word.`,
          });
        });
      },

      // This checks all the JS syntax for use of discouraged words.
      Identifier(node: TSESTree.Identifier) {
        const variableName = node.name;
        const variableNameViolation = discouragedWords.find(word =>
          variableName.match(new RegExp(word, 'i')),
        );

        if (!variableNameViolation) {
          // There is no violation here
          return;
        }

        // Report it as an error to ESLint
        context.report({
          node,
          message: `Usage of the word "${variableNameViolation}" is strongly discouraged. Please use a different word.`,
        });
      },
    } as Rule.RuleListener;
  },
};

export default rule;
