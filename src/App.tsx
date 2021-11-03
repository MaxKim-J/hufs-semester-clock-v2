import React, { ReactElement } from 'react';
import CompA from './components/CompA';
import QueryBoundary from './components/Boundaries/QueryBoundary';

function App(): ReactElement {
  return (
    <>
      <h1>외대 종강시계 V2</h1>
      <QueryBoundary>
        <CompA />
      </QueryBoundary>
    </>
  );
}

export default App;
