import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  rootDir: "./",
  testEnvironment: "node",
  moduleFileExtensions: ["ts", "tsx", "js"],
  testPathIgnorePatterns: ["/test\\.ts"],
  coveragePathIgnorePatterns: ["<rootDir>/src/middleware/.*.ts"],
  testRegex: "/src/.*.test.(ts|tsx|js)$",
  transform: {
    "\\.(ts|tsx)$": "ts-jest",
  },
  verbose: true,
};
export default config;
