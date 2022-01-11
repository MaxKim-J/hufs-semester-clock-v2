import AsyncBoundaryWithQuery from '@components/boundries/AsyncBoundaryWithQuery';
import { Text } from '@components/fundamentals/Text';
import Spacer from '@components/fundamentals/Spacer';
import { css } from '@emotion/react';
import { useRecoilValue } from 'recoil';
import { userInfo } from '@/UserInfo/atoms';
import UserInfoInputArticle from '@/UserInfo/components/UserInfoInputSection/UserInfoInputArticle';
import UserInfoInputSectionSkeleton from '@/UserInfo/components/Skeleton/UserInfoInputSectionSkeleton';

function UserInfoInputSection() {
  const { status: userInfoStatus } = useRecoilValue(userInfo);

  return (
    <section css={userInfoInputSectionStyle}>
      <Text weight="bold" size="size20">
        학번/이름 설정
      </Text>
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
      <Spacer height="size16" />
    </section>
  );
}

const userInfoInputSectionStyle = css`
  height: 7rem;
`;

export default UserInfoInputSection;
