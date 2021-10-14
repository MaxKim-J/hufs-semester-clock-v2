import React, { ReactElement } from 'react';
import axios from 'axios';

function CompB(): ReactElement {
  const axiosInstance = axios.get('');

  return (
    <>
      {console.log(axiosInstance)}
      <div>나는 컴포넌트 2라네</div>
    </>
  );
}

export default CompB;
