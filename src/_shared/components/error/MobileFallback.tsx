import { Text } from '@components/fundamentals/Text';
import { css } from '@emotion/react';
import Emoji from '@components/fundamentals/Emoji';
import React from 'react';

function MobileFallback() {
  return (
    <article css={mobileFallbackStyle}>
      <Emoji emoji="ðð»" size="size80" />
      <Text>ëª¨ë°ì¼ UIë¥¼ ì§ìíì§ ììµëë¤. PCë¡ ì ìí´ì£¼ì¸ì!</Text>
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
