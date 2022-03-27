import { Result } from "./result";

export function logResults(results: Result[][]) {
  let hasError = false;
  for (const commitResults of results) {
    for (const rule of commitResults) {
      console.log(`${rule.commitHash}: ${rule.passed}: ${rule.message}`);
      if (!rule.passed) {
        hasError = true;
      }
    }
  }

  if (hasError) {
    console.log("Error");
    process.exit(1);
  }
}
