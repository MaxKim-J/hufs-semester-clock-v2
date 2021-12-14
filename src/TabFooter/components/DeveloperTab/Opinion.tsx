import { Text } from '@components/fundamentals/Text';
import { TextArea } from '@components/fundamentals/Input';
import { useState } from 'react';
import Button from '@components/fundamentals/Button';
import { css } from '@emotion/react';
import Spacer from '@components/fundamentals/Spacer';

function Opinion() {
  const [textValue, setTextValue] = useState('');

  return (
    <>
      <Text weight="bold">앱 개선사항 보내기</Text>
      <TextArea
        size="small"
        value={textValue}
        title="앱 개선사항 보내기"
        onChange={(value) => {
          setTextValue(value);
        }}
      />
      <Spacer height="xSmall" />
      <div css={buttonContainerStyle}>
        <Button
          onClick={() => {
            console.log('보내자구');
          }}
        >
          보내기
        </Button>
        <Text color="red" size="xSmall" css={errorMessageStyle}>
          에러 메시지
        </Text>
      </div>
    </>
  );
}

const buttonContainerStyle = css`
  display: flex;
  align-items: center;
`;

const errorMessageStyle = css`
  margin-left: 1rem;
`;

export default Opinion;
