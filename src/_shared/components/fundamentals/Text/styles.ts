import { css } from '@emotion/react';
import {
  colorTable,
  ColorType,
  textTable,
  TextType,
  weightTable,
  WeightType,
} from '@/_shared/styles/variables';

export const textStyle = (
  size?: TextType,
  color?: ColorType,
  weight?: WeightType
) => css`
  font-size: ${size !== undefined ? textTable[size] : textTable.normal};
  color: ${color !== undefined ? colorTable[color] : colorTable.black};
  font-weight: ${weight !== undefined
    ? weightTable[weight]
    : weightTable.normal};
`;

export const headingStyle = (color?: ColorType) => css`
  color: ${color !== undefined ? colorTable[color] : colorTable.black};
`;
