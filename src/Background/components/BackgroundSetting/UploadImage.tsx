import { Text } from '@components/fundamentals/Text';
import Spacer from '@components/fundamentals/Spacer';
import { css } from '@emotion/react';
import { colorTable, spaceTable } from '@style/variables';
import useCustomBackgroundUpload from '@/Background/hooks/useCustomBackgroundUpload';

function UploadImage() {
  const { status, uploadBackgroundImage } = useCustomBackgroundUpload();

  console.log(status);

  return (
    <>
      <Text>이미지 업로드</Text>
      <Spacer height="size8" />
      <div css={fileInputWrapperStyle}>
        <input
          type="file"
          css={fileInputStyle}
          onChange={uploadBackgroundImage}
        />
        <div css={fileInputDescriptionStyle}>
          {status.isLoading && <Text size="size12">변경 중...</Text>}
          {status.isError && (
            <Text size="size12" color="red">
              {status.errorMessage}
            </Text>
          )}
        </div>
      </div>
      <Spacer height="size8" />
      <Text size="size12">3MB 이하의 JPEG, PNG 이미지 파일만 가능합니다.</Text>
      <Text size="size12">스크린 비율에 맞는 직사각형 사진을 권장해요!</Text>
    </>
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

export default UploadImage;
