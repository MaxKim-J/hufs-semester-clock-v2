import { css } from '@emotion/react';
import { useRecoilValue } from 'recoil';
import AsyncBoundaryWithQuery from '@components/boundries/AsyncBoundaryWithQuery';
import SemesterClockArticle from '@/SemesterClock/components/ClockSection/SemsterClockArticle';
import TodayClockArticle from '@/SemesterClock/components/ClockSection/TodayClockArticle';
import { isUserSeasonal } from '@/SemesterClock/atoms';
import ClockSectionSkeleton from '@/SemesterClock/components/Skeleton/ClockSectionSkeleton';

function ClockSection() {
  const { status: isSeasonalStatus } = useRecoilValue(isUserSeasonal);

  return (
    <section css={sectionStyle}>
      {isSeasonalStatus === 'initialized' ? (
        <AsyncBoundaryWithQuery
          rejectedFallback={() => <div>실패!</div>}
          pendingFallback={<ClockSectionSkeleton />}
        >
          <SemesterClockArticle />
          <TodayClockArticle />
        </AsyncBoundaryWithQuery>
      ) : (
        <ClockSectionSkeleton />
      )}
    </section>
  );
}

const sectionStyle = css`
  height: 10rem;
`;

export default ClockSection;
