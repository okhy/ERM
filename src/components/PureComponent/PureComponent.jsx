import * as React from "react";

class PureComponent extends React.PureComponent {
  constructor() {
    super();
  }
  render() {
    return <span>Pure Component contents.</span>;
  }
}

export default PureComponent;
