import { atom, selector } from 'recoil';
import { SemesterValue, Semesters } from '@shared/services/api/types';
import { StorageAtom } from '@shared/atoms/types';
import { chromeStorageEffect } from '@shared/atoms/utils';
import { getSemester } from '@shared/services/api';
import { getCurrentSemester } from '@/SemesterClock/utils/semesterHelper';

export const semesters = atom<Semesters | null>({
  key: 'semesters',
  default: null,
});

export const isUserSeasonal = atom<StorageAtom<boolean>>({
  key: 'isUserSeasonal',
  default: {
    status: 'idle',
    value: null,
  },
  effects_UNSTABLE: [chromeStorageEffect<boolean>('isUserSeasonal')],
});

export const currentSemester = selector<SemesterValue | undefined>({
  key: 'currentSemester',
  get: ({ get }) => {
    if (get(semesters) !== null) {
      if (get(isUserSeasonal).value) {
        return get(semesters)!.seasonal;
      }
      return getCurrentSemester(get(semesters)!);
    }
    return undefined;
  },
});
