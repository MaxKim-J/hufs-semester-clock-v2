import { atom } from 'recoil';
import { StorageAtom } from '@shared/atoms/types';
import { BackgroundImg } from '@shared/services/api/types';
import storageEffect from '@shared/atoms/effect';

export const userBackgroundImage = atom<StorageAtom<BackgroundImg>>({
  key: 'userBackgroundImage',
  default: {
    status: 'idle',
    value: null,
  },
  effects_UNSTABLE: [storageEffect<BackgroundImg>('userBackgroundImgInfo')],
});
