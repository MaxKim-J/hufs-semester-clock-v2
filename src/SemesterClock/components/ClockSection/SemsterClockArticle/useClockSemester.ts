import { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { currentSemester, userSemester } from '@shared/atoms/userSemester';
import { Semesters } from '@shared/services/api/types';
import { getCurrentSemester } from '@/SemesterClock/utils/semesterHelper';
import { isClockExpired } from '@/SemesterClock/utils/clockHelper';

const useClockSemester = (semesterData: Semesters) => {
  const userCustomSemester = useRecoilValue(userSemester);
  const setCurrentSemester = useSetRecoilState(currentSemester);

  useEffect(() => {
    let properSemester = getCurrentSemester(semesterData as Semesters);

    if (
      userCustomSemester.status === 'initialized' &&
      userCustomSemester.value !== null
    ) {
      if (!isClockExpired(new Date(userCustomSemester.value.due))) {
        properSemester = userCustomSemester.value;
      }
    }

    setCurrentSemester(properSemester);
  }, [
    semesterData,
    setCurrentSemester,
    userCustomSemester.value,
    userCustomSemester.status,
  ]);
};

export default useClockSemester;
