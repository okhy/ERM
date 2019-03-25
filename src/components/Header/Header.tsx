import * as React from "react";
// components
import TopBar from "./../TopBar/TopBar";

interface IHeader {
  children?: [React.Component | React.FunctionComponent | React.ElementType];
}
const Header = (props: IHeader) => (
  <div>
    <TopBar />
    {props.children}
  </div>
);

export default Header;
