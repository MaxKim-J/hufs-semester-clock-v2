import { css } from '@emotion/react';

type TextInputType = {
  value: string;
  onChange: (value: string) => void;
  title: string;
};

function TextInput({ onChange, ...props }: TextInputType) {
  return (
    <input
      type="text"
      css={textInputStyle}
      onChange={(e) => {
        onChange(e.target.value);
      }}
      {...props}
    />
  );
}

const textInputStyle = css`
  border: 1px solid black;
`;

export default TextInput;
