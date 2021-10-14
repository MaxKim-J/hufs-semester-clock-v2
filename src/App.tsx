import React, { ReactElement, Suspense } from 'react';
import CompA from './CompA';
import CompB from './CompB';

const CompD = React.lazy(() => import('./CompD'));
const CompC = React.lazy(() => import('./CompC'));

function App(): ReactElement {
  return (
    <>
      <h1>외대 종강시계 V2</h1>
      <CompA />
      <CompB />
      <Suspense fallback={<div>로딩</div>}>
        <CompC />
      </Suspense>
      <Suspense fallback={<div>로딩</div>}>
        <CompD />
      </Suspense>
    </>
  );
}

export default App;
