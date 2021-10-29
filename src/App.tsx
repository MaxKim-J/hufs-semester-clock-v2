import React, { ReactElement, useEffect } from 'react';
import ApiClient from './services/api';
import StorageClient from './services/storage';

function App(): ReactElement {
  useEffect(() => {
    const getSemester = async () => {
      const { data } = await ApiClient.getBackground({ campus: 'global' });
      StorageClient.setItem({
        a: 'b',
        b: {
          c: 'd',
          d: 'e',
        },
      });
      const storedData = await StorageClient.getItem('e');
      console.log(storedData, 'ㅇ');
      const result = StorageClient.removeItem('a');
      console.log(result);

      return data;
    };

    getSemester();
  }, []);

  return (
    <>
      <h1>외대 종강시계 V2</h1>
    </>
  );
}

export default App;
