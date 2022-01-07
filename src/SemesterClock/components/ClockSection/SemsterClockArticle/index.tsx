import { useRef } from 'react';
import { useRecoilValue } from 'recoil';
import { css } from '@emotion/react';
import { Semesters, SemesterValue } from '@shared/services/api/types';
import { currentSemester } from '@shared/atoms/userSemester';
import { Text } from '@components/fundamentals/Text';
import useSemesterQuery from '@/SemesterClock/query/useSemesterQuery';
import useClockSemester from '@/SemesterClock/components/ClockSection/SemsterClockArticle/useClockSemester';
import useMainClockInterval from '@/SemesterClock/components/ClockSection/SemsterClockArticle/useMainClockInterval';
import useCleanIsSeasonalStorageData from '@/SemesterClock/components/ClockSection/SemsterClockArticle/useCleanIsSeasonalStorageData';
import { DurationKeys } from '@/SemesterClock/utils/clockHelper';
import { formatDate } from '@/_shared/utils/formatHelper';

function SemesterClockArticle() {
  const { semesterData } = useSemesterQuery();

  const semester = useRecoilValue(currentSemester);
  useClockSemester(semesterData as Semesters);
  useCleanIsSeasonalStorageData(semesterData as Semesters);

  const intervals = useMainClockInterval(semester as SemesterValue);

  const clockDigitData = useRef<{ key: DurationKeys; text: string }[]>([
    {
      key: 'days',
      text: '일',
    },
    {
      key: 'hours',
      text: '시간',
    },
    {
      key: 'minutes',
      text: '분',
    },
    {
      key: 'seconds',
      text: '초',
    },
  ]).current;

  return (
    <>
      {intervals !== null && semester !== null ? (
        <article css={mainClockStyle}>
          <Text css={semesterTextStyle}>
            {semester.title}학기 {semester.act}(
            {formatDate(new Date(semester.due))})까지
          </Text>
          <div css={clockDigitWrapperStyle}>
            {clockDigitData.map((data) => (
              <div css={clockDigitStyle} key={data.key}>
                <Text size="size96">{intervals[data.key]}</Text>
                <Text size="size32" css={clockDigitFigureStyle}>
                  {data.text}
                </Text>
              </div>
            ))}
          </div>
        </article>
      ) : (
        <div>로딩</div> // TODO: Same loading component when component suspends
      )}
    </>
  );
}

const mainClockStyle = css``;

const semesterTextStyle = css`
  text-align: center;
`;

const clockDigitWrapperStyle = css`
  display: flex;
`;

const clockDigitStyle = css`
  display: flex;
  align-items: flex-end;
  margin: 0 1rem;
`;

const clockDigitFigureStyle = css`
  margin-bottom: 1.5rem;
`;

export default SemesterClockArticle;
