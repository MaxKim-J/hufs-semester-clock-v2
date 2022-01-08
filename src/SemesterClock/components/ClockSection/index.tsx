import { css } from '@emotion/react';
import AsyncBoundaryWithQuery from '@components/boundries/AsyncBoundaryWithQuery';
import SemesterClockArticle from '@/SemesterClock/components/ClockSection/SemsterClockArticle';
import TodayClockArticle from '@/SemesterClock/components/ClockSection/TodayClockArticle';
import { useRecoilValue } from 'recoil';
import { isUserSeasonal } from '@/SemesterClock/atoms';

function ClockSection() {
  const { status: isSeasonalStatus } = useRecoilValue(isUserSeasonal);

  return (
    <section css={sectionStyle}>
      {isSeasonalStatus === 'initialized' ? (
        <AsyncBoundaryWithQuery
          rejectedFallback={() => <div>실패!</div>}
          pendingFallback={<div>로딩</div>}
        >
          <SemesterClockArticle />
          <TodayClockArticle />
        </AsyncBoundaryWithQuery>
      ) : (
        <div>로딩</div>
      )}
    </section>
  );
}

const sectionStyle = css`
  height: 10rem;
`;

export default ClockSection;
