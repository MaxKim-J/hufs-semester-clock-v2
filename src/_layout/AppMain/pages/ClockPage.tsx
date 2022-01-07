import { css } from '@emotion/react';
import Spacer from '@components/fundamentals/Spacer';
import ClockSection from '@/SemesterClock/components/ClockSection';
import UserInfoSection from '@/UserInfo/components/UserInfoSection';

function ClockPage() {
  return (
    <section css={clockPageStyle}>
      <ClockSection />
      <Spacer />
      <UserInfoSection />
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
