import { useState } from 'react';
import { css } from '@emotion/react';
import Button from '@components/fundamentals/Button';
import { Text } from '@components/fundamentals/Text';
import Spacer from '@components/fundamentals/Spacer';
import { Campus } from '@shared/services/api/types';
import { spaceTable } from '@style/variables';
import useUpdateBackgroundQuery from '@/Background/query/useBackgroundUpdateQuery';

function DefaultImage() {
  const [campusParameterForQuery, setCampusParameterForQuery] =
    useState<Campus | null>(null);

  const { isFetching, isError } = useUpdateBackgroundQuery(
    campusParameterForQuery
  );

  return (
    <>
      <div css={defaultImageTitleStyle}>
        <Text>기본 배경화면</Text>
        <span css={imageButtonWrapperStyle}>
          <Button
            css={imageButtonStyle}
            type="button"
            size="size12"
            onClick={() => {
              setCampusParameterForQuery('seoul');
            }}
          >
            서울
          </Button>
          <Button
            css={imageButtonStyle}
            type="button"
            size="size12"
            onClick={() => {
              setCampusParameterForQuery('global');
            }}
          >
            글로벌
          </Button>
          {/* TODO: 이거 다이얼로그 반응 ROLL 처리하기 */}
          {isFetching ? <Text size="size12">변경 중...</Text> : null}
          {isError ? (
            <Text size="size12" color="red">
              변경 실패
            </Text>
          ) : null}
        </span>
      </div>
      <Spacer />
      <Text size="size12">
        기본 배경화면을 선택하면, 낮/밤 다른 시간이 표시됩니다
      </Text>
      <Text size="size12">Photo By Kihyun Lim, Sangyoung Oh</Text>
    </>
  );
}

const defaultImageTitleStyle = css`
  display: flex;
  align-items: center;
`;

const imageButtonWrapperStyle = css`
  margin-left: ${spaceTable.size8};
  display: flex;
  align-items: center;
`;

const imageButtonStyle = css`
  margin-right: ${spaceTable.size4};
`;

export default DefaultImage;
