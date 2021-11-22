import React from 'react';
import camelcase from 'lodash.camelcase';
import styled from 'styled-components';
import useSemesterQuery from '@/hooks/query/useSemesterQuery';

const StyledDiv = styled.div`
  color: blue;
`;

const CompC = () => {
  const data2 = useSemesterQuery();

  return (
    <div>
      {data2?.next.due}
      <StyledDiv>{camelcase('im_component_C')}</StyledDiv>
    </div>
  );
};

export default CompC;
