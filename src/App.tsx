import React, { ReactElement, lazy, useState } from 'react';
import CompA from './components/CompA';
import AsyncBoundaryWithQuery from './components/Boundaries/AsyncBoundaryWithQuery';

const CompC = lazy(() => import('./components/CompC'));

function App(): ReactElement {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      <h1>외대 종강시계 V2</h1>
      <AsyncBoundaryWithQuery pendingFallback={<div>로딩</div>}>
        <CompA />
      </AsyncBoundaryWithQuery>
      <AsyncBoundaryWithQuery pendingFallback={<div>로딩</div>}>
        {isShow ? <CompC /> : null}
      </AsyncBoundaryWithQuery>
      <button
        type="button"
        onClick={() => {
          setIsShow((s) => !s);
        }}
      >
        show
      </button>
    </>
  );
}

export default App;
