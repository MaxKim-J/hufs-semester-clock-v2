import React from 'react';
import { format } from 'date-fns';
import { css } from '@emotion/react';

const CompB = () => (
  <div css={block}>{format(new Date(1996, 8, 20), 'yyyy')}</div>
);

const block = css`
  color: red;
`;

export default CompB;
