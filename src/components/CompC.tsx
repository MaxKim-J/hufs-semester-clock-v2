import React from 'react';
import { css } from '@emotion/react';
import useSemesterQuery from '@/hooks/query/useSemesterQuery';

const CompC = () => {
  const data2 = useSemesterQuery();

  return <div css={block}>{data2?.next.due}</div>;
};

const block = css`
  color: blue;
`;

export default CompC;
