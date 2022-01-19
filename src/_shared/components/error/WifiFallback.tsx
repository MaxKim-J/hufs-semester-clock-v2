import { Text } from '@components/fundamentals/Text';
import { css } from '@emotion/react';
import Emoji from '@components/fundamentals/Emoji';
import React from 'react';

function WifiFallback() {
  return (
    <article css={errorArticleStyle}>
      <Emoji emoji="📶" size="size80" />
      <Text>와이파이 연결을 확인하시고, 새로고침 해주세요!</Text>
    </article>
  );
}

const errorArticleStyle = css`
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default WifiFallback;
