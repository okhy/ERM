import * as React from "react";

class WithError extends React.Component<{}, { hasError: boolean }> {
  constructor(props: {}) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log(errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return <span>Something went wrong</span>;
    }
    return this.props.children;
  }
}

export default WithError;
