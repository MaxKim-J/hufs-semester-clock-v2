import React from 'react';
import { format } from 'date-fns';
import styled from 'styled-components';

const StyledDiv = styled.div`
  color: red;
`;

const CompB = () => (
  <StyledDiv>{format(new Date(1996, 8, 20), 'yyyy')}</StyledDiv>
);

export default CompB;
