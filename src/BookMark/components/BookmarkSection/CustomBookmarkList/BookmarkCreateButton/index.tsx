import { useState, useCallback } from 'react';
import Spacer from '@components/fundamentals/Spacer';
import { Text } from '@components/fundamentals/Text';
import plusGray from '@shared/images/plus-gray.svg';
import { css } from '@emotion/react';
import { readableHiddenHeading } from '@style/common';
import { transparentTable, colorTable } from '@style/variables';
import { fadeInAndOut } from '@style/animation';
import { m, AnimatePresence } from 'framer-motion';
import BookmarkInputDialog from './BookmarkInputDialog';

function BookmarkCreateButton() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const closeDialog = useCallback(() => {
    setIsDialogOpen(false);
  }, [setIsDialogOpen]);

  return (
    <div css={createButtonWrapperStyle}>
      <button
        css={createButtonStyle}
        type="button"
        onClick={() => {
          setIsDialogOpen((prevState) => !prevState);
        }}
        aria-describedby="bookmark-create-describe"
      >
        <div css={plusImgWrapperStyle}>
          <img src={plusGray} css={plusImgStyle} alt="" />
        </div>
        <Spacer height="size8" />
        <Text size="size12">북마크 추가</Text>
        <p id="bookmark-create-describe" css={readableHiddenHeading}>
          이 버튼을 통해 리스트에 북마크를 추가할 수 있습니다.
        </p>
      </button>
      <AnimatePresence>
        {isDialogOpen && (
          <m.dialog
            {...fadeInAndOut}
            transition={{ delay: 0.15 }}
            aria-modal
            open
            css={inputDialogStyle}
          >
            <BookmarkInputDialog closeDialog={closeDialog} />
          </m.dialog>
        )}
      </AnimatePresence>
    </div>
  );
}

const createButtonWrapperStyle = css`
  position: relative;
  width: 5rem;
`;

const createButtonStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

const plusImgWrapperStyle = css`
  width: 3.5rem;
  height: 3.5rem;
  box-sizing: border-box;
  border: 1px solid ${colorTable.white};
  border-radius: 50%;
  display: flex;
  background-color: ${transparentTable.darkGray30};
  align-items: center;
  justify-content: center;
`;

const plusImgStyle = css`
  width: 1.5rem;
  height: 1.5rem;
`;

const inputDialogStyle = css`
  position: absolute;
  background-color: ${transparentTable.black70};
  transform: translateY(-5rem) translateX(5rem);
`;

export default BookmarkCreateButton;
