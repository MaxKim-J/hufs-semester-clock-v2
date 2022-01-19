import { useCallback } from 'react';
import { useRecoilValue } from 'recoil';
import { css } from '@emotion/react';
import { Semesters } from '@shared/services/api/types';
import { Heading } from '@components/fundamentals/Text';
import { readableHiddenHeading } from '@style/common';
import useSemesterQuery from '@/SemesterClock/queries/useSemesterQuery';
import useCleanIsSeasonalStorageData from '@/SemesterClock/hooks/useCleanIsSeasonalStorageData';
import MainClock from '@/SemesterClock/components/ClockSection/SemsterClockArticle/MainClock';
import SemesterInfo from '@/SemesterClock/components/ClockSection/SemsterClockArticle/SemesterInfo';
import useClockSemester from '@/SemesterClock/hooks/useClockSemester';
import { isUserSeasonal } from '@/SemesterClock/atoms';
import { getCurrentSemester } from '@/SemesterClock/utils/semesterHelper';

function SemesterClockArticle() {
  const semesterData = useSemesterQuery() as Semesters;
  useCleanIsSeasonalStorageData(semesterData.seasonal);

  const isSeasonal = useRecoilValue(isUserSeasonal);

  const evaluateSemester = useCallback(
    () =>
      isSeasonal.value === true
        ? semesterData.seasonal
        : getCurrentSemester(semesterData),
    [isSeasonal.value, semesterData]
  );

  const { restartClock, clockSemester } = useClockSemester({
    semesters: semesterData,
    evaluateSemester,
  });

  return (
    <article
      css={mainClockStyle}
      aria-labelledby="semester-clock-heading"
      aria-describedby="semester-clock-describe"
    >
      <Heading tag="h3" id="semester-clock-heading" css={readableHiddenHeading}>
        {clockSemester.act}시간, {clockSemester.act}까지 남은 시간 표시
      </Heading>
      <p id="semester-clock-describe" css={readableHiddenHeading}>
        종강시계는 1초마다 값이 바뀌는 타이머 시계입니다. 현재가 계절학기 수강
        기간인 경우, 설정 탭에서 계절학기 종강시간으로 바꿀 수 있습니다.
      </p>
      <SemesterInfo semester={clockSemester} />
      <MainClock semester={clockSemester} evaluateSemester={restartClock} />
    </article>
  );
}

const mainClockStyle = css`
  height: 8.75rem;
`;

export default SemesterClockArticle;
