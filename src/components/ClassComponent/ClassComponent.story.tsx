import * as React from "react";
import { storiesOf } from "@storybook/react";
import ClassComponent from "./ClassComponent";

storiesOf("ClassComponent", module)
  .add("default", () => <ClassComponent />)
  .add("with content", () => <ClassComponent content="Test content" />);
