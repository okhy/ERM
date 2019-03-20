import * as React from "react";

class PureComponent extends React.PureComponent<any, {}> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return <span>Pure Component contents.</span>;
  }
}

export default PureComponent;
