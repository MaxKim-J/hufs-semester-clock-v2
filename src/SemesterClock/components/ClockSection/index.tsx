import { css } from '@emotion/react';
import { useRecoilValue } from 'recoil';
import { Heading } from '@components/fundamentals/Text';
import { readableHiddenHeading } from '@style/common';
import AsyncBoundaryWithQuery from '@components/boundries/AsyncBoundaryWithQuery';
import SemesterClockArticle from '@/SemesterClock/components/ClockSection/SemsterClockArticle';
import TodayClockArticle from '@/SemesterClock/components/ClockSection/TodayClockArticle';
import { isUserSeasonal } from '@/SemesterClock/atoms';
import ClockSectionSkeleton from '@/SemesterClock/components/Skeleton/ClockSectionSkeleton';

function ClockSection() {
  const { status: isSeasonalStatus } = useRecoilValue(isUserSeasonal);

  return (
    <section css={sectionStyle} aria-labelledby="clock-section-heading">
      <Heading tag="h2" id="clock-section-heading" css={readableHiddenHeading}>
        종강 시계
      </Heading>
      {isSeasonalStatus === 'initialized' ? (
        <AsyncBoundaryWithQuery pendingFallback={<ClockSectionSkeleton />}>
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
