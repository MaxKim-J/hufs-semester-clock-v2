import { css } from '@emotion/react';
import useInput from '@shared/hooks/useInput';
import { TextInput } from '@components/fundamentals/Input';
import { useSetRecoilState } from 'recoil';
import Spacer from '@components/fundamentals/Spacer';
import Button from '@components/fundamentals/Button';
import { getRandomString } from '@shared/utils/mathHelper';
import { userBookmarks } from '@/BookMark/atoms';

type BookmarkInputDialogProps = {
  closeDialog: () => void;
};

function BookmarkInputDialog({ closeDialog }: BookmarkInputDialogProps) {
  const setUserBookmarks = useSetRecoilState(userBookmarks);

  // 그래도 한번 들어가는 봐야 되지 않을까..?
  const urlInput = useInput({
    name: 'url',
    validators: [{ validFunction: (text: string) => !!text }],
  });

  const titleInput = useInput({
    name: 'title',
    validators: [{ validFunction: (text: string) => !!text }],
  });

  const submitBookmark = () => {
    const newBookMark = [
      {
        id: getRandomString(),
        title: titleInput.value,
        url: urlInput.value,
      },
    ];
    setUserBookmarks((state) => ({
      ...state,
      value:
        state.value === null ? newBookMark : state.value.concat(newBookMark),
    }));
    closeDialog();
  };

  return (
    <>
      <TextInput
        size="size12"
        title="북마크 제목 입력"
        placeholder="북마크 제목"
        maxLength={10}
        widthFigure={20}
        value={titleInput.value}
        onChange={titleInput.handleInput}
      />
      <Spacer />
      <TextInput
        title="주소 입력"
        size="size12"
        placeholder="웹사이트 주소"
        widthFigure={20}
        value={urlInput.value}
        onChange={urlInput.handleInput}
      />
      <Spacer />
      <div css={buttonWrapperStyle}>
        <Button
          size="size12"
          type="submit"
          disabled={urlInput.isError || titleInput.isError}
          onClick={() => {
            submitBookmark();
          }}
        >
          입력하기
        </Button>
      </div>
    </>
  );
}

const buttonWrapperStyle = css`
  display: flex;
  justify-content: flex-end;
`;

export default BookmarkInputDialog;
