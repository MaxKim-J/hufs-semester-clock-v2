import { useCallback, useState, useEffect } from 'react';
import { Semesters, SemesterValue } from '@shared/services/api/types';
import { getCurrentSemester } from '@/SemesterClock/utils/semesterHelper';

type useClockSemesterOptions = {
  semesters: Semesters;
  evaluateSemester: () => SemesterValue;
};

const useClockSemester = ({
  semesters,
  evaluateSemester,
}: useClockSemesterOptions) => {
  const [clockSemester, setClockSemester] = useState(evaluateSemester());

  useEffect(() => {
    setClockSemester(evaluateSemester());
  }, [evaluateSemester, setClockSemester]);

  const restartClock = useCallback(() => {
    setClockSemester(getCurrentSemester(semesters));
  }, [setClockSemester, semesters]);

  return {
    restartClock,
    clockSemester,
  };
};

export default useClockSemester;
