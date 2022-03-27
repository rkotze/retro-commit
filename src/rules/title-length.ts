import { Rule, Level } from "./rule";

export default function titleLength(): Rule {
  return {
    moduleName: "@commit-retro/titleLength",
    message:
      "Must have more than 10 or less than 80 characters in commit title",
    level: Level.ERROR,
    action(commit: Commit) {
      return commit.title.length > 10 && commit.title.length < 80;
    },
  };
}
