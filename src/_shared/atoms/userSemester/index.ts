import { atom } from 'recoil';
import { SemesterType, SemesterValue } from '@shared/services/api/types';
import { chromeStorageEffect } from '../utils';
import { StorageAtom } from '../types';

export const userSemester = atom<StorageAtom<SemesterValue>>({
  key: 'userSemester',
  default: {
    status: 'idle',
    value: null,
  },
  effects_UNSTABLE: [chromeStorageEffect<SemesterValue>('userSemester')],
});

export const currentSemester = atom<SemesterValue | null>({
  key: 'currentSemester',
  default: null,
});
