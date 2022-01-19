import { useRecoilValue } from 'recoil';
import { css } from '@emotion/react';
import { Heading } from '@components/fundamentals/Text';
import { readableHiddenHeading } from '@style/common';
import UserInfoDisplay from '@/UserInfo/components/UserInfoArticle/UserInfoDisplay';
import { userInfo } from '@/UserInfo/atoms';
import UserInfoSectionSkeleton from '@/UserInfo/components/Skeleton/UserInfoSectionSkeleton';

function UserInfoArticle() {
  const { status: userInfoStatus } = useRecoilValue(userInfo);

  return (
    <article
      css={userInfoSectionStyle}
      aria-labelledby="user-info-display-heading"
      aria-describedby="user-info-display-describe"
    >
      <Heading
        id="user-info-display-heading"
        tag="h2"
        css={readableHiddenHeading}
      >
        학번, 이름, 입학 경과일, 인사 메시지 표시란
      </Heading>
      <p id="user-info-display-describe" css={readableHiddenHeading}>
        바닥 글의 설정 탭에서 학번과 이름을 변경할 수 있습니다.
      </p>
      {userInfoStatus === 'initialized' ? (
        <UserInfoDisplay />
      ) : (
        <UserInfoSectionSkeleton />
      )}
    </article>
  );
}

const userInfoSectionStyle = css`
  min-height: 4rem;
`;

export default UserInfoArticle;
