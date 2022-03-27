#!/usr/bin/env node
// import yargs from "yargs/yargs";
// const argv = yargs(process.argv.slice(2)).argv;

import { evaluate } from "./evaluate";
import { logResults } from "./evaluate/log-results";
import { commitList } from "./git/commit-list";
import { history } from "./git/git-commands";

export async function retro(): Promise<void> {
  const commits = commitList(await history());
  logResults(evaluate(commits));
}

retro();
