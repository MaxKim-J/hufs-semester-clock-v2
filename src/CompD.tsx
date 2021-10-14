import React, { ReactElement } from 'react';
import styled from 'styled-components';
import clonedeep from 'lodash.clonedeep';
import camelcase from 'lodash.camelcase';

const StyledDiv = styled.div`
  color: red;
`;

function CompD(): ReactElement {
  return (
    <div>
      <div>{clonedeep({ a: 1 }).a}</div>
      <div>{camelcase('ds_d')}</div>
      <StyledDiv>나는 컴포넌트D 라네!</StyledDiv>
    </div>
  );
}

export default CompD;
