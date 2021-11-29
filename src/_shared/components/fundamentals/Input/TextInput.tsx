import { css } from '@emotion/react';
import { colorTable, TextType, textTable } from '@/_shared/styles/variables';

type TextInputType = {
  value: string;
  title: string;
  onChange: (value: string) => void;
  size?: TextType;
  maxLength?: number;
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
  width: 80px;
  height: ${textTable[size]};
  font-size: ${textTable[size]};
  color: ${colorTable.white};
  border: none;
  border-bottom: 2px solid ${colorTable.white};
  background-color: transparent;
`;

export default TextInput;
