import { Text } from '@components/fundamentals/Text';
import Spacer from '@components/fundamentals/Spacer';
import { css } from '@emotion/react';
import { colorTable, spaceTable } from '@style/variables';
import useSingleFileInput from '@shared/hooks/useSingleFileInput';

function UploadImageArticle() {
  const { status, uploadBackgroundImage } = useSingleFileInput([
    {
      validFunction: (file) => file.size <= 3_000_000,
      errorMessage: '파일 용량이 초과되었어요!',
    },
    {
      validFunction: (file) => /^.*\.(png|jpeg|jpg)/.test(file.name),
      errorMessage: 'JPG, PNG만 가능해요!',
    },
  ]);

  return (
    <article>
      <Text>이미지 업로드</Text>
      <Spacer height="size8" />
      <div css={fileInputWrapperStyle}>
        <input
          type="file"
          title="배경화면 파일 업로드"
          css={fileInputStyle}
          onChange={uploadBackgroundImage}
        />
        <div css={fileInputDescriptionStyle}>
          {status.isError && (
            <Text size="size12" color="red" data-testid="errorMessage">
              {status.errorMessage}
            </Text>
          )}
        </div>
      </div>
      <Spacer height="size8" />
      <Text size="size12">3MB 이하의 JPEG, PNG 이미지 파일만 가능합니다.</Text>
      <Text size="size12">스크린 비율에 맞는 직사각형 사진을 권장해요!</Text>
    </article>
  );
}

const fileInputStyle = css`
  color: ${colorTable.white};
`;

const fileInputWrapperStyle = css`
  display: flex;
  align-items: center;
`;

const fileInputDescriptionStyle = css`
  margin-left: ${spaceTable.size8};
`;

export default UploadImageArticle;
