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

import rule from './no-react-fc';
import { createRuleTester } from '../../util/testHelpers';

const defaultErrorMessage: string =
  'Usage of React.FC and React.SFC types are discouraged when creating React components.';

createRuleTester().run('react/no-react-fc', rule, {
  valid: [
    {
      code: 'var HelloWorld = () => {};',
    },
    {
      code: 'var HelloWorld = ({ enable }: { enable: boolean }) => {};',
    },
    {
      code: 'var HelloWorld = (): ReactNode => {};',
    },
    {
      code: 'var HelloWorld = (): Custom.FC => {};',
    },
    {
      code: 'var HelloWorld = (): Custom.SFC => {};',
    },
    {
      code: 'var HelloWorld = (): Custom.FunctionComponent => {};',
    },
    {
      code: 'var HelloWorld = (): Custom.React.FC => {};',
    },
    {
      code: 'var HelloWorld = (): Custom.React.SFC => {};',
    },
    {
      code: 'var HelloWorld = (): Custom.React.FunctionComponent => {};',
    },
  ],
  invalid: [
    {
      code: `var HelloWorld: FC<{}> = () => {};`,
      errors: [defaultErrorMessage],
    },
    {
      code: `var HelloWorld: SFC<{}> = () => {};`,
      errors: [defaultErrorMessage],
    },
    {
      code: `var HelloWorld: FunctionComponent<{}> = () => {};`,
      errors: [defaultErrorMessage],
    },
    {
      code: `var HelloWorld: React.FC<{}> = () => {};`,
      errors: [defaultErrorMessage],
    },
    {
      code: `var HelloWorld: React.SFC<{}> = () => {};`,
      errors: [defaultErrorMessage],
    },
    {
      code: `var HelloWorld: React.FunctionComponent<{}> = () => {};`,
      errors: [defaultErrorMessage],
    },
    {
      code: `
        type FakeFC = FC;
        var HelloWorld: FakeFC<{}> = () => {};
      `,
      errors: [defaultErrorMessage],
    },
    {
      code: `
        type FakeFC = SFC;
        var HelloWorld: FakeFC<{}> = () => {};
      `,
      errors: [defaultErrorMessage],
    },
    {
      code: `
        type FakeFC = FunctionComponent;
        var HelloWorld: FakeFC<{}> = () => {};
      `,
      errors: [defaultErrorMessage],
    },
    {
      code: `
        type FakeFC = React.FC;
        var HelloWorld: FakeFC<{}> = () => {};
      `,
      errors: [defaultErrorMessage],
    },
    {
      code: `
        type FakeFC = React.SFC;
        var HelloWorld: FakeFC<{}> = () => {};
      `,
      errors: [defaultErrorMessage],
    },
    {
      code: `
        type FakeFC = React.FunctionComponent;
        var HelloWorld: FakeFC<{}> = () => {};
      `,
      errors: [defaultErrorMessage],
    },
  ],
});
