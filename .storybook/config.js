import { configure } from "@storybook/react";

function loadStories() {
  const req = require.context("../src", true, /\.story\.(js|ts|jsx|tsx)$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
