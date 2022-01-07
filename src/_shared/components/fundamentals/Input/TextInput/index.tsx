import { ChangeEvent } from 'react';
import { css } from '@emotion/react';
import { colorTable, TextType, textTable } from '@style/variables';

export type TextInputType = {
  value: string;
  title: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  size?: TextType;
  maxLength?: number;
  placeholder?: string;
  widthFigure?: number;
};

function TextInput({
  size = 'size16',
  maxLength = 10,
  widthFigure = 5,
  ...props
}: TextInputType) {
  return (
    <input
      type="text"
      css={textInputStyle(size, widthFigure)}
      maxLength={maxLength}
      {...props}
    />
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
