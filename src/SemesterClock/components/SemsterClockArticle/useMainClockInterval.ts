import { useCallback, useEffect, useState } from 'react';
import { getClockIntervals } from '@/SemesterClock/utils/clockHelper';
import { SemesterValue } from '@shared/services/api/types';

const useMainClockInterval = (semester: SemesterValue) => {
  const [clockIntervals, setClockIntervals] = useState<ReturnType<
    typeof getClockIntervals
  > | null>(null);

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
