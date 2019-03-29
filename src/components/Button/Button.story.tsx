import * as React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./Button";

storiesOf("Components / Button", module)
  .add("default variants", () => (
    <>
      <Button label="basic" />
      <Button label="white" type="white" />
      <Button label="primary" type="primary" />
      <Button label="negative" type="negative" />
      <Button label="disabled" type="disabled" disabled={true} />
    </>
  ))
  .add("with icon", () => (
    <>
      <Button label="basic" icon="fab fa-font-awesome-flag" />
      <Button label="primary" type="primary" icon="fab fa-font-awesome-flag" />
      <Button label="negative" type="negative" icon="fab fa-font-awesome-flag" />
      <Button label="disabled" type="disabled" disabled={true} icon="fab fa-font-awesome-flag" />
    </>
  ))
  .add("small variants", () => (
    <>
      <Button label="small" size="small" />
      <Button label="small-primary" type="primary" size="small" />
      <Button label="small-negative" type="negative" size="small" />
      <Button label="small-disabled" type="disabled" size="small" />
    </>
  ))
  .add("small variants with icons", () => (
    <>
      <Button label="small" size="small" icon="fab fa-font-awesome-flag" />
      <Button label="small-primary" type="primary" size="small" icon="fab fa-font-awesome-flag" />
      <Button label="small-negative" type="negative" size="small" icon="fab fa-font-awesome-flag" />
      <Button label="small-disabled" type="disabled" size="small" icon="fab fa-font-awesome-flag" />
    </>
  ));
