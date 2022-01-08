import { useCallback, useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { Semesters } from '@shared/services/api/types';
import { isUserSeasonal } from '../../../atoms';
import { getCurrentSemester } from '@/SemesterClock/utils/semesterHelper';

const useClockSemester = (semesters: Semesters) => {
  const isSeasonal = useRecoilValue(isUserSeasonal);

  const evaluateSemester = useCallback(() => {
    return isSeasonal.value === true
      ? semesters.seasonal
      : getCurrentSemester(semesters);
  }, [isSeasonal.value, semesters]);

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
