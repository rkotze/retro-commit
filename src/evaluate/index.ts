import titleLength from "../rules/title-length";

const rules = [titleLength()];

export function evaluate(commits: Commit[]): Result[][] {
  return commits.map((commit) => {
    return rules.map((rule) => {
      const { moduleName, message, level } = rule;
      return {
        moduleName,
        message,
        commitHash: commit.hash,
        level,
        passed: rule.action(commit),
      };
    });
  });
}
