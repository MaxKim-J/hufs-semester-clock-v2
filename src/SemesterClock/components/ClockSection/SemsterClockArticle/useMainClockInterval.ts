import { useCallback, useEffect, useState } from 'react';
import { SemesterValue } from '@shared/services/api/types';
import { getClockIntervals } from '@/SemesterClock/utils/clockHelper';

const useMainClockInterval = (semester: SemesterValue) => {
  const [clockIntervals, setClockIntervals] = useState<ReturnType<
    typeof getClockIntervals
  > | null>(getClockIntervals(semester));

  const tickClock = useCallback(() => {
    setClockIntervals(getClockIntervals(semester));
  }, [semester, setClockIntervals]);

  useEffect(() => {
    if (semester !== null) {
      const intervalId = setInterval(tickClock, 1000);
      return () => clearInterval(intervalId);
    }
    return undefined;
  }, [semester, tickClock]);

  return clockIntervals;
};

export default useMainClockInterval;
