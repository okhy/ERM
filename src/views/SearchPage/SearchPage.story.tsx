import * as React from "react";
import { storiesOf } from "@storybook/react";
import SearchPage from "./SearchPage";

const mockLocation = { search: "?param=value" };

storiesOf("Views / SearchPage", module).add("default", () => (
  <SearchPage location={mockLocation} />
));
