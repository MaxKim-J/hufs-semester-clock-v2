import AsyncBoundaryWithQuery from '@components/boundries/AsyncBoundaryWithQuery';
import SemesterClockArticle from '@/SemesterClock/components/ClockSection/SemsterClockArticle';
import TodayClockArticle from '@/SemesterClock/components/ClockSection/TodayClockArticle';

function ClockSection() {
  return (
    <section>
      <AsyncBoundaryWithQuery
        rejectedFallback={() => <div>실패!</div>}
        pendingFallback={<div>로딩</div>}
      >
        <SemesterClockArticle />
      </AsyncBoundaryWithQuery>
      <TodayClockArticle />
    </section>
  );
}

export default ClockSection;
