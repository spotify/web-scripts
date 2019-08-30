export type TaskName =
  | 'init'
  | 'build'
  | 'test'
  | 'lint'
  | 'commit'
  | 'commitmsg'
  | 'precommit'
  | 'release';

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
  config: string;
} & TaskDesc;

export type LintTaskDesc = {
  name: 'lint';
  config?: string;
  typecheck: boolean;
} & TaskDesc;

export type CommitTaskDesc = {
  name: 'commit';
  path: string;
} & TaskDesc;

export type CommitMsgTaskDesc = {
  name: 'commitmsg';
  config: string;
} & TaskDesc;

export type ReleaseTaskDesc = {
  name: 'release';
} & TaskDesc;

export type PrecommitTaskDesc = {
  name: 'precommit';
  fix: boolean;
  tests: boolean;
  eslintConfig: string;
  jestConfig: string;
  prettierConfig: string;
} & TaskDesc;
