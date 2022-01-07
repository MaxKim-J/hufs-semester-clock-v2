import { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { currentSemester, isUserSeasonal } from '@shared/atoms/userSemester';
import { Semesters } from '@shared/services/api/types';
import { getCurrentSemester } from '@/SemesterClock/utils/semesterHelper';

const useClockSemester = (semesterData: Semesters) => {
  const setCurrentSemester = useSetRecoilState(currentSemester);
  const isSeasonal = useRecoilValue(isUserSeasonal);

  useEffect(() => {
    if (isSeasonal.status === 'initialized') {
      setCurrentSemester(
        isSeasonal.value
          ? semesterData.seasonal
          : getCurrentSemester(semesterData as Semesters)
      );
    }
  }, [semesterData, setCurrentSemester, isSeasonal]);
};

export default useClockSemester;
