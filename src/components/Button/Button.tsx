import * as React from "react";
import * as styles from "./Button.styles.css";

interface IButton {
  label: string;
}

const Button = (props: IButton) => <button className={styles.main}>{props.label}</button>;

export default Button;
