module.exports = {
  transform: {
    "^.+\\.ts$": "ts-jest"
  },
  testRegex: "(src/.*\\.test)\\.ts$",
  testPathIgnorePatterns: ["/node_modules/", "\\.d\\.ts$", "lib/.*"],
  moduleFileExtensions: ["js", "ts", "json"]
};
