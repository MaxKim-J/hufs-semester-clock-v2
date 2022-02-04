import { atom } from 'recoil';
import { StorageAtom } from '@shared/atoms/types';
import storageEffect from '@shared/atoms/effect';

export const userLatestFeedbackDate = atom<StorageAtom<number>>({
  key: 'userLatestFeedbackDate',
  default: {
    status: 'idle',
    value: null,
  },
  effects_UNSTABLE: [storageEffect<number>('userLatestFeedbackDate')],
});
