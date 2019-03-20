import * as React from "react";
import * as styles from "./styles.css";

class ClassComponent extends React.Component<any, {}> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return <span className={styles.main}>Class Component contents.</span>;
  }
}

export default ClassComponent;
