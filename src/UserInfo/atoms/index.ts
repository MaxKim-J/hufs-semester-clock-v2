import { atom } from 'recoil';
import { StorageAtom } from '@shared/atoms/types';
import storageEffect from '@shared/atoms/effect';

export type UserInfo = {
  name: string;
  admission: string;
};

export const userInfo = atom<StorageAtom<UserInfo>>({
  key: 'userInfo',
  default: {
    status: 'idle',
    value: null,
  },
  effects_UNSTABLE: [storageEffect<UserInfo>('userInfo')],
});
