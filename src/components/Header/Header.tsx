import * as React from "react";
// components
import LogoBar from "./../LogoBar/LogoBar";
import * as styles from "./Header.styles.css";

interface IHeader {
  actionItem?: React.ReactNode;
  children?: React.ReactNode;
}

const Header = (props: IHeader) => (
  <div className={styles.main}>
    <LogoBar>{props.actionItem && props.actionItem}</LogoBar>
    <div className={styles.content}>{props.children}</div>
  </div>
);

export default Header;
