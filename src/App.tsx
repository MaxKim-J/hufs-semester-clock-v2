import React, { ReactElement, useState } from 'react';
import Comp2 from './Comp2';

function App(): ReactElement {
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <h1>외대 종강시계 V2</h1>
      <button
        type="button"
        onClick={() => {
          setIsShow((s) => !s);
        }}
      >
        날 눌러바
      </button>
      {isShow ? <Comp2 /> : null}
    </>
  );
}

export default App;
