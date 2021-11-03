import React, { ReactElement } from 'react';
import useWeatherQuery from '@/hooks/query/useWeahterQuery';

function CompA(): ReactElement {
  const data = useWeatherQuery('error');
  console.log(data);
  return (
    <>
      <div>나는 컴포넌트 A라네!!!</div>
      {data !== undefined ? <div>{data.dayImageUrl}</div> : null}
    </>
  );
}

export default CompA;
