import React, { ReactChild, ReactNode, Suspense } from 'react';
import ErrorBoundary, { ErrorBoundaryProps } from './ErrorBoundary';

export type AsyncBoundaryProps = {
  children: ReactNode;
  pendingFallback: ReactChild | null;
  rejectedFallback: ErrorBoundaryProps['renderFallback'];
} & Omit<ErrorBoundaryProps, 'renderFallback'>;

function AsyncBoundary({
  pendingFallback,
  rejectedFallback,
  children,
  ...errorBoundaryProps
}: AsyncBoundaryProps) {
  return (
    <ErrorBoundary renderFallback={rejectedFallback} {...errorBoundaryProps}>
      <Suspense fallback={pendingFallback}>{children}</Suspense>
    </ErrorBoundary>
  );
}

export default AsyncBoundary;
