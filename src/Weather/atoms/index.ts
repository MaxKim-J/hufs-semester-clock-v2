import { atom } from 'recoil';
import { StorageAtom } from '@shared/atoms/types';
import storageEffect from '@shared/atoms/effect';
import { Campus } from '@shared/services/api/types';

export const userWeatherCampus = atom<StorageAtom<Campus>>({
  key: 'userWeatherCampus',
  default: {
    status: 'idle',
    value: null,
  },
  effects_UNSTABLE: [storageEffect<Campus>('userWeatherCampus')],
});
