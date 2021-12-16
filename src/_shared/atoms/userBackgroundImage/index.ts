import { atom } from 'recoil';
import { StorageAtom } from '@shared/atoms/types';
import { BackgroundImg } from '@shared/services/api/types';
import { chromeStorageEffect } from '@shared/atoms/utils';

export const userBackgroundImage = atom<StorageAtom<BackgroundImg>>({
  key: 'userBackgroundImage',
  default: {
    status: 'idle',
    value: null,
  },
  effects_UNSTABLE: [
    chromeStorageEffect<BackgroundImg>('userBackgroundImgInfo'),
  ],
});
