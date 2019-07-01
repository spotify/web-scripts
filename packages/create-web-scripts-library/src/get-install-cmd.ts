// from https://github.com/zeit/create-next-app/blob/master/lib/utils/get-install-cmd.js

import execa from 'execa';

let cmd: string;

export default function getInstallCmd() {
  if (cmd) {
    return cmd;
  }

  try {
    execa.commandSync('yarnpkg --version');
    cmd = 'yarn';
  } catch (e) {
    cmd = 'npm';
  }

  return cmd;
}
