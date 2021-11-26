import { css } from '@emotion/react';
import {
  colorTable,
  ColorType,
  textTable,
  TextType,
} from '@/_shared/styles/variables';

export const textStyle = (size?: TextType, color?: ColorType) => css`
  font-size: ${size !== undefined ? textTable[size] : textTable.normal};
  color: ${color !== undefined ? colorTable[color] : colorTable.black};
`;

export const headingStyle = (color?: ColorType) => css`
  color: ${color !== undefined ? colorTable[color] : colorTable.black};
`;
