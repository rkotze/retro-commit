export type Rule = {
  moduleName: string;
  message: string;
  level: Level;
  action(commit: Commit): boolean;
};

export enum Level {
  ERROR,
  WARNING,
  INFO,
}
