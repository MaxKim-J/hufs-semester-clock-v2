import React from 'react';
import Text from '../Text/Text';
import { withKnobs, select } from '@storybook/addon-knobs';
import {
  colorTable,
  ColorType,
  textTable,
  TextType,
} from '@/_shared/styles/variables';

export default {
  title: 'Text',
  decorators: [withKnobs],
};

export const coloredText = () => {
  const colorOption = Object.fromEntries(
    Object.keys(colorTable).map((color) => [color, color])
  );
  const sizeOption = Object.fromEntries(
    Object.keys(textTable).map((size) => [size, size])
  );
  const color = select('color', colorOption, 'black');
  const size = select('color', sizeOption, 'normal');

  return (
    <Text color={color as ColorType} size={size as TextType}>
      텍스트
    </Text>
  );
};
