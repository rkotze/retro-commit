import { Level } from "../rules/rule";

export type Result = {
  commitHash: string;
  message: string;
  moduleName: string;
  passed: boolean;
  level: Level;
};
