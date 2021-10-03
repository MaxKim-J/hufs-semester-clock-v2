import React, { ReactElement, Suspense } from 'react';
// import styled from 'styled-components';

const Comp = React.lazy(() => import('./Comp'));

// const StyledDiv2 = styled.div`
//   color: red;
// `;

function Comp2(): ReactElement {
  return (
    <>
      <div>나는 컴2</div>
      <Suspense fallback={<div>loading</div>}>
        <Comp />
      </Suspense>
    </>
  );
}

export default Comp2;
