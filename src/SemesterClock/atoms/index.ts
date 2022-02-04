import { atom } from 'recoil';
import { Semesters } from '@shared/services/api/types';
import { StorageAtom } from '@shared/atoms/types';
import storageEffect from '@shared/atoms/effect';

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
  effects_UNSTABLE: [storageEffect<boolean>('isUserSeasonal')],
});
