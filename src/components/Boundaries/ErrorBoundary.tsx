import React, { ReactNode } from 'react';

// 아니 진짜 에러타입 어떻게해야함?
type RenderFallbackParams = {
  error: string;
  reset: (...args: unknown[]) => void;
};

export type ErrorBoundaryProps = {
  renderFallback: (params: RenderFallbackParams) => ReactNode;
  reset: (...args: unknown[]) => void;
  children: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
  error: string | null;
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
    const { state } = this;
    this.setState({ ...state, hasError: false });
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
