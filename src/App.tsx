import React, { ReactElement } from 'react';
import addDays from 'date-fns/addDays';
import CompA from './components/CompA';
import AsyncBoundaryWithQuery from './components/Boundaries/AsyncBoundaryWithQuery';

function App(): ReactElement {
  return (
    <>
      <h1>외대 종강시계 V2</h1>
      <div>{addDays(new Date(), 1).getTime()}</div>
      <AsyncBoundaryWithQuery>
        <CompA />
      </AsyncBoundaryWithQuery>
    </>
  );
}

export default App;
