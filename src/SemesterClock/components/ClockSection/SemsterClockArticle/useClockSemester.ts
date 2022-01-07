import { useEffect, useCallback } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { currentSemester, isUserSeasonal } from '@shared/atoms/userSemester';
import { Semesters } from '@shared/services/api/types';
import { getCurrentSemester } from '@/SemesterClock/utils/semesterHelper';
import { isClockExpired } from '@/SemesterClock/utils/clockHelper';

const useClockSemester = (semesterData: Semesters) => {
  const setCurrentSemester = useSetRecoilState(currentSemester);
  const isSeasonal = useRecoilValue(isUserSeasonal);

  const evaluateSemester = useCallback(() => {
    if (isSeasonal.status === 'initialized') {
      if (isClockExpired(new Date(semesterData.seasonal.due))) {
        setCurrentSemester(getCurrentSemester(semesterData as Semesters));
      } else {
        setCurrentSemester(
          isSeasonal.value
            ? semesterData.seasonal
            : getCurrentSemester(semesterData as Semesters)
        );
      }
    }
  }, [semesterData, isSeasonal, setCurrentSemester]);

  useEffect(() => {
    evaluateSemester();
  }, [semesterData, isSeasonal, evaluateSemester]);

  return evaluateSemester;
};

export default useClockSemester;
