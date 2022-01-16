import { atom } from 'recoil';
import { StorageAtom } from '@shared/atoms/types';
import { chromeStorageEffect } from '@shared/atoms/utils';
import { Campus } from '@shared/services/api/types';

export const userWeatherCampus = atom<StorageAtom<Campus>>({
  key: 'userWeatherCampus',
  default: {
    status: 'idle',
    value: null,
  },
  effects_UNSTABLE: [chromeStorageEffect<Campus>('userWeatherCampus')],
});
