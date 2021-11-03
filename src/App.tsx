import React, { ReactElement } from 'react';
import CompA from './components/CompA';
import AsyncBoundaryWithQuery from './components/Boundaries/AsyncBoundaryWithQuery';

function App(): ReactElement {
  return (
    <>
      <h1>외대 종강시계 V2</h1>
      <AsyncBoundaryWithQuery>
        <CompA />
      </AsyncBoundaryWithQuery>
    </>
  );
}

export default App;
