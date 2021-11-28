export const textTable = {
  xSmall: '0.75rem',
  small: '0.875rem',
  normal: '1rem',
  large: '1.125rem',
  xLarge: '1.5rem',
  xxLarge: '2.25rem',
  xxxLarge: '4.5rem',
};

export type TextType = keyof typeof textTable;

export const spaceTable = {
  xSmall: '0.5rem',
  small: '1rem',
  normal: '2rem',
  large: '3rem',
  xLarge: '4rem',
  xxLarge: '5rem',
  xxxLarge: '6rem',
};

export type SpaceType = keyof typeof spaceTable;

export const colorTable = {
  white: '#FFFFFF',
  lightGray: '#e5e5e5',
  gray: '#c4c4c4',
  darkGray: '#747474',
  black: '#000000',
  lightBlue: '#3899f4',
};

export type ColorType = keyof typeof colorTable;

export const weightTable = {
  normal: 400,
  semiBold: 500,
  bold: 700,
};

export type WeightType = keyof typeof weightTable;
