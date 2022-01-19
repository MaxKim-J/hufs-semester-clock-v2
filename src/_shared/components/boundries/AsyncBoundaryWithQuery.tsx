import React, { ReactChild, ReactNode } from 'react';
import { useQueryErrorResetBoundary } from 'react-query';
import DefaultFallback from '@components/error/DefaultFallback';
import AsyncBoundary from './AsyncBoundary';
import { ErrorBoundaryProps } from './ErrorBoundary';

type QueryBoundaryProps = {
  children: ReactNode;
  pendingFallback?: ReactChild | null;
  rejectedFallback?: ErrorBoundaryProps['renderFallback'];
};

function AsyncBoundaryWithQuery({
  children,
  pendingFallback = <div>로딩</div>,
  rejectedFallback = ({ error, reset }) => (
    <DefaultFallback error={error} reset={reset} />
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
