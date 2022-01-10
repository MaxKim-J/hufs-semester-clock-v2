import { MouseEvent } from 'react';
import Emoji from '@components/fundamentals/Emoji';
import { Text } from '@components/fundamentals/Text';
import CloseBlack from '@shared/images/close-black.svg';
import { css } from '@emotion/react';
import { colorTable } from '@style/variables';
import Spacer from '@components/fundamentals/Spacer';

type BookMarkProps = {
  title: string;
  url: string;
  emoji?: string;
  onClickClose?: (e: MouseEvent<HTMLButtonElement>) => void;
};

function BookMarkItem({
  title,
  url,
  emoji = '🌐',
  onClickClose,
}: BookMarkProps) {
  return (
    <div css={bookMarkItemWrapperStyle}>
      {onClickClose && (
        <button onClick={onClickClose} type="button">
          <img css={closeImg} src={CloseBlack} alt="삭제하기" />
        </button>
      )}
      <a href={url} css={bookMarkItemStyle}>
        <div role="button" css={emojiWrapperStyle}>
          <Emoji emoji={emoji} size="size32" />
        </div>
        <Spacer height="size8" />
        <Text size="size12">{title}</Text>
      </a>
    </div>
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
  width: 3rem;
  height: 3rem;
  background-color: ${colorTable.gray};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default BookMarkItem;
