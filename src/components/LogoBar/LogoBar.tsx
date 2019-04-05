import * as React from "react";
// css
import * as styles from "./LogoBar.styles.css";
// interface
interface ILogoBar {
  children?: React.ReactNode;
}

const LogoBar: React.SFC<ILogoBar> = props => (
  <div className={styles.main}>
    <span className={styles.logo}>netflixroulette</span>
    {props.children && (
      <div className={styles.actionsWrapper}>{props.children}</div>
    )}
  </div>
);

export default LogoBar;
