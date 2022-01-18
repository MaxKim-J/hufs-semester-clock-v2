import { useEffect, useRef } from 'react';

const useTimerInterval = (
  isTimerOn: boolean,
  targetMs: number,
  tickTimer: () => void,
  turnOffTimer: () => void
) => {
  const intervalId = useRef<number>(0);

  useEffect(() => {
    if (isTimerOn) {
      intervalId.current = window.setInterval(() => {
        tickTimer();
      }, 1000);
    } else {
      clearInterval(intervalId.current);
    }
    return () => clearInterval(intervalId.current);
  }, [isTimerOn, tickTimer]);

  useEffect(() => {
    if (targetMs === 0 && isTimerOn && intervalId.current) {
      clearInterval(intervalId.current);
      turnOffTimer();
    }
  }, [targetMs, isTimerOn, turnOffTimer]);
};

export default useTimerInterval;
