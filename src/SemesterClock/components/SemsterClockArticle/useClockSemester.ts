import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { currentSemester, userSemester } from '@shared/atoms/userSemester';
import { Semesters } from '@shared/services/api/types';
import { getCurrentSemester } from '@/SemesterClock/utils/semesterHelper';
import { isClockExpired } from '@/SemesterClock/utils/clockHelper';

const useClockSemester = (semesterData: Semesters) => {
  const { status: userSemesterStatus, value: userSemesterValue } =
    useRecoilValue(userSemester);
  const [semester, setCurrentSemester] = useRecoilState(currentSemester);

  useEffect(() => {
    let properSemester = getCurrentSemester(semesterData as Semesters);

    if (userSemesterStatus === 'initialized' && userSemesterValue !== null) {
      if (!isClockExpired(new Date(userSemesterValue.due))) {
        properSemester = userSemesterValue;
      }
    }

    setCurrentSemester(properSemester);
  }, [semesterData, setCurrentSemester, userSemesterStatus, userSemesterValue]);

  return semester;
};

export default useClockSemester;
