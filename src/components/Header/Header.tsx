import * as React from "react";
// components
import LogoBar from "./../LogoBar/LogoBar";

interface IHeader {
  actionItem?: React.ReactNode;
  children?: React.ReactNode;
}

const Header = (props: IHeader) => (
  <div>
    <LogoBar />
    {props.children}
  </div>
);

export default Header;
