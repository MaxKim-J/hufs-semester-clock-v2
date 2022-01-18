import { atom } from 'recoil';
import { StorageAtom } from '@shared/atoms/types';
import { chromeStorageEffect } from '@shared/atoms/utils';

export const userLatestFeedbackDate = atom<StorageAtom<number>>({
  key: 'userLatestFeedbackDate',
  default: {
    status: 'idle',
    value: null,
  },
  effects_UNSTABLE: [chromeStorageEffect<number>('userLatestFeedbackDate')],
});
