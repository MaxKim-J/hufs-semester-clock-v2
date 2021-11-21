import React, { ReactElement, lazy, Suspense } from 'react';
import CompA from './components/CompA';
import AsyncBoundaryWithQuery from './components/Boundaries/AsyncBoundaryWithQuery';

const CompB = lazy(
  /* webpackChunkName: "C" */ () => import('./components/CompB')
);

const CompC = lazy(
  /* webpackChunkName: "D" */ () => import('./components/CompC')
);

function App(): ReactElement {
  return (
    <>
      <h1>외대 종강시계 V2</h1>
      <AsyncBoundaryWithQuery pendingFallback={<div>로딩</div>}>
        <CompA />
      </AsyncBoundaryWithQuery>
      <Suspense fallback={<div>로딩</div>}>
        <CompB />
        <CompC />
      </Suspense>
    </>
  );
}

export default App;
