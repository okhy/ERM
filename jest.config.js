const path = require("path");

module.exports = {
  // verbose: true,
  transform: {
    ".(ts|tsx)": "ts-jest"
  },
  setupFilesAfterEnv: [path.resolve(__dirname, "./enzyme.config.js")],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
    "\\.css$": "<rootDir>/__mocks__/styleMock.js",
    "Components(.*)$": "<rootDir>/src/components/$1",
    "Views(.*)$": "<rootDir>/src/views/$1",
    "HOC(.*)$": "<rootDir>/src/hoc/$1",
    "AppRoot(.*)$": "<rootDir>/src/$1",
    "Mocks(.*)$": "<rootDir>/__mocks__/$1"
  },
  moduleFileExtensions: ["js", "jsx", "json", "ts", "tsx", "node"]
};
