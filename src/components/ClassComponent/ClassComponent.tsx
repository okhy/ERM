import * as React from "react";
import * as styles from "./styles.css";

class ClassComponent extends React.Component<{ content?: string }, {}> {
  constructor(props: any) {
    super(props);
  }
  render() {
    const content = this.props.content && this.props.content;
    return <span className={styles.main}>{content}</span>;
  }
}

export default ClassComponent;
