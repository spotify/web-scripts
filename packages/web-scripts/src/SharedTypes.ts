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
type ThresholdLimits =
  | 'info'
  | 'low'
  | 'moderate'
  | 'high'
  | 'critical'
  | 'none';

export type TaskName =
  | 'init'
  | 'build'
  | 'test'
  | 'lint'
  | 'format'
  | 'commit'
  | 'commitmsg'
  | 'precommit'
  | 'release'
  | 'audit';

export type TaskDesc = {
  name: TaskName;
  restOptions: string[];
};

export type BuildTaskDesc = {
  name: 'build';
  cjs: boolean;
  esm: boolean;
  types: boolean;
} & TaskDesc;

export type TestTaskDesc = {
  name: 'test';
  config?: string;
} & TaskDesc;

export type LintTaskDesc = {
  name: 'lint';
  config?: string;
  stylecheck: boolean;
  typecheck: boolean;
} & TaskDesc;

export type FormatTaskDesc = {
  name: 'format';
  config?: string;
  path?: string;
} & TaskDesc;

export type CommitTaskDesc = {
  name: 'commit';
  path: string;
} & TaskDesc;

export type CommitMsgTaskDesc = {
  name: 'commitmsg';
  config: string;
  edit?: string;
} & TaskDesc;

export type ReleaseTaskDesc = {
  name: 'release';
} & TaskDesc;

export type AuditTaskDesc = {
  name: 'audit';
  threshold: ThresholdLimits;
} & TaskDesc;

export type PrecommitTaskDesc = {
  name: 'precommit';
  tests: boolean;
  typecheck: boolean;
  eslintConfig: string;
  jestConfig: string;
  prettierConfig: string;
} & TaskDesc;
