import React, { ReactNode } from 'react';

export type RenderFallbackParams = {
  error: any;
  reset?: (...args: unknown[]) => void;
};

export type ErrorBoundaryProps = {
  renderFallback: (params: RenderFallbackParams) => ReactNode;
  reset: (...args: unknown[]) => void;
  children: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
  error: any;
};

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true, error };
  }

  resetErrorBoundary = () => {
    const { reset } = this.props;
    this.setState({ error: null, hasError: false });
    reset();
  };

  render() {
    const { resetErrorBoundary } = this;
    const { hasError, error } = this.state;
    const { children, renderFallback } = this.props;

    if (hasError && error) {
      return renderFallback({
        error,
        reset: resetErrorBoundary,
      });
    }

    return children;
  }
}

export default ErrorBoundary;
