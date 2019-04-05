import * as React from "react";
import { storiesOf } from "@storybook/react";
import MovieSearch from "./MovieSearch";

const containerStyle = {
  backgroundColor: "#1e0f75",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "200px"
};
storiesOf("Components / MovieSearch", module).add("default", () => (
  <div style={containerStyle}>
    <MovieSearch />
  </div>
));
