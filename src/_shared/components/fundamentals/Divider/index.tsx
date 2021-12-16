import { css } from '@emotion/react';
import { SpaceType, ColorType, spaceTable, colorTable } from '@style/variables';

type DividerProps = {
  margin?: SpaceType;
  color?: ColorType;
  height?: number;
};

function Divider({ margin, color, height }: DividerProps) {
  return <div aria-hidden css={dividerStyle(margin, color, height)} />;
}

const dividerStyle = (
  margin?: SpaceType,
  color?: ColorType,
  height?: number
) => css`
  width: 100%;
  height: ${height ?? 1}px;
  background-color: ${colorTable[color ?? 'black']};
  margin: ${spaceTable[margin ?? 'size16']} 0;
`;

export default Divider;
