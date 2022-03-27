import { Level } from "./level";

type Rule = {
  moduleName: string;
  message: string;
  level: Level;
  action(commit: Commit): boolean;
};
