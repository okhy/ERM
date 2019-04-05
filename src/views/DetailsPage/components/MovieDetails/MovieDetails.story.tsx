import * as React from "react";
import { storiesOf } from "@storybook/react";
import MovieDetails from "./MovieDetails";

const containerStyle = {
  backgroundColor: "#1e0f75",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "200px"
};

storiesOf("Components / MovieDetails", module).add("default", () => (
  <div style={containerStyle}>
    <MovieDetails />
  </div>
));
