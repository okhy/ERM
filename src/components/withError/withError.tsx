import * as React from "react";

type Props = {
  errorCallback(error: Error, errorInfo: React.ErrorInfo): void;
};

type State = {
  hasError: boolean;
};

class WithError extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    this.props.errorCallback(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <span>Something went wrong</span>;
    }
    return <>{this.props.children}</>;
  }
}

export default WithError;
