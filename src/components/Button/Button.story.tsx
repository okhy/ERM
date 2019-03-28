import * as React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./Button";

storiesOf("Components / Button", module)
  .add("basic", () => <Button label="basic" />)
  .add("primary", () => <Button label="primary" type="primary" />)
  .add("negative", () => <Button label="negative" type="negative" />)
  .add("disabled", () => <Button label="disabled" type="disabled" disabled={true} />);
