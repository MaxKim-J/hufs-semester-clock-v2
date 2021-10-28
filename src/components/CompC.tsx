import React, { ReactElement } from 'react';
import { format } from 'date-fns';
import styled from 'styled-components';

const StyledDiv = styled.div`
  color: red;
`;

function CompD(): ReactElement {
  return (
    <div>
      <StyledDiv>나는 컴포넌트C 라네!</StyledDiv>
      <div>{format(new Date(2021, 9, 20), 'yyyy')}</div>
    </div>
  );
}

export default CompD;
