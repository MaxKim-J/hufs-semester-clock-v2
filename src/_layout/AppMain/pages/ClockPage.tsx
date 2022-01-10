import { css } from '@emotion/react';
import Spacer from '@components/fundamentals/Spacer';
import ClockSection from '@/SemesterClock/components/ClockSection';
import UserInfoSection from '@/UserInfo/components/UserInfoSection';
import BookMarkSection from '@/BookMark/components/BookmarkSection';

function ClockPage() {
  return (
    <section css={clockPageStyle}>
      <ClockSection />
      <Spacer />
      <UserInfoSection />
      <Spacer height="size32" />
      <BookMarkSection />
    </section>
  );
}

const clockPageStyle = css`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default ClockPage;
