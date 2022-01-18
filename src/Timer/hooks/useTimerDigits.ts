export type DigitType = 'hours' | 'minutes' | 'seconds';
export type ActionType = 'increase' | 'decrease';

const useTimerDigits = (targetMs: number) => {
  const hours = Math.floor((targetMs / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((targetMs / (1000 * 60)) % 60);
  const seconds = Math.floor((targetMs / 1000) % 60);

  const getTargetMsOperand = (digit: DigitType, action: ActionType) => {
    const table: { [key in string]: number } = {
      seconds: 1000,
      minutes: 1000 * 60,
      hours: 1000 * 60 * 60,
    };

    if (action === 'decrease') {
      if (digit === 'hours' && hours === 0) {
        return table[digit] * 23;
      }

      if (digit === 'minutes' && minutes === 0) {
        return table[digit] * 59;
      }

      if (digit === 'seconds' && seconds === 0) {
        return table[digit] * 59;
      }
    }

    return table[digit] * (action === 'increase' ? 1 : -1);
  };

  return {
    getTargetMsOperand,
    digits: {
      hours,
      minutes,
      seconds,
    },
  };
};

export default useTimerDigits;
