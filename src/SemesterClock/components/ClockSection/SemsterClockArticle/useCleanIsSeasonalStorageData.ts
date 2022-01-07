import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { isUserSeasonal } from '@shared/atoms/userSemester';
import { Semesters } from '@shared/services/api/types';
import { isClockExpired } from '@/SemesterClock/utils/clockHelper';

/*
 * 현재 시점이 계절학기 중이 아닌 경우 storage에서 isSeasonal을 false로 돌려놓는 effect입니다.
 * */
const useCleanIsSeasonalStorageData = (semesterData: Semesters) => {
  const [isSeasonal, setIsSeasonal] = useRecoilState(isUserSeasonal);

  useEffect(() => {
    if (
      isSeasonal.status === 'initialized' &&
      isClockExpired(new Date(semesterData.seasonal.due))
    ) {
      setIsSeasonal((state) => ({
        ...state,
        value: false,
      }));
    }
  }, [setIsSeasonal, isSeasonal.status, semesterData]);
};

export default useCleanIsSeasonalStorageData;
