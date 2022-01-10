import { MouseEvent } from 'react';
import Emoji from '@components/fundamentals/Emoji';
import { Text } from '@components/fundamentals/Text';
import CloseBlack from '@shared/images/close-black.svg';
import { css } from '@emotion/react';
import { transparentTable } from '@style/variables';
import Spacer from '@components/fundamentals/Spacer';
import { motion } from 'framer-motion';

type BookMarkProps = {
  title: string;
  url: string;
  emoji?: string;
  onClickClose?: (e: MouseEvent<HTMLButtonElement>) => void;
};

function BookmarkItem({
  title,
  url,
  emoji = '🌐',
  onClickClose,
}: BookMarkProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.2,
        transition: { duration: 0.2 },
      }}
      css={bookMarkItemWrapperStyle}
    >
      {onClickClose && (
        <button onClick={onClickClose} type="button">
          <img css={closeImg} src={CloseBlack} alt="삭제 아이콘" />
        </button>
      )}
      <a href={url} css={bookMarkItemStyle}>
        <div css={emojiWrapperStyle}>
          <Emoji emoji={emoji} size="size24" />
        </div>
        <Spacer height="size8" />
        <Text size="size12">{title}</Text>
      </a>
    </motion.div>
  );
}

const bookMarkItemWrapperStyle = css`
  position: relative;
`;

const closeImg = css`
  position: absolute;
  right: 0;
  width: 1rem;
  height: 1rem;
`;

const bookMarkItemStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const emojiWrapperStyle = css`
  width: 3.5rem;
  height: 3.5rem;
  background-color: ${transparentTable.darkGray30};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default BookmarkItem;
