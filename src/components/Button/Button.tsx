import * as React from "react";

interface IButton {
  label: string;
}

const Button = (props: IButton) => <button>{props.label}</button>;

export default Button;
