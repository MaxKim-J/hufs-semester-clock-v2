import { ReactNode } from 'react';
import { ColorType, TextType, WeightType } from '@/_shared/styles/variables';

export type TextCommonProps = {
  weight?: WeightType;
  size?: TextType;
  color?: ColorType;
  children: ReactNode;
};
