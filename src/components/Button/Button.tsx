import * as React from "react";
import * as styles from "./Button.styles.css";
import * as cx from "classnames";

interface IButton {
  label: string; // label, mandatory
  variant?: string; // css button variants -> "primary", "white", "negative" etc.
  type?: string; // html button type prop -> "submit"
  disabled?: boolean; // is diabled
  icon?: string; // full fontawesome class set -> "fab fa-font-awesome-flag"
  size?: string; // "small"
}

const Button: React.SFC<IButton> = ({ type, disabled, icon, variant, ...props }) => {
  const isSmall = props.size === "small";
  const mainClass = cx(styles.main, {
    [styles.basic]: !variant,
    [styles.white]: !disabled && variant && variant === "white",
    [styles.primary]: !disabled && variant && variant === "primary",
    [styles.negative]: !disabled && variant && variant === "negative",
    [styles.disabled]: !!disabled,
    [styles.small]: isSmall
  });

  return (
    <button className={mainClass} disabled={!!disabled} type={type}>
      {icon && <i className={`${isSmall ? styles.smallIcon : styles.icon} ${icon}`} />}
      <span className={isSmall ? styles.smallLabel : styles.label}>{props.label}</span>
    </button>
  );
};

export default Button;
