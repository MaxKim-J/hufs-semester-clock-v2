import { useState } from 'react';
import Spacer from '@components/fundamentals/Spacer';
import { Text } from '@components/fundamentals/Text';
import plusGray from '@shared/images/plus-gray.svg';
import { css } from '@emotion/react';
import { transparentTable, colorTable } from '@style/variables';

function BookmarkCreateButton() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div css={createButtonWrapperStyle}>
      <button
        css={createButtonStyle}
        type="button"
        onClick={() => {
          console.log('dddd');
          setIsDialogOpen((prevState) => !prevState);
        }}
      >
        <div css={plusImgWrapperStyle}>
          <img src={plusGray} css={plusImgStyle} alt="추가 아이콘" />
        </div>
        <Spacer height="size8" />
        <Text size="size12">즐겨찾기 추가</Text>
      </button>
      {isDialogOpen && (
        <dialog open css={{ position: 'absolute', bottom: '-3rem' }}>
          인풋창
        </dialog>
      )}
    </div>
  );
}

const createButtonWrapperStyle = css`
  position: relative;
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
  display: flex;
  background-color: ${transparentTable.darkGray30};
  align-items: center;
  justify-content: center;
`;

const plusImgStyle = css`
  width: 1.5rem;
  height: 1.5rem;
`;

export default BookmarkCreateButton;
