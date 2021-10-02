import React, { Suspense, ReactElement } from 'react';

const Comp = React.lazy(() => import('./Comp'));

function Comp2(): ReactElement {
  return (
    <>
      <div>나는 컴2</div>
      <Suspense fallback={<div>loading..</div>}>
        <Comp />
      </Suspense>
    </>
  );
}

export default Comp2;
