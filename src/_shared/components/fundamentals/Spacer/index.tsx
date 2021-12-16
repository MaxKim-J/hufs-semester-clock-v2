import { css } from '@emotion/react';
import { SpaceType, spaceTable } from '@style/variables';

type SpacerProps = {
  height?: SpaceType;
};

function Spacer({ height }: SpacerProps) {
  return <div aria-hidden css={spacerStyle(height)} />;
}

const spacerStyle = (height?: SpaceType) => css`
  width: 100%;
  height: ${spaceTable[height ?? 'size16']};
`;

export default Spacer;
