import { Semesters, SemesterValue } from '@shared/services/api/types';
import { Text } from '@components/fundamentals/Text';
import useSemesterQuery from '@/SemesterClock/query/useSemesterQuery';
import useClockSemester from '@/SemesterClock/components/SemsterClockArticle/useClockSemester';
import useMainClockInterval from '@/SemesterClock/components/SemsterClockArticle/useMainClockInterval';

function SemesterClockArticle() {
  const { semesterData } = useSemesterQuery();

  const semester = useClockSemester(semesterData as Semesters);
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
