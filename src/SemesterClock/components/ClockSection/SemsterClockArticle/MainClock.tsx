import { css } from '@emotion/react';
import { m } from 'framer-motion';
import { SemesterValue } from '@shared/services/api/types';
import Button from '@components/fundamentals/Button';
import Spacer from '@components/fundamentals/Spacer';
import { fadeInAndOut } from '@style/animation';
import { clockDigitData } from '@shared/data/clockDigits';
import { Text } from '@components/fundamentals/Text';
import useMainClockInterval from '@/SemesterClock/hooks/useMainClockInterval';
import 'react-loading-skeleton/dist/skeleton.css';
import { getAccessibilityTextByInterval } from '@/SemesterClock/utils/semesterHelper';

type MainClockProps = {
  semester: SemesterValue;
  evaluateSemester: () => void;
};

function MainClock({ semester, evaluateSemester }: MainClockProps) {
  const intervals = useMainClockInterval(semester);

  return (
    <>
      {intervals !== 'expired' && (
        <m.div
          aria-label={getAccessibilityTextByInterval(intervals)}
          css={clockDigitWrapperStyle}
          {...fadeInAndOut}
        >
          {clockDigitData.map((data) => (
            <div css={clockDigitStyle} key={data.key}>
              <Text size="size96">{intervals[data.key]}</Text>
              <Text size="size32" css={clockDigitFigureStyle}>
                {data.text}
              </Text>
            </div>
          ))}
        </m.div>
      )}
      {intervals === 'expired' && (
        <m.div
          css={clockDigitWrapperStyle}
          {...fadeInAndOut}
          aria-label="시계 시간 만료"
        >
          <div css={expiredSectionStyle}>
            <Text>✨현재 시계의 시간이 만료되었습니다.✨</Text>
            <Text> 버튼을 눌러 새로운 시계를 시작하세요!</Text>
            <Spacer />
            <Button onClick={evaluateSemester}>시계 재시작</Button>
          </div>
        </m.div>
      )}
    </>
  );
}

const clockDigitWrapperStyle = css`
  display: flex;
  align-items: center;
  min-width: 42rem;
`;

const clockDigitStyle = css`
  display: flex;
  align-items: flex-end;
  margin: 0 1rem;
`;

const clockDigitFigureStyle = css`
  margin-bottom: 1.5rem;
`;

const expiredSectionStyle = css`
  text-align: center;
  margin: 0 auto;
`;

export default MainClock;
