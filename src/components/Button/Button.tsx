import * as React from "react";
import * as styles from "./Button.styles.css";
import * as cx from "classnames";

interface IButton {
  label: string;
  type?: string;
  disabled?: boolean;
}

const Button = (props: IButton): React.ReactElement => {
  const { type, disabled } = props;

  const mainClass = cx(styles.main, {
    [styles.basic]: !type,
    [styles.primary]: !disabled && type && type === "primary",
    [styles.negative]: !disabled && type && type === "negative",
    [styles.disabled]: !!disabled
  });

  return (
    <button className={mainClass} disabled={!!disabled}>
      <span className={styles.label}>{props.label}</span>
    </button>
  );
};

export default Button;
