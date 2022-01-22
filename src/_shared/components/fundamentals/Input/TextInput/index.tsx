import { HTMLAttributes } from 'react';
import { css } from '@emotion/react';
import { colorTable, TextType, textTable } from '@style/variables';

export type TextInputType = {
  value: string;
  size?: TextType;
  widthFigure?: number;
  maxLength?: number;
  autoFocus?: boolean;
} & HTMLAttributes<HTMLInputElement>;

function TextInput({
  size = 'size16',
  widthFigure = 5,
  ...props
}: TextInputType) {
  return (
    <input type="text" css={textInputStyle(size, widthFigure)} {...props} />
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
