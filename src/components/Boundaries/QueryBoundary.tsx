import React, { ReactChild, ReactNode } from 'react';
import { useQueryErrorResetBoundary } from 'react-query';
import AsyncBoundary from './AsyncBoundary';
import { ErrorBoundaryProps } from './ErrorBoundary';

type QueryBoundaryProps = {
  children: ReactNode;
  pendingFallback?: ReactChild;
  rejectedFallback?: ErrorBoundaryProps['renderFallback'];
};

function QueryBoundary({
  children,
  pendingFallback = <div>로딩</div>,
  rejectedFallback = () => <div>에러</div>,
}: QueryBoundaryProps) {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <AsyncBoundary
      reset={reset}
      pendingFallback={pendingFallback}
      rejectedFallback={rejectedFallback}
    >
      {children}
    </AsyncBoundary>
  );
}

export default QueryBoundary;
