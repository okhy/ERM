import { configure } from "@storybook/react";
import * as styles from "./../src/global.css";
import * as reset from "./../src/reset.css";
// init styles for storybook
styles;
reset;

function loadStories() {
  const req = require.context("../src", true, /\.story\.(js|ts|jsx|tsx)$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
