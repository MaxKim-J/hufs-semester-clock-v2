import { Text } from '@components/fundamentals/Text';
import { css } from '@emotion/react';
import Emoji from '@components/fundamentals/Emoji';
import React from 'react';

function MobileFallback() {
  return (
    <article css={mobileFallbackStyle}>
      <Emoji emoji="🙅🏻" size="size80" />
      <Text>모바일 UI를 지원하지 않습니다. PC로 접속해주세요!</Text>
    </article>
  );
}

const mobileFallbackStyle = css`
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default MobileFallback;
