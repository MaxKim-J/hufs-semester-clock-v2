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
  xxSmall: '0.25rem',
  xSmall: '0.5rem',
  small: '0.75rem',
  normal: '1rem',
  large: '1.25rem',
  xLarge: '1.5rem',
  xxLarge: '1.75rem',
};

export type SpaceType = keyof typeof spaceTable;

export const colorTable = {
  white: '#FFFFFF',
  lightGray: '#e5e5e5',
  gray: '#c4c4c4',
  darkGray: '#747474',
  black: '#000000',
};

export type ColorType = keyof typeof colorTable;
