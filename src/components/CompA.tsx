import React, { ReactElement } from 'react';
import useSemesterQuery from '@/hooks/query/useSemesterQuery';

function CompA(): ReactElement {
  const data = useSemesterQuery();
  return (
    <>
      <div>나는 컴포넌트 A라네!!!</div>
      {data !== undefined ? <div>{data.current.due}</div> : null}
    </>
  );
}

export default CompA;
