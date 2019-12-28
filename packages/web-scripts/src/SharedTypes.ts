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
  | 'preinstall'
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
  config?: string;
} & TaskDesc;

export type LintTaskDesc = {
  name: 'lint';
  config?: string;
  typecheck: boolean;
} & TaskDesc;

export type FormatTaskDesc = {
  name: 'format';
  config?: string;
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

export type PreinstallTaskDesc = {
  name: 'preinstall';
  threshold: ThresholdLimits;
} & TaskDesc;

export type PrecommitTaskDesc = {
  name: 'precommit';
  fix: boolean;
  tests: boolean;
  eslintConfig: string;
  jestConfig: string;
  prettierConfig: string;
} & TaskDesc;
