import { css } from '@emotion/react';
import useInput from '@shared/hooks/useInput';
import { Text } from '@components/fundamentals/Text';
import { TextInput } from '@components/fundamentals/Input';
import Spacer from '@components/fundamentals/Spacer';
import Button from '@components/fundamentals/Button';
import useCreateBookmark from '@/BookMark/hooks/useCreateBookmark';

type BookmarkInputDialogProps = {
  closeDialog: () => void;
};

function BookmarkInputDialog({ closeDialog }: BookmarkInputDialogProps) {
  const urlInput = useInput({
    name: 'url',
    validators: [{ validFunction: (text: string) => !!text }],
  });

  const titleInput = useInput({
    name: 'title',
    validators: [{ validFunction: (text: string) => !!text }],
  });

  const createBookmark = useCreateBookmark();

  const submitBookmark = () => {
    createBookmark(titleInput.value, urlInput.value);
    closeDialog();
  };

  return (
    <>
      <TextInput
        size="size12"
        title="북마크 제목 입력"
        placeholder="북마크 제목"
        maxLength={20}
        widthFigure={20}
        value={titleInput.value}
        onChange={titleInput.handleInput}
      />
      <Spacer />
      <TextInput
        title="북마크 주소 입력"
        size="size12"
        placeholder="웹사이트 주소"
        widthFigure={20}
        value={urlInput.value}
        onChange={urlInput.handleInput}
      />
      <Spacer />
      <div css={buttonWrapperStyle}>
        <Text color="gray" size="size12" css={noticeTextStyle}>
          ※ 접속 불가능한 주소를 입력하면 북마크가 작동하지 않아요!
        </Text>
        <Button
          size="size12"
          type="submit"
          disabled={urlInput.isError || titleInput.isError}
          onClick={submitBookmark}
        >
          입력하기
        </Button>
      </div>
    </>
  );
}

const buttonWrapperStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const noticeTextStyle = css`
  width: 70%;
`;

export default BookmarkInputDialog;
