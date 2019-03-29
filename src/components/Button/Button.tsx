import * as React from "react";
import * as styles from "./Button.styles.css";
import * as cx from "classnames";

interface IButton {
  label: string;
  type?: string;
  disabled?: boolean;
  icon?: string;
  size?: string;
}

const Button = (props: IButton): React.ReactElement => {
  const { type, disabled, icon } = props;
  const isSmall = props.size === "small";
  const mainClass = cx(styles.main, {
    [styles.basic]: !type,
    [styles.primary]: !disabled && type && type === "primary",
    [styles.negative]: !disabled && type && type === "negative",
    [styles.disabled]: !!disabled,
    [styles.small]: isSmall
  });

  return (
    <button className={mainClass} disabled={!!disabled}>
      {icon && <i className={`${isSmall ? styles.smallIcon : styles.icon} ${icon}`} />}
      <span className={isSmall ? styles.smallLabel : styles.label}>{props.label}</span>
    </button>
  );
};

export default Button;
