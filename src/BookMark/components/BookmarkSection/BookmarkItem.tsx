import { css } from '@emotion/react';
import { motion } from 'framer-motion';
import Emoji from '@components/fundamentals/Emoji';
import { Text } from '@components/fundamentals/Text';
import CloseBlack from '@shared/images/close-black.svg';
import { transparentTable } from '@style/variables';
import Spacer from '@components/fundamentals/Spacer';
import { formatEllipsis } from '@shared/utils/formatHelper';
import { Bookmark } from '@/BookMark/atoms';

type BookMarkProps = {
  bookmark: Bookmark;
  onClickClose?: () => void;
};

function BookmarkItem({ bookmark, onClickClose }: BookMarkProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.2 },
      }}
      css={bookMarkItemWrapperStyle}
    >
      {onClickClose && (
        <button
          onClick={onClickClose}
          css={closeButtonStyle}
          type="button"
          data-testid={`remove-${bookmark.id}`}
        >
          <img css={closeImg} src={CloseBlack} alt="삭제 아이콘" />
        </button>
      )}
      <a href={bookmark.url} css={bookMarkItemStyle}>
        <div css={emojiWrapperStyle}>
          <Emoji emoji={bookmark.emoji ?? '🌐'} size="size24" />
        </div>
        <Spacer height="size8" />
        <Text size="size12" css={bookmarkTitleStyle}>
          {formatEllipsis(bookmark.title, 7)}
        </Text>
      </a>
    </motion.div>
  );
}

const bookMarkItemWrapperStyle = css`
  position: relative;
  width: 5rem;
`;

const closeButtonStyle = css`
  position: absolute;
  right: 0.5rem;
`;

const closeImg = css`
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
  background-color: ${transparentTable.white50};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const bookmarkTitleStyle = css`
  white-space: nowrap;
`;

export default BookmarkItem;
