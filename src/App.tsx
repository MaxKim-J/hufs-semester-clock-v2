import React, {useState, Suspense} from 'react';

const Comp = React.lazy(() => import('./Comp'));

function App() {
  const load = () => {
    console.log('dd')
  }

  return(
    <>
    <Suspense fallback={<div>loading..</div>}>
      <h1 onClick={load}>외대 종강시계 V2</h1>
        <Comp/>
      </Suspense>
    </>
  )
}

export default App;