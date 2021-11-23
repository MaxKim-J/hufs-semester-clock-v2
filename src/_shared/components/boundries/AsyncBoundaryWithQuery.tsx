import React, { ReactChild, ReactNode } from 'react';
import { useQueryErrorResetBoundary } from 'react-query';
import AsyncBoundary from './AsyncBoundary';
import { ErrorBoundaryProps } from './ErrorBoundary';
import AsyncRequestError from '@/_shared/components/error/AsyncRequestError';

type QueryBoundaryProps = {
  children: ReactNode;
  pendingFallback?: ReactChild;
  rejectedFallback?: ErrorBoundaryProps['renderFallback'];
};

function AsyncBoundaryWithQuery({
  children,
  pendingFallback = <div>로딩</div>,
  rejectedFallback = ({ error, reset }) => (
    <AsyncRequestError error={error} reset={reset} />
  ),
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

export default AsyncBoundaryWithQuery;
