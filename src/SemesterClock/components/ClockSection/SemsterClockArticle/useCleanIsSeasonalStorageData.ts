import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { isUserSeasonal } from '@shared/atoms/userSemester';
import { Semesters } from '@shared/services/api/types';
import { getCurrentSemester } from '@/SemesterClock/utils/semesterHelper';

/*
 * 계절학기 중이 아닌 경우 storage에서 isSeasonal을 제거하는 effect입니다.
 * */
const useCleanIsSeasonalStorageData = (semesterData: Semesters) => {
  const [isSeasonal, setIsSeasonal] = useRecoilState(isUserSeasonal);

  useEffect(() => {
    const tempCurrentSemester = getCurrentSemester(semesterData as Semesters);
    if (
      isSeasonal.status === 'initialized' &&
      tempCurrentSemester.id !== 'next'
    ) {
      setIsSeasonal((state) => ({
        ...state,
        value: false,
      }));
    }
  }, [setIsSeasonal, isSeasonal.status, semesterData]);
};

export default useCleanIsSeasonalStorageData;
