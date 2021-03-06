// https://git-scm.com/book/en/v2/Git-Basics-Viewing-the-Commit-History
// git log --abbrev-commit --name-status

import { exec, ExecOptionsWithStringEncoding } from "child_process";
import { promisify } from "util";

async function silentExec(command: string) {
  const execAsync = promisify(exec);
  try {
    const response = await execAsync(command, cmdOptions());

    return response.stdout;
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error(`GitEase silentExec: "${command}" ${err.message}`);
    }
    throw err;
  }
}

function cmdOptions(): ExecOptionsWithStringEncoding {
  return {
    encoding: "utf8",
    cwd: __dirname,
  };
}

export async function history(
  options: GitLogOptions = { "-n": 1 }
): Promise<string> {
  const history = `git log --decorate=short --name-status ${convertParams(
    options
  )}`;
  return silentExec(history);
}

function convertParams(options: GitLogOptions): string {
  let params = "";
  for (const entry of Object.entries(options)) {
    params += entry.join(" ");
  }
  return params;
}

// note: option for later
// git log -n 3 --pretty=format:%n%h%n%d%naname-%an%naemail-%ae%ndate-%ad%n%B:commitEase:

export async function remote(): Promise<string> {
  return silentExec("git remote -v");
}

export async function commitFileText(
  sha: string,
  path: string
): Promise<string> {
  return silentExec(`git show ${sha}:${path}`);
}
