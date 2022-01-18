import { useCallback, useEffect, useState, useRef } from 'react';
import { SemesterValue } from '@shared/services/api/types';
import { useRecoilValue } from 'recoil';
import { sectionIndexAtom } from '@shared/atoms/common';
import { getClockIntervals } from '@/SemesterClock/utils/clockHelper';

const useMainClockInterval = (semester: SemesterValue) => {
  const sectionIndex = useRecoilValue(sectionIndexAtom);

  const [clockIntervals, setClockIntervals] = useState<
    ReturnType<typeof getClockIntervals>
  >(getClockIntervals(semester));

  const tickClock = useCallback(() => {
    setClockIntervals(getClockIntervals(semester));
  }, [semester, setClockIntervals]);

  const intervalId = useRef<number>(0);

  useEffect(() => {
    if (sectionIndex.current !== 0 && intervalId.current) {
      clearInterval(intervalId.current);
      return;
    }
    if (semester !== null) {
      intervalId.current = window.setInterval(tickClock, 1000);
    }
  }, [semester, tickClock, sectionIndex]);

  return clockIntervals;
};

export default useMainClockInterval;
