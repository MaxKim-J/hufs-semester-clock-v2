import { useState } from 'react';
import Spacer from '@components/fundamentals/Spacer';
import { Text } from '@components/fundamentals/Text';
import plusGray from '@shared/images/plus-gray.svg';
import { css } from '@emotion/react';
import { transparentTable, colorTable } from '@style/variables';
import BookmarkInputDialog from './BookmarkInputDialog';
import { fadeInAndOut } from '@style/animation';
import { motion, AnimatePresence } from 'framer-motion';

function BookmarkCreateButton() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <div css={createButtonWrapperStyle}>
      <button
        css={createButtonStyle}
        type="button"
        onClick={() => {
          setIsDialogOpen((prevState) => !prevState);
        }}
      >
        <div css={plusImgWrapperStyle}>
          <img src={plusGray} css={plusImgStyle} alt="추가 아이콘" />
        </div>
        <Spacer height="size8" />
        <Text size="size12">즐겨찾기 추가</Text>
      </button>
      <AnimatePresence>
        {isDialogOpen && (
          <motion.dialog {...fadeInAndOut} open css={inputDialogStyle}>
            <div css={dialogArrowStyle} />
            <BookmarkInputDialog closeDialog={closeDialog} />
          </motion.dialog>
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

const dialogArrowStyle = css`
  position: absolute;
  top: -1rem;
  left: 1rem;
  width: 0;
  height: 0;
  border-left: 1rem solid transparent;
  border-right: 1rem solid transparent;
  border-bottom: 1rem solid ${transparentTable.black70};
`;

const inputDialogStyle = css`
  position: absolute;
  background-color: ${transparentTable.black70};
  transform: translateY(1.5rem);
`;

export default BookmarkCreateButton;
