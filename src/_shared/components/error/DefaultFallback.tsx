import React from 'react';
import { RenderFallbackParams } from '@components/boundries/ErrorBoundary';
import { Text } from '@components/fundamentals/Text';
import Emoji from '@components/fundamentals/Emoji';
import Button from '@components/fundamentals/Button';
import { css } from '@emotion/react';
import Spacer from '@components/fundamentals/Spacer';
import { formatEllipsis } from '@shared/utils/formatHelper';

function DefaultFallback({ error, reset }: RenderFallbackParams) {
  const resetError = () => {
    if (reset !== undefined) {
      reset();
    }
  };

  return (
    <article css={errorArticleStyle}>
      <Emoji emoji="🤭" size="size32" />
      <Text size="size14">
        에러가 발생했습니다. Error:{' '}
        {error.response.status ?? formatEllipsis(error.message, 7)}
      </Text>
      <Text size="size14">
        해당 현상이 반복된다면, 개발자 소개 탭에서 피드백을 보내주세요!
      </Text>
      <Spacer />
      <Button noBorder size="size12" type="button" onClick={resetError}>
        <Emoji emoji="🔁" /> 재시도
      </Button>
    </article>
  );
}

const errorArticleStyle = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default DefaultFallback;
