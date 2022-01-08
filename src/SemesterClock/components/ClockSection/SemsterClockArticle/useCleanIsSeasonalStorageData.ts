import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { isUserSeasonal } from '../../../atoms';
import { Semesters, SemesterValue } from '@shared/services/api/types';
import { isClockExpired } from '@/SemesterClock/utils/clockHelper';

/*
 * 현재 시점이 계절학기 중이 아닌 경우 storage에서 isSeasonal을 false로 돌려놓는 effect입니다.
 * */
const useCleanIsSeasonalStorageData = (seasonalSemester: SemesterValue) => {
  const [isSeasonal, setIsSeasonal] = useRecoilState(isUserSeasonal);
  useEffect(() => {
    if (isClockExpired(new Date(seasonalSemester.due))) {
      setIsSeasonal((state) => ({
        ...state,
        value: false,
      }));
    }
  }, [setIsSeasonal, isSeasonal.status, seasonalSemester]);
};

export default useCleanIsSeasonalStorageData;
