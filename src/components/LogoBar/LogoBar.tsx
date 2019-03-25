import * as React from "react";
// css
import * as styles from "./LogoBar.styles.css";
// interface
interface ILogoBar {
  button?: React.ReactNode;
}

const LogoBar = (props: ILogoBar) => (
  <div className={styles.main}>
    <span className={styles.logo}>netflixroulette</span>
    {props.button && <div>{props.button}</div>}
  </div>
);

export default LogoBar;
