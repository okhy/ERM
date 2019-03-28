import * as React from "react";
import * as styles from "./Button.styles.css";
import * as cx from "classnames";

interface IButton {
  label: string;
  type?: string;
  disabled?: boolean;
}

const Button = (props: IButton): React.ReactElement => {
  const mainClass = cx(styles.main, {
    [styles.grey]: !props.type,
    [styles.primary]: props.type && props.type === "primary",
    [styles.negative]: props.type && props.type === "negative"
  });
  return (
    <button className={mainClass} disabled={!!props.disabled}>
      <span className={styles.label}>{props.label}</span>
    </button>
  );
};

export default Button;
