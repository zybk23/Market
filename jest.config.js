// eslint-disable-next-line import/no-extraneous-dependencies
const os = require("os");

const proccesorCount = os.cpus().length;
const coreCount = proccesorCount / 2;
const parallelTestLimit = coreCount - 1;

console.log(
  `Running ${parallelTestLimit} test in parallel, on ${coreCount} core ${
    os.cpus()[0].model
  } cpu`
);

module.exports = {
  testEnvironment: "jsdom",

  maxWorkers: parallelTestLimit,
  moduleFileExtensions: ["js", "jsx", "json"],
  transform: {
    "^.+\\.(js|jsx)?$": "babel-jest",
  },
  collectCoverageFrom: [
    ".src/**/*.{js,jsx}",
    "!**/node_modules/**",
    "!**/dist/**",
    "!**/__stories__/**",
  ],
};
