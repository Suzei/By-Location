module.exports = {
  testeEnviroment: "jsdom",
  testePathIgnorePatterns: ["/node_modules", "/.next/"],
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.ts(x)"],
  setupFilesAfterEnv: ["<rootDir>/.jest/setup.ts"],
};
