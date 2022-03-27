#!/usr/bin/env node
import yargs from "yargs";
import { evaluate } from "./evaluate";
import { logResults } from "./evaluate/log-results";
import { commitList } from "./git/commit-list";
import { history } from "./git/git-commands";
const retroArgs = yargs(process.argv.slice(2));

retroArgs
  .scriptName("commitretro")
  .usage("$0 <cmd> [args]")
  .command(
    "latest",
    "Lint the latest commit",
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    () => {},
    async function () {
      const commits = commitList(await history());
      logResults(evaluate(commits));
    }
  )
  .command(
    "n [n]",
    "Lint n number of commits from latest",
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    () => {},
    async function (args) {
      const n = args.n as number;
      const commits = commitList(await history({ "-n": n }));
      logResults(evaluate(commits));
    }
  )
  .options({
    n: { type: "number", default: 1 },
  })
  .help().argv;
