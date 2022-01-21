import { useState, useCallback } from 'react';
import { css } from '@emotion/react';
import Spacer from '@components/fundamentals/Spacer';
import TimerDigits from '@/Timer/components/TimerArticle/TimerContent/TimerDigits';
import TimerButtons from '@/Timer/components/TimerArticle/TimerContent/TimerButtons';
import useTimerInterval from '@/Timer/hooks/useTimerInterval';

function TimerContent() {
  const [targetTime, setTargetTime] = useState(0);
  const [isTimerOn, setIsTimerOn] = useState(false);

  const turnOnTimer = useCallback(() => {
    setIsTimerOn(true);
  }, [setIsTimerOn]);

  const turnOffTimer = useCallback(() => {
    setIsTimerOn(false);
  }, [setIsTimerOn]);

  const tickTimer = useCallback(() => {
    setTargetTime((prevState) => prevState - 1000);
  }, [setTargetTime]);

  useTimerInterval(isTimerOn, targetTime, tickTimer, turnOffTimer);

  const resetTimer = useCallback(() => {
    setTargetTime(0);
  }, [setTargetTime]);

  const operateTargetMs = useCallback(
    (operand: number) => {
      setTargetTime((prevState) => prevState + operand);
    },
    [setTargetTime]
  );

  return (
    <div css={timerStyle}>
      <Spacer />
      <TimerDigits
        targetTime={targetTime}
        isTimerOn={isTimerOn}
        operateTargetMs={operateTargetMs}
      />
      <TimerButtons
        isTimerOn={isTimerOn}
        turnOffTimer={turnOffTimer}
        turnOnTimer={turnOnTimer}
        resetTimer={resetTimer}
      />
    </div>
  );
}

const timerStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default TimerContent;
