import AsyncBoundaryWithQuery from '@components/boundries/AsyncBoundaryWithQuery';
import { Heading } from '@components/fundamentals/Text';
import Spacer from '@components/fundamentals/Spacer';
import { css } from '@emotion/react';
import { useRecoilValue } from 'recoil';
import { userInfo } from '@/UserInfo/atoms';
import UserInfoInputArticle from '@/UserInfo/components/UserInfoInputArticle/UserInfoInput';
import UserInfoInputSectionSkeleton from '@/UserInfo/components/Skeleton/UserInfoInputSectionSkeleton';

function UserInfoInputSection() {
  const { status: userInfoStatus } = useRecoilValue(userInfo);

  return (
    <article
      css={userInfoInputSectionStyle}
      aria-labelledby="user-info-setting-heading"
    >
      <Heading tag="h2" id="user-info-setting-heading">
        학번/이름 설정
      </Heading>
      <Spacer height="size16" />
      {userInfoStatus === 'initialized' ? (
        <AsyncBoundaryWithQuery
          pendingFallback={<UserInfoInputSectionSkeleton />}
          rejectedFallback={() => <div>실패</div>}
        >
          <UserInfoInputArticle />
        </AsyncBoundaryWithQuery>
      ) : (
        <UserInfoInputSectionSkeleton />
      )}
    </article>
  );
}

const userInfoInputSectionStyle = css`
  height: 6rem;
`;

export default UserInfoInputSection;
