import { HTMLAttributes } from 'react';
import { css } from '@emotion/react';
import { colorTable, spaceTable, textTable, TextType } from '@style/variables';
import { Text } from '../../Text';

type TextAreaInputProps = {
  value: string;
  width?: number;
  size?: TextType;
  maxLength?: number;
} & HTMLAttributes<HTMLTextAreaElement>;

function TextArea({
  onChange,
  size = 'size16',
  maxLength = 200,
  title,
  width = 0,
  value,
  ...props
}: TextAreaInputProps) {
  return (
    <div css={textAreaContainerStyle(width)}>
      <Text
        css={lengthCounterStyle}
        size="size12"
        aria-label="글자수 제한 표시"
      >
        {`${value.length}/${maxLength}`}
      </Text>
      <textarea
        css={textAreaStyle(size)}
        onChange={onChange}
        aria-multiline="true"
        aria-label={title}
        maxLength={maxLength}
        value={value}
        {...props}
      />
    </div>
  );
}

const textAreaContainerStyle = (width: number) => css`
  width: ${width ? `${width}px` : '100%'};
`;

const textAreaStyle = (size: TextType) => css`
  width: inherit;
  height: calc(${textTable[size]} * 5);
  font-size: ${textTable[size]};
  color: ${colorTable.white};
  border: 2px solid ${colorTable.white};
  background-color: transparent;
  padding: ${spaceTable.size8};
  box-sizing: border-box;
  font-family: 'netmarbleM', serif;
  &::placeholder {
    color: ${colorTable.lightGray};
  }
`;

const lengthCounterStyle = css`
  text-align: right;
`;

export default TextArea;
