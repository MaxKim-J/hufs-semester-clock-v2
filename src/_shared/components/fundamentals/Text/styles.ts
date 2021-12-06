import { css } from '@emotion/react';
import {
  colorTable,
  ColorType,
  textTable,
  TextType,
  weightTable,
  WeightType,
} from '@style/variables';

type TextStyleArgs = [TextType, ColorType, WeightType];

export const linkStyle = (...args: TextStyleArgs) => css`
  ${textStyle(...args)}
  &:hover {
    text-decoration: underline;
  }
`;

export const textStyle = (...[size, color, weight]: TextStyleArgs) => css`
  font-size: ${textTable[size]};
  color: ${colorTable[color]};
  font-weight: ${weightTable[weight]};
`;

export const headingStyle = (color: ColorType) => css`
  color: ${colorTable[color]};
`;
