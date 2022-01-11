import { useRecoilValue } from 'recoil';
import { css } from '@emotion/react';
import UserInfoDisplayArticle from '@/UserInfo/components/UserInfoSection/UserInfoDisplayArticle';
import { userInfo } from '@/UserInfo/atoms';
import UserInfoSectionSkeleton from '@/UserInfo/components/Skeleton/UserInfoSectionSkeleton';

function UserInfoSection() {
  const { status: userInfoStatus } = useRecoilValue(userInfo);

  return (
    <section css={userInfoSectionStyle}>
      {userInfoStatus === 'initialized' ? (
        <UserInfoDisplayArticle />
      ) : (
        <UserInfoSectionSkeleton />
      )}
    </section>
  );
}

const userInfoSectionStyle = css`
  min-height: 4rem;
`;

export default UserInfoSection;
