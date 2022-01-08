import AsyncBoundaryWithQuery from '@components/boundries/AsyncBoundaryWithQuery';
import SemesterClockArticle from '@/SemesterClock/components/ClockSection/SemsterClockArticle';
import TodayClockArticle from '@/SemesterClock/components/ClockSection/TodayClockArticle';
import ClockSectionSkeleton from '@/SemesterClock/components/Skeleton/ClockSectionSkeleton';

function ClockSection() {
  return (
    <section>
      <AsyncBoundaryWithQuery
        rejectedFallback={() => <div>실패!</div>}
        pendingFallback={<ClockSectionSkeleton />}
      >
        <SemesterClockArticle />
      </AsyncBoundaryWithQuery>
      <TodayClockArticle />
    </section>
  );
}

export default ClockSection;
