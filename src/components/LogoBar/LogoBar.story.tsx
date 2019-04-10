import * as React from "react";
import { storiesOf } from "@storybook/react";
import LogoBar from "./LogoBar";
import Button from "Components/Button/Button";

storiesOf("Components / LogoBar", module)
  .add("default", () => <LogoBar />)
  .add("with additional elements", () => (
    <LogoBar>
      <Button label="Hello" />
    </LogoBar>
  ));
