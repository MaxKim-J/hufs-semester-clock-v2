export const textTable = {
  size12: '0.75rem',
  size14: '0.875rem',
  size16: '1rem',
  size20: '1.25rem',
  size24: '1.5rem',
  size32: '2rem',
};

export type TextType = keyof typeof textTable;

export const spaceTable = {
  size4: '0.25rem',
  size8: '0.5rem',
  size16: '1rem',
  size32: '2rem',
  size48: '3rem',
  size64: '4rem',
};

export type SpaceType = keyof typeof spaceTable;

export const colorTable = {
  white: '#FFFFFF',
  lightGray: '#d3d3d3',
  gray: '#c4c4c4',
  darkGray: '#747474',
  black: '#000000',
  lightBlue: '#3899f4',
  red: '#FF0000',
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
