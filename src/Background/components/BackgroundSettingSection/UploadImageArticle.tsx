import { Heading, Text } from '@components/fundamentals/Text';
import Spacer from '@components/fundamentals/Spacer';
import { css } from '@emotion/react';
import { colorTable } from '@style/variables';
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
    <article aria-labelledby="bgimg-upload-heading">
      <Heading tag="h3" id="bgimg-upload-heading">
        이미지 업로드
      </Heading>
      <Spacer height="size8" />
      <div css={fileInputWrapperStyle}>
        <input
          type="file"
          title="배경화면 파일 업로드"
          css={fileInputStyle}
          aria-invalid={status.isError}
          aria-errormessage="upload-error-message"
          onChange={uploadBackgroundImage}
        />
        <Text
          id="upload-error-message"
          size="size12"
          role="alert"
          aria-live="polite"
          color="red"
        >
          {status.isError ? status.errorMessage : null}
        </Text>
      </div>
      <Spacer height="size8" />
      <Text size="size12">3MB 이하의 JPEG, PNG 이미지 파일만 가능합니다.</Text>
      <Text size="size12">스크린 비율에 맞는 직사각형 사진을 권장해요!</Text>
    </article>
  );
}

const fileInputStyle = css`
  color: ${colorTable.white};
  min-width: 17rem;
`;

const fileInputWrapperStyle = css`
  display: flex;
  align-items: center;
`;

export default UploadImageArticle;
