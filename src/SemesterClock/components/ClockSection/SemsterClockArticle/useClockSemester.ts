import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { currentSemester } from '@shared/atoms/userSemester';
import { Semesters } from '@shared/services/api/types';
import { getCurrentSemester } from '@/SemesterClock/utils/semesterHelper';

const useClockSemester = (semesterData: Semesters) => {
  const setCurrentSemester = useSetRecoilState(currentSemester);
  useEffect(() => {
    setCurrentSemester(getCurrentSemester(semesterData as Semesters));
  }, [semesterData, setCurrentSemester]);
};

export default useClockSemester;
