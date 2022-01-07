import { atom } from 'recoil';
import { StorageAtom } from '@shared/atoms/types';
import { chromeStorageEffect } from '@shared/atoms/utils';

type UserInfo = {
  name: string;
  admission: number;
};

export const userInfo = atom<StorageAtom<UserInfo>>({
  key: 'userInfo',
  default: {
    status: 'idle',
    value: null,
  },
  effects_UNSTABLE: [chromeStorageEffect<UserInfo>('userInfo')],
});
