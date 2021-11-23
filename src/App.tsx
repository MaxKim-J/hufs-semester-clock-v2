import React, { ReactElement, useEffect } from 'react';
import { getItem } from '@/_shared/services/storage';

function App(): ReactElement {
  useEffect(() => {
    b();
  }, []);

  const b = async () => {
    const a = await getItem('dd');
    return a;
  };

  return (
    <>
      <h1>외대 종강시계 V2</h1>
    </>
  );
}

export default App;
