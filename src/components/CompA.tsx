import React, { ReactElement } from 'react';
import useSemesterQuery from '@/hooks/query/useSemesterQuery';

function CompA(): ReactElement {
  const data = useSemesterQuery();
  console.log('컴포넌트', data);
  return (
    <>
      <div>나는 컴포넌트 A라네!!!</div>
    </>
  );
}

export default CompA;
