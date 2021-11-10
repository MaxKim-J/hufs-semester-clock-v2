import { atom } from 'recoil';
import { chromeStorageEffect } from './utils';
import { Semester } from '@/services/api/types';
import { StorageAtom } from './types';

const userSemesterInfo = atom<StorageAtom<Semester>>({
  key: 'userSemesterInfo',
  default: {
    status: 'idle',
    value: null,
  },
  effects_UNSTABLE: [chromeStorageEffect<Semester>('userSemesterInfo')],
});

export default {
  userSemesterInfo,
};
