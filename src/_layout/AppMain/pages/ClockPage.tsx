import { css } from '@emotion/react';
import ClockSection from '@/SemesterClock/components';

function ClockPage() {
  return (
    <section css={clockPageStyle}>
      <ClockSection />
    </section>
  );
}

const clockPageStyle = css`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default ClockPage;
