import { useCallback, useEffect, useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { sectionIndexAtom } from '@shared/atoms/common';
import { css } from '@emotion/react';
import { m } from 'framer-motion';
import { SemesterValue } from '@shared/services/api/types';
import Button from '@components/fundamentals/Button';
import Spacer from '@components/fundamentals/Spacer';
import { fadeInAndOut } from '@style/animation';
import { clockDigitData } from '@shared/data/clockDigits';
import { Text } from '@components/fundamentals/Text';
import { getAccessibilityTextByInterval } from '@/SemesterClock/utils/semesterHelper';
import { getClockIntervals } from '@/SemesterClock/utils/clockHelper';

type MainClockProps = {
  semester: SemesterValue;
  restartClock: () => void;
};

function MainClock({ semester, restartClock }: MainClockProps) {
  const [clockIntervals, setClockIntervals] = useState<
    ReturnType<typeof getClockIntervals>
  >(getClockIntervals(semester));
  const sectionIndex = useRecoilValue(sectionIndexAtom);

  const intervalId = useRef<number>(0);

  const tickClock = useCallback(() => {
    setClockIntervals(getClockIntervals(semester));
  }, [semester, setClockIntervals]);

  const operateClock = useCallback(() => {
    if (sectionIndex.current !== 0 && intervalId.current) {
      clearInterval(intervalId.current);
      return;
    }
    if (semester !== null) {
      intervalId.current = window.setInterval(tickClock, 1000);
    }
  }, [semester, tickClock, sectionIndex]);

  useEffect(operateClock, [operateClock]);

  return (
    <>
      {clockIntervals !== 'expired' && (
        <m.div
          aria-label={getAccessibilityTextByInterval(clockIntervals)}
          css={clockDigitWrapperStyle}
          {...fadeInAndOut}
        >
          {clockDigitData.map((data) => (
            <div css={clockDigitStyle} key={data.key}>
              <Text size="size96">{clockIntervals[data.key]}</Text>
              <Text size="size32" css={clockDigitFigureStyle}>
                {data.text}
              </Text>
            </div>
          ))}
        </m.div>
      )}
      {clockIntervals === 'expired' && (
        <m.div
          css={clockDigitWrapperStyle}
          {...fadeInAndOut}
          aria-label="시계 시간 만료"
        >
          <div css={expiredSectionStyle}>
            <Text>✨현재 시계의 시간이 만료되었습니다.✨</Text>
            <Text> 버튼을 눌러 새로운 시계를 시작하세요!</Text>
            <Spacer />
            <Button onClick={restartClock}>시계 재시작</Button>
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
