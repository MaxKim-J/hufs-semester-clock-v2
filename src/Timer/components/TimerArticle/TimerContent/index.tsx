import { useState, useCallback } from 'react';
import { css } from '@emotion/react';
import Spacer from '@components/fundamentals/Spacer';
import TimerDigits from '@/Timer/components/TimerArticle/TimerContent/TimerDigits';
import TimerButtons from '@/Timer/components/TimerArticle/TimerContent/TimerButtons';
import useTimerInterval from '@/Timer/hooks/useTimerInterval';

function TimerContent() {
  const [targetMs, setTargetMs] = useState(0);
  const [isTimerOn, setIsTimerOn] = useState(false);

  const tickTimer = useCallback(() => {
    setTargetMs((prevState) => prevState - 1000);
  }, [setTargetMs]);

  const turnOnTimer = useCallback(() => {
    setIsTimerOn(true);
  }, [setIsTimerOn]);

  const turnOffTimer = useCallback(() => {
    setIsTimerOn(false);
  }, [setIsTimerOn]);

  useTimerInterval(isTimerOn, targetMs, tickTimer, turnOffTimer);

  const resetTimer = useCallback(() => {
    setTargetMs(0);
  }, [setTargetMs]);

  const operateTargetMs = useCallback(
    (operand: number) => {
      setTargetMs((prevState) => prevState + operand);
    },
    [setTargetMs]
  );

  return (
    <div css={timerStyle}>
      <Spacer />
      <TimerDigits
        targetMs={targetMs}
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
