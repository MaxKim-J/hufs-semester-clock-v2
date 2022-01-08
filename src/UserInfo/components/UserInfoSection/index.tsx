import { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import AsyncBoundaryWithQuery from '@components/boundries/AsyncBoundaryWithQuery';
import UserInfoInputArticle from '@/UserInfo/components/UserInfoSection/UserInfoInputArticle';
import UserInfoDisplayArticle from '@/UserInfo/components/UserInfoSection/UserInfoDisplayArticle';
import { userInfo } from '@/UserInfo/atoms';
import Skeleton from 'react-loading-skeleton';
import UserInfoSectionSkeleton from '@/UserInfo/components/Skeleton/UserInfoSectionSkeleton';

function UserInfoSection() {
  const { status: userInfoStatus, value: userInfoValue } =
    useRecoilValue(userInfo);
  const [isInputSection, setIsInputSection] = useState<boolean | null>(null);

  useEffect(() => {
    if (userInfoStatus === 'initialized') {
      setIsInputSection(userInfoValue === null);
    }
  }, [userInfoStatus, userInfoValue]);

  const changeToInput = () => {
    setIsInputSection(true);
  };

  const changeToDisplay = () => {
    setIsInputSection(false);
  };

  return (
    <section css={{ minHeight: '90px' }}>
      {isInputSection !== null ? (
        <>
          {isInputSection ? (
            <AsyncBoundaryWithQuery
              rejectedFallback={() => <div>실패!</div>}
              pendingFallback={<UserInfoSectionSkeleton />}
            >
              <UserInfoInputArticle changeSection={changeToDisplay} />
            </AsyncBoundaryWithQuery>
          ) : (
            <UserInfoDisplayArticle changeSection={changeToInput} />
          )}
        </>
      ) : (
        <UserInfoSectionSkeleton />
      )}
    </section>
  );
}

export default UserInfoSection;
