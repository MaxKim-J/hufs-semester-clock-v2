import { css } from '@emotion/react';
import { SpaceType, spaceTable } from '@/_shared/styles/variables';

type SpacerProps = {
  size?: SpaceType;
};

function Spacer({ size }: SpacerProps) {
  return <div aria-hidden css={spacerStyle(size)} />;
}

const spacerStyle = (size?: SpaceType) => css`
  width: 100%;
  height: ${spaceTable[size !== undefined ? size : 'normal']};
`;

export default Spacer;
