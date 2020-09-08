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

import rule from './no-discouraged-words';
import { createRuleTester } from '../../util/testHelpers';

const defaultErrorMessageWithWord = (word: string): string =>
  `Usage of the word "${word}" is strongly discouraged. Please use a different word.`;

createRuleTester().run('best-practices/no-discouraged-words', rule, {
  valid: [
    {
      code: 'var foo = () => {};',
    },
    {
      code: 'var foo: String = () => {};',
    },
    {
      code: 'var foo: String = () => ({} as ExampleObject);',
    },
    {
      // We currently don't do "advanced" checking of the discouraged words. That's something we can add over time.
      code: 'var black_list = "";',
    },
    {
      // This plugin only covers variable naming. It's unclear if there are unexpected side effects if we flat out ban the words.
      // In the future, if we see there is not, let's check the entire codebase and avoid them.
      code: 'var foo = "blacklist";',
    },
    {
      code: "/* Hello world. I'm using no discouraged words. */",
    },
  ],
  invalid: [
    {
      code: 'var whitelist = "";',
      errors: [defaultErrorMessageWithWord('whitelist')],
    },
    {
      code: 'var blacklist = "";',
      errors: [defaultErrorMessageWithWord('blacklist')],
    },
    {
      code: 'var foo = blacklist => "";',
      errors: [defaultErrorMessageWithWord('blacklist')],
    },
    {
      code: 'var foo = _blacklist => "";',
      errors: [defaultErrorMessageWithWord('blacklist')],
    },
    {
      code: 'var foo = (bar: Blacklist) => "";',
      errors: [defaultErrorMessageWithWord('blacklist')],
    },
    {
      code: 'var foo = bar => "" as Blacklist;',
      errors: [defaultErrorMessageWithWord('blacklist')],
    },
    {
      code: 'var bLacKLisT = "";',
      errors: [defaultErrorMessageWithWord('blacklist')],
    },
    {
      code: 'var _blacklist = "";',
      errors: [defaultErrorMessageWithWord('blacklist')],
    },
    {
      code: 'var wordsWithBlacklistAndAfter = "";',
      errors: [defaultErrorMessageWithWord('blacklist')],
    },
    {
      code: 'var { blacklist } = {};',
      // Because this translates to '{ var blacklist: blacklist } = {}' the plugin reports the error twice
      errors: [
        defaultErrorMessageWithWord('blacklist'),
        defaultErrorMessageWithWord('blacklist'),
      ],
    },
    {
      code: 'var blacklist = {}; console.log(blacklist);',
      // Because we're using the word twice in the syntax, it'll report twice. Maybe we can clear this up later.
      errors: [
        defaultErrorMessageWithWord('blacklist'),
        defaultErrorMessageWithWord('blacklist'),
      ],
    },
    {
      code: 'var { blacklist: name } = {};',
      errors: [defaultErrorMessageWithWord('blacklist')],
    },
    {
      code: 'var { name: blacklist } = {};',
      errors: [defaultErrorMessageWithWord('blacklist')],
    },
    {
      code: 'var foo: Blacklist = "";',
      errors: [defaultErrorMessageWithWord('blacklist')],
    },
    {
      code: 'var foo = "" as Blacklist;',
      errors: [defaultErrorMessageWithWord('blacklist')],
    },
    {
      code: 'var foo = "" as Example.Blacklist;',
      errors: [defaultErrorMessageWithWord('blacklist')],
    },
    {
      code: 'var foo = "" as Blacklist.Example;',
      errors: [defaultErrorMessageWithWord('blacklist')],
    },
    {
      code: 'var foo = ""; // blacklist',
      errors: [defaultErrorMessageWithWord('blacklist')],
    },
    {
      code: 'enum Blacklist {}',
      errors: [defaultErrorMessageWithWord('blacklist')],
    },
    {
      code: 'class Blacklist {}',
      errors: [defaultErrorMessageWithWord('blacklist')],
    },
    {
      code: 'type Blacklist = {}',
      errors: [defaultErrorMessageWithWord('blacklist')],
    },
    {
      code: "/* Hello world. I'm using the discouraged word blacklist. */",
      errors: [defaultErrorMessageWithWord('blacklist')],
    },
  ],
});
