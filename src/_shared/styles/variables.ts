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
  xSmall: '0.25rem',
  small: '0.5rem',
  normal: '1rem',
  large: '2rem',
  xLarge: '3rem',
  xxLarge: '4rem',
  xxxLarge: '5rem',
};

export type SpaceType = keyof typeof spaceTable;

export const colorTable = {
  white: '#FFFFFF',
  lightGray: '#d3d3d3',
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

export const transparentTable = {
  white30: 'rgba(255, 255, 255, 0.3)',
  white50: 'rgba(255, 255, 255, 0.5)',
  white70: 'rgba(255, 255, 255, 0.7)',
  black30: 'rgba(0, 0, 0, 0.3)',
  black50: 'rgba(0, 0, 0, 0.5)',
  black70: 'rgba(0, 0, 0, 0.7)',
};
