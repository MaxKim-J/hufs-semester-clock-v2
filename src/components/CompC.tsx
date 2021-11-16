import React from 'react';
import camelcase from 'lodash.camelcase';
import styled from 'styled-components';

const StyledDiv = styled.div`
  color: blue;
`;

const CompC = () => <StyledDiv>{camelcase('im_component_C')}</StyledDiv>;

export default CompC;
