export function logResults(results: Result[][]) {
  for (const commitResults of results) {
    for (const rule of commitResults) {
      console.log(`${rule.commitHash}: ${rule.passed}: ${rule.message}`);
    }
  }
}
