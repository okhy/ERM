import * as React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./Button";

storiesOf("Components / Button", module)
  .add("basic", () => <Button label="basic" />)
  .add("primary", () => <Button label="primary" type="primary" />)
  .add("negative", () => <Button label="negative" type="negative" />)
  .add("disabled", () => <Button label="disabled" type="disabled" disabled={true} />)
  .add("with icon", () => <Button label="basic" icon="fab fa-font-awesome-flag" />)
  .add("small variants", () => (
    <>
      <Button label="small" size="small" />
      <Button label="small-primary" type="primary" size="small" />
      <Button label="small-negative" type="negative" size="small" />
      <Button label="small-disabled" type="disabled" size="small" />
    </>
  ));
