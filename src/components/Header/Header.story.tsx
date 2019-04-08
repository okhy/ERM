import * as React from "react";
import { storiesOf } from "@storybook/react";
import Header from "./Header";

storiesOf("Components / Header", module)
  .add("default", () => <Header />)
  .add("with content", () => (
    <Header>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi nostrum id
      voluptates nisi ut voluptate voluptatem repellat eos culpa molestiae ipsum
      omnis eaque iusto quisquam, dolorem accusantium earum officiis. Sunt.
    </Header>
  ));
