import { css } from '@emotion/react';
import { colorTable, TextType, textTable } from '@style/variables';

export type TextInputType = {
  value: string;
  title: string;
  onChange: (value: string) => void;
  size?: TextType;
  maxLength?: number;
  placeholder?: string;
};

function TextInput({
  onChange,
  size = 'normal',
  maxLength = 10,
  ...props
}: TextInputType) {
  return (
    <input
      type="text"
      css={textInputStyle(size)}
      onChange={(e) => {
        onChange(e.target.value);
      }}
      maxLength={maxLength}
      {...props}
    />
  );
}

const textInputStyle = (size: TextType) => css`
  width: calc(${textTable[size]} * 5);
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
