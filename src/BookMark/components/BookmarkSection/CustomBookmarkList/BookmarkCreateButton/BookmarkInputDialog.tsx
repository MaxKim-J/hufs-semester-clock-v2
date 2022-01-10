import { Text } from '@components/fundamentals/Text';
import { css } from '@emotion/react';
import { transparentTable } from '@style/variables';
import useInput from '@shared/hooks/useInput';
import { TextInput } from '@components/fundamentals/Input';
import { useRecoilValue } from 'recoil';
import { userBookmarks } from '@/BookMark/atoms';
import Spacer from '@components/fundamentals/Spacer';
import Button from '@components/fundamentals/Button';

function BookmarkInputDialog() {
  const bookmarks = useRecoilValue(userBookmarks);

  const urlInput = useInput({
    name: 'url',
    validators: [{ validFunction: (text: string) => !!text }],
  });

  const titleInput = useInput({
    name: 'title',
    validators: [{ validFunction: (text: string) => !!text }],
  });

  return (
    <form>
      <TextInput
        size="size12"
        title="북마크 제목 입력"
        placeholder="북마크 제목"
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
            console.log('ddd');
          }}
        >
          입력하기
        </Button>
      </div>
    </form>
  );
}

const buttonWrapperStyle = css`
  display: flex;
  justify-content: flex-end;
`;

export default BookmarkInputDialog;
