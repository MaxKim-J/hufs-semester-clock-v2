import { Text } from '@components/fundamentals/Text';
import { css } from '@emotion/react';
import Emoji from '@components/fundamentals/Emoji';
import React from 'react';

function WifiFallback() {
  return (
    <article css={wifiFallbackStyle}>
      <Emoji emoji="๐ถ" size="size80" />
      <Text>์์ดํ์ด ์ฐ๊ฒฐ์ ํ์ธํ์๊ณ , ์๋ก๊ณ ์นจ ํด์ฃผ์ธ์!</Text>
    </article>
  );
}

const wifiFallbackStyle = css`
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
