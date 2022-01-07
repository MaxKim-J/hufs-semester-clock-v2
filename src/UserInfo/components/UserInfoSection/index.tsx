import { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import AsyncBoundaryWithQuery from '@components/boundries/AsyncBoundaryWithQuery';
import UserInfoInputArticle from '@/UserInfo/components/UserInfoSection/UserInfoInputArticle';
import UserInfoDisplayArticle from '@/UserInfo/components/UserInfoSection/UserInfoDisplayArticle';
import { userInfo } from '@/UserInfo/atoms';

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
    <>
      {isInputSection !== null ? (
        <>
          {isInputSection ? (
            <AsyncBoundaryWithQuery
              rejectedFallback={() => <div>실패!</div>}
              pendingFallback={<div css={{ height: '90px' }}>로딩</div>}
            >
              <UserInfoInputArticle changeSection={changeToDisplay} />
            </AsyncBoundaryWithQuery>
          ) : (
            <UserInfoDisplayArticle changeSection={changeToInput} />
          )}
        </>
      ) : (
        <div css={{ height: '90px' }}>Suspense랑 똑같은거</div>
      )}
    </>
  );
}

export default UserInfoSection;
