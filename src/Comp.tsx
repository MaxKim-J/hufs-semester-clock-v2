import React, { ReactElement } from 'react';
import styled from 'styled-components';

console.log(process.env.NODE_ENV);
console.log(process.env.BASE_URL);

const StyledDiv = styled.div`
  color: red;
`;

function Comp(): ReactElement {
  return <StyledDiv>나는 컴포넌트라네!</StyledDiv>;
}

export default Comp;
