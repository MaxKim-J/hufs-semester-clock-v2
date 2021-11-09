import React, { ReactElement, lazy, Suspense } from 'react';
import CompA from './components/CompA';
import AsyncBoundaryWithQuery from './components/Boundaries/AsyncBoundaryWithQuery';

const CompC = lazy(() => import('./components/CompC'));
const CompD = lazy(() => import('./components/CompD'));

function App(): ReactElement {
  return (
    <>
      <h1>외대 종강시계 V2</h1>
      <AsyncBoundaryWithQuery>
        <CompA />
      </AsyncBoundaryWithQuery>
      <Suspense fallback={<div>로딩</div>}>
        <CompC />
        <CompD />
      </Suspense>
    </>
  );
}

export default App;
