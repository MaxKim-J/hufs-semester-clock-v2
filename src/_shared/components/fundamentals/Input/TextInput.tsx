import { css } from '@emotion/react';

type TextInputType = {
  value: string;
  onChange: (value: string) => void;
  title: string;
};

function TextInput({ value, onChange, title }: TextInputType) {
  return (
    <input
      type="text"
      title={title}
      value={value}
      css={textInputStyle}
      onChange={(e) => {
        onChange(e.target.value);
      }}
    />
  );
}

const textInputStyle = css`
  border: 1px solid black;
`;

export default TextInput;
