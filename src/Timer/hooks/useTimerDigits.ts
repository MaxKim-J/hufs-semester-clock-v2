import {
  getHoursFromMs,
  getMinutesFromMs,
  getSecondsFromMs,
} from '@shared/utils/timeHelper';

export type DigitType = 'hours' | 'minutes' | 'seconds';
export type ActionType = 'increase' | 'decrease';

const table: { [key in DigitType]: number } = {
  seconds: 1000,
  minutes: 1000 * 60,
  hours: 1000 * 60 * 60,
};

const useTimerDigits = (targetMs: number) => {
  const currentDigits = {
    hours: getHoursFromMs(targetMs),
    minutes: getMinutesFromMs(targetMs),
    seconds: getSecondsFromMs(targetMs),
  };

  const getTargetMsOperand = (digit: DigitType, action: ActionType) => {
    if (action === 'decrease' && currentDigits[digit] === 0) {
      return table[digit] * (digit === 'hours' ? 23 : 59);
    }
    return table[digit] * (action === 'increase' ? 1 : -1);
  };

  return {
    getTargetMsOperand,
    currentDigits,
  };
};

export default useTimerDigits;
