import { useRecoilValue } from 'recoil';
import { css } from '@emotion/react';
import { Semesters } from '@shared/services/api/types';
import { currentSemester } from '@shared/atoms/userSemester';
import useSemesterQuery from '@/SemesterClock/query/useSemesterQuery';
import useClockSemester from '@/SemesterClock/components/ClockSection/SemsterClockArticle/useClockSemester';
import useCleanIsSeasonalStorageData from '@/SemesterClock/components/ClockSection/SemsterClockArticle/useCleanIsSeasonalStorageData';
import MainClock from '@/SemesterClock/components/ClockSection/SemsterClockArticle/MainClock';
import SemesterInfo from '@/SemesterClock/components/ClockSection/SemsterClockArticle/SemesterInfo';

function SemesterClockArticle() {
  const { semesterData } = useSemesterQuery();
  const semester = useRecoilValue(currentSemester);

  const evaluateSemester = useClockSemester(semesterData as Semesters);

  useCleanIsSeasonalStorageData(semesterData as Semesters);

  return (
    <>
      {semester !== null ? (
        <article css={mainClockStyle}>
          <SemesterInfo semester={semester} />
          <MainClock semester={semester} evaluateSemester={evaluateSemester} />
        </article>
      ) : (
        <div>Suspense랑 같은거</div>
      )}
    </>
  );
}

const mainClockStyle = css``;

export default SemesterClockArticle;
