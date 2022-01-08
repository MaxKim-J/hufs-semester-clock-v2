import { Text } from '@components/fundamentals/Text';
import { TextArea } from '@components/fundamentals/Input';
import { useState } from 'react';
import Button from '@components/fundamentals/Button';
import { css } from '@emotion/react';
import Spacer from '@components/fundamentals/Spacer';
import { spaceTable } from '@style/variables';

function Opinion() {
  const [textValue, setTextValue] = useState('');

  return (
    <>
      <Text weight="bold" size="size20">
        앱 개선사항 보내기
      </Text>
      <TextArea
        size="size14"
        value={textValue}
        placeholder="하루에 한번만 보낼 수 있어요. 200자 이내로 작성해주세요!"
        title="앱 개선사항 보내기"
        onChange={(e) => {
          setTextValue(e.target.value);
        }}
      />
      <Spacer height="size4" />
      <div css={buttonContainerStyle}>
        <Button
          onClick={() => {
            console.log('보내자구');
          }}
        >
          보내기
        </Button>
        <Text color="red" size="size12" css={errorMessageStyle}>
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
  margin-left: ${spaceTable.size16};
`;

export default Opinion;
