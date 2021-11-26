import { ReactChild } from 'react';
import { ColorType, TextType } from '@/_shared/styles/variables';

export type TextCommonProps = {
  size?: TextType;
  color?: ColorType;
  children: ReactChild;
};
