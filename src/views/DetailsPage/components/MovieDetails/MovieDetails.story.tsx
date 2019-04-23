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
    <MovieDetails
      id={1}
      rating={2}
      title="Movie Title"
      overview="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, nihil consequatur ipsa nesciunt sit molestiae molestias illum architecto tempora voluptatum quia recusandae? Nisi magni incidunt itaque blanditiis cumque, cupiditate quasi?"
    />
  </div>
));
