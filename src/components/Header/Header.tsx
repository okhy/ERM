import * as React from "react";
// components
import LogoBar from "Components/LogoBar/LogoBar";
import * as styles from "./Header.styles.css";

interface IHeader {
  actionItem?: React.ReactNode;
  children?: React.ReactNode;
}

const Header: React.SFC<IHeader> = props => (
  <div className={styles.main}>
    <LogoBar>{props.actionItem}</LogoBar>
    {props.children && <div className={styles.content}>{props.children}</div>}
  </div>
);

export default Header;
