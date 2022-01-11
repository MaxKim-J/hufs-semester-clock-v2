import { css } from '@emotion/react';
import { SpaceType, ColorType, spaceTable, colorTable } from '@style/variables';

type DividerProps = {
  margin?: SpaceType;
  color?: ColorType;
  height?: number;
};

function Divider({
  margin = 'size16',
  color = 'white',
  height = 1,
}: DividerProps) {
  return <div aria-hidden css={dividerStyle(margin, color, height)} />;
}

const dividerStyle = (
  margin: SpaceType,
  color: ColorType,
  height: number
) => css`
  width: 100%;
  height: ${height}px;
  background-color: ${colorTable[color]};
  margin: ${spaceTable[margin]} 0;
`;

export default Divider;
