import * as React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./Button";

storiesOf("Components / Button", module)
  .add("default variants", () => (
    <>
      <Button label="basic" />
      <Button label="white" variant="white" />
      <Button label="primary" variant="primary" />
      <Button label="negative" variant="negative" />
      <Button label="disabled" variant="disabled" disabled={true} />
    </>
  ))
  .add("with icon", () => (
    <>
      <Button label="basic" icon="fab fa-font-awesome-flag" />
      <Button
        label="primary"
        variant="primary"
        icon="fab fa-font-awesome-flag"
      />
      <Button
        label="negative"
        variant="negative"
        icon="fab fa-font-awesome-flag"
      />
      <Button
        label="disabled"
        variant="disabled"
        disabled={true}
        icon="fab fa-font-awesome-flag"
      />
    </>
  ))
  .add("small variants", () => (
    <>
      <Button label="small" size="small" />
      <Button label="small-primary" variant="primary" size="small" />
      <Button label="small-negative" variant="negative" size="small" />
      <Button label="small-disabled" variant="disabled" size="small" />
    </>
  ))
  .add("small variants with icons", () => (
    <>
      <Button label="small" size="small" icon="fab fa-font-awesome-flag" />
      <Button
        label="small-primary"
        variant="primary"
        size="small"
        icon="fab fa-font-awesome-flag"
      />
      <Button
        label="small-negative"
        variant="negative"
        size="small"
        icon="fab fa-font-awesome-flag"
      />
      <Button
        label="small-disabled"
        variant="disabled"
        size="small"
        icon="fab fa-font-awesome-flag"
      />
    </>
  ));
