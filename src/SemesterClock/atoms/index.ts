import { atom } from 'recoil';
import { Semesters } from '@shared/services/api/types';
import { StorageAtom } from '@shared/atoms/types';
import { chromeStorageEffect } from '@shared/atoms/utils';

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
