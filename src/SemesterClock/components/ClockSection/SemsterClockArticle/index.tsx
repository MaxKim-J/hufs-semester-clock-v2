import { css } from '@emotion/react';
import { Semesters } from '@shared/services/api/types';
import useSemesterQuery from '@/SemesterClock/query/useSemesterQuery';
import useCleanIsSeasonalStorageData from '@/SemesterClock/components/ClockSection/SemsterClockArticle/useCleanIsSeasonalStorageData';
import MainClock from '@/SemesterClock/components/ClockSection/SemsterClockArticle/MainClock';
import SemesterInfo from '@/SemesterClock/components/ClockSection/SemsterClockArticle/SemesterInfo';
import useClockSemester from '@/SemesterClock/components/ClockSection/SemsterClockArticle/useClockSemester';

function SemesterClockArticle() {
  const semesterData = useSemesterQuery() as Semesters;
  useCleanIsSeasonalStorageData(semesterData.seasonal);

  const { restartClock, clockSemester } = useClockSemester(semesterData);

  return (
    <article css={mainClockStyle}>
      <SemesterInfo semester={clockSemester} />
      <MainClock semester={clockSemester} evaluateSemester={restartClock} />
    </article>
  );
}

const mainClockStyle = css`
  height: 8.75rem;
`;

export default SemesterClockArticle;
