import { useRecoilValue } from 'recoil';
import { Semesters, SemesterValue } from '@shared/services/api/types';
import { currentSemester } from '@shared/atoms/userSemester';
import { Text } from '@components/fundamentals/Text';
import useSemesterQuery from '@/SemesterClock/query/useSemesterQuery';
import useClockSemester from '@/SemesterClock/components/ClockSection/SemsterClockArticle/useClockSemester';
import useMainClockInterval from '@/SemesterClock/components/ClockSection/SemsterClockArticle/useMainClockInterval';
import useCleanIsSeasonalStorageData from '@/SemesterClock/components/ClockSection/SemsterClockArticle/useCleanIsSeasonalStorageData';

function SemesterClockArticle() {
  const { semesterData } = useSemesterQuery();

  const semester = useRecoilValue(currentSemester);
  useClockSemester(semesterData as Semesters);
  useCleanIsSeasonalStorageData(semesterData as Semesters);

  const intervals = useMainClockInterval(semester as SemesterValue);

  return (
    <>
      {intervals !== null && semester !== null ? (
        <article>
          <Text>
            {semester.title}
            {semester.act}까지{' '}
          </Text>
          <div css={{ display: 'flex' }}>
            <Text>{intervals.days}</Text>
            <Text>일</Text>
            <Text>{intervals.hours}</Text>
            <Text>시간</Text>
            <Text>{intervals.minutes}</Text>
            <Text>분</Text>
            <Text>{intervals.seconds}</Text>
            <Text>초</Text>
          </div>
        </article>
      ) : (
        <div>로딩</div> // TODO: Same loading component when component suspends
      )}
    </>
  );
}

export default SemesterClockArticle;
