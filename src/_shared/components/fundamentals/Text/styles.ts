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
  font-size: ${textTable[size !== undefined ? size : 'normal']};
  color: ${colorTable[color !== undefined ? color : 'black']};
  font-weight: ${weightTable[weight !== undefined ? weight : 'normal']};
`;

export const headingStyle = (color?: ColorType) => css`
  color: ${colorTable[color !== undefined ? color : 'black']};
`;
