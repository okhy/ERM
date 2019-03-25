import * as React from "react";

interface IwithError {
  Component: React.Component | React.FunctionComponent;
}

class withError extends React.Component<IwithError, { hasError: boolean }> {
  constructor(props: IwithError) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <span>Something went wrong</span>;
    }
    return this.props.Component;
  }
}

export default withError;
