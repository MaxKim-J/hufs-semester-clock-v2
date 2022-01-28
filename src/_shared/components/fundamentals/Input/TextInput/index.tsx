import { InputHTMLAttributes } from 'react';
import { css } from '@emotion/react';
import { colorTable, TextType, textTable } from '@style/variables';

export type TextInputType = {
  fontSize?: TextType;
  figureWidth?: number;
} & InputHTMLAttributes<HTMLInputElement>;

function TextInput({
  fontSize = 'size16',
  figureWidth = 5,
  ...props
}: TextInputType) {
  return (
    <input type="text" css={textInputStyle(fontSize, figureWidth)} {...props} />
  );
}

const textInputStyle = (size: TextType, widthFigure: number) => css`
  width: calc(${textTable[size]} * ${widthFigure});
  height: ${textTable[size]};
  font-size: ${textTable[size]};
  color: ${colorTable.white};
  border: none;
  border-bottom: 2px solid ${colorTable.white};
  background-color: transparent;
  &::placeholder {
    color: ${colorTable.lightGray};
  }
`;

export default TextInput;
