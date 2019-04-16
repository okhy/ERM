const path = require("path");

module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  verbose: true,
  transform: {
    ".(js|jsx|ts|tsx)": "ts-jest"
  },
  setupFilesAfterEnv: [path.resolve(__dirname, "./enzyme.config.js")],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
    "\\.css$": "<rootDir>/__mocks__/styleMock.js",
    "Components(.*)$": "<rootDir>/src/components/$1",
    "Views(.*)$": "<rootDir>/src/views/$1",
    "Services(.*)$": "<rootDir>/src/services/$1",
    "Root(.*)$": "<rootDir>/src/$1",
    Types: "<rootDir>/src/types.d.ts",
    "Mocks(.*)$": "<rootDir>/__mocks__/$1"
  },
  coveragePathIgnorePatterns: ["node_modules", "./src/types.d.ts"],
  moduleFileExtensions: ["js", "jsx", "json", "ts", "tsx", "node"]
};
